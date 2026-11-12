// PRE-RUN 16 changes: the rate is any whole number from 100 to 2,000 read from control/LANE-RATE every tick (the duel
// controller moves it); fee cap 40,000 tKAS and moved cap 45,000 (were 16,000 / 20,000); the pile floor (100,000) stays.
// PRE-RUN 15 changes: ready-mass hold 80 blocks (was 45), submit cap 1,200 a minute / 20 a second (was 600 / 10), rate 100,
// 126 or 150 (was 100 or 126). Nothing else changed. Pre-run 13/14 header follows.
// heavy-lane.mjs: pre-run 13's own heavy-mass competitor lane. TESTNET-10 ONLY. Private run folder; ids stay on this desk.
// One process, started detached by the desk runner (a kid like the probe). Funded only from the payment pile (key 16).
// Shape: one input (the chain's own coin, key 16), two plain pay-to-key outputs (plurality 1): 0.0375 tKAS to our own sink key
// (private/sink.key, a dedicated key that holds nothing else) and the change back to key 16. Storage mass about 266,667 by the
// v2.1.0 formula, which our SDK and the desk node agreed on in the calibration (private/heavy-calib.json, required).
// Fee = rate x max(SDK compute mass, SDK storage mass); rate 100, or 126 when the runner says so.
// Control (the runner writes them): control/LANE-N (ready-count cap N: chains 1..N may each hold one transaction in the
// mempool, and a chain's next transaction goes out only after its previous one has left the mempool, so every lane
// transaction is ready), control/LANE-RATE. control/STOP ends the lane.
// Guards: pause while the probe reads more than N+2 lane entries in the mempool for three samples in a row (resume at <= N);
// at most 600 submits a minute (10 a second); hold while the desk mempool is at or over 90,000 or ready mass over 45 blocks;
// stop (idle, alive) at 16,000 tKAS of fees, 20,000 tKAS moved (fees + parked), or the pile estimate under 100,000 tKAS;
// stop (idle) on any rejection other than orphan/already-spent timing, or if the node's fee rate or mass on our own entries
// drifts from the calibration (rate outside 99-101 x step rate / 100, storage off the SDK by more than 1 percent).
// lane-minute.log carries the N and rate the lane read at the first tick of that minute (the runner sets them 0.3 s before
// the boundary).
// Files: private/heavytx.txt (one id per line, for the probe and the counter), private/heavy-submit.jsonl, logs/lane-minute.log,
// private/heavy-total.json. phase.log lines LANE_*. Prints counts only; no id, address, key or host leaves this desk.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const KIT = process.env.STORM_KIT;
const U = (f) => "file:///" + path.join(KIT, f).replace(/\\/g, "/");
const { CFG, P, connect, to, phase, sleep, massOf, reason } = await import(U("lib.mjs"));
const { keyAddress } = await import(U("covenant.mjs"));
const k = createRequire(import.meta.url)(CFG.kaspa_sdk);
const NET = "testnet-10";
const SINK_SOMPI = 3_750_000n, MIN_CHANGE = 100_000_000n, RETIRE = 200_000_000n;
const CAP_FEES = 40_000e8, CAP_MOVED = 45_000e8, PILE_FLOOR = 100_000e8, PER_MIN = 1200, PER_S = 20;   // pre-run 16: fee cap 40,000 tKAS (the duel may reach 2,000)   // pre-run 15: 1,200 a minute (N=60 must not meet the submit cap)
const MEMPOOL_HOLD = 90000, READY_HOLD = 80;   // pre-run 15: hold raised from 45 to 80 blocks (the lane uncapped at N=60)
const isoZ = (ms = Date.now()) => new Date(ms).toISOString().replace(/\.\d+Z$/, "Z");
const mkey = (ms) => new Date(ms).toISOString().slice(0, 16);
const calib = (() => { try { return JSON.parse(fs.readFileSync(P("private", "heavy-calib.json"), "utf8")); } catch { return null; } })();
if (!calib || calib.ok !== 1) { phase("LANE_REFUSED reason=no-calibration"); process.exit(3); }
const sinkHex = fs.readFileSync(P("private", "sink.key"), "utf8").trim();
const SINK = new k.PrivateKey(sinkHex).toKeypair().toAddress(NET).toString();
const keyHex = fs.readFileSync(CFG.keys_file, "utf8").trim().split(/\r?\n/)[16].trim();
const pk16 = new k.PrivateKey(keyHex); const A16 = keyAddress(16);
if (pk16.toKeypair().toAddress(NET).toString() !== A16) { phase("LANE_REFUSED reason=key16-mismatch"); process.exit(3); }
const rd = (f, d) => { try { return fs.readFileSync(P("control", f), "utf8").trim(); } catch { return d; } };
const rpc = await connect(CFG.main_node_url, 4);
const si = await to(rpc.getServerInfo(), 8000); if (si.networkId !== "testnet-10" || !si.isSynced) { phase("LANE_REFUSED reason=node"); process.exit(2); }
const bag = ((await to(rpc.getUtxosByAddresses({ addresses: [A16] }), 120000)).entries || []).filter((e) => !e.isCoinbase && BigInt(e.amount) >= 1_000_000_000n && BigInt(e.amount) < 10_000_000_000_000n).sort((a, b) => (BigInt(a.amount) > BigInt(b.amount) ? -1 : 1));
const pileStart = bag.reduce((s, e) => s + Number(e.amount), 0);
const SPK = bag[0]?.scriptPublicKey;
let next = 0; const takeCoin = () => (next < bag.length ? bag[next++] : null);
const entryOf = (e) => ({ address: A16, outpoint: { transactionId: String(e.outpoint.transactionId), index: Number(e.outpoint.index) }, amount: BigInt(e.amount), scriptPublicKey: e.scriptPublicKey || SPK, blockDaaScore: BigInt(e.blockDaaScore || 0), isCoinbase: false });
const chains = [];   // slot -> { coin, pending, pendingAt, hops, orphanSince }
const tot = { submits: 0, ok: 0, rej: 0, orphan_retry: 0, lost: 0, already: 0, retired: 0, fees: 0, parked: 0, coins_taken: 0 };
let min = { k: mkey(Date.now()), n: null, rate: null, submits: 0, ok: 0, rej: 0, orphan: 0, lost: 0 }; let nodeRate = { lo: null, hi: null, smOff: 0, seen: 0 };
let stopped = null, paused = false, held = false, over = 0, lastSampleTs = "";
const SUB = P("private", "heavy-submit.jsonl"), IDS = P("private", "heavytx.txt"), LM = P("logs", "lane-minute.log");
function build(coin, rate) {
  const amt = BigInt(coin.amount); let fee = 300_000_00n; let tx = null, sm = 0, cm = 0;
  for (let i = 0; i < 3; i++) {
    const change = amt - SINK_SOMPI - fee; if (change < MIN_CHANGE) return null;
    tx = k.createTransaction([coin], [new k.PaymentOutput(new k.Address(SINK), SINK_SOMPI), new k.PaymentOutput(new k.Address(A16), change)], 0n, undefined, 1);
    sm = Number(k.calculateStorageMass(NET, [Number(amt)], [Number(SINK_SOMPI), Number(change)])); cm = massOf(tx);
    const f2 = BigInt(Math.max(sm, cm)) * BigInt(rate); if (f2 === fee) break; fee = f2;
  }
  const change = amt - SINK_SOMPI - fee; if (change < MIN_CHANGE) return null;
  tx = k.createTransaction([coin], [new k.PaymentOutput(new k.Address(SINK), SINK_SOMPI), new k.PaymentOutput(new k.Address(A16), change)], 0n, undefined, 1);
  if (Math.max(sm, cm) > 500000) return null;
  return { tx, fee, change, sm, cm };
}
function flushMinute(nowK, N, RATE, pendingN) {
  if (nowK === min.k) return;
  fs.appendFileSync(LM, `${min.k}Z n=${min.n ?? N} rate=${min.rate ?? RATE} submits=${min.submits} ok=${min.ok} rej=${min.rej} orphan_retry=${min.orphan} lost=${min.lost} paused=${paused ? 1 : 0} held=${held ? 1 : 0} stopped=${stopped || "-"} pending=${pendingN} fees_tkas=${(tot.fees / 1e8).toFixed(2)} moved_tkas=${((tot.fees + tot.parked) / 1e8).toFixed(2)} node_rate=${nodeRate.lo ?? "-"}..${nodeRate.hi ?? "-"} node_seen=${nodeRate.seen} sm_off=${nodeRate.smOff}\n`);
  min = { k: nowK, n: N, rate: RATE, submits: 0, ok: 0, rej: 0, orphan: 0, lost: 0 }; nodeRate = { lo: null, hi: null, smOff: 0, seen: 0 };
}
function probeLast() {
  try { const f = P("logs", "mempool.jsonl"); const st = fs.statSync(f); const n = Math.min(st.size, 16384); const fd = fs.openSync(f, "r"); const b = Buffer.alloc(n); fs.readSync(fd, b, 0, n, st.size - n); fs.closeSync(fd);
    const ls = b.toString("utf8").trim().split("\n"); return JSON.parse(ls[ls.length - 1]); } catch { return null; }
}
phase(`LANE_START pile_coins=${bag.length} pile_tkas=${Math.round(pileStart / 1e8)} calib_sdk_storage=${calib.sdk_storage} calib_node_storage=${calib.node_storage} calib_rate=${calib.node_rate}`);
let bucket = PER_S, lastFill = Date.now();
while (!fs.existsSync(P("control", "STOP"))) {
  const t0 = Date.now();
  const N = Math.max(0, Math.min(200, Number(rd("LANE-N", "0")) || 0)); const RATE = Math.min(2000, Math.max(100, Math.round(Number(rd("LANE-RATE", "100")) || 100)));   // pre-run 15: 150 too
  // our entries in the desk mempool (one call)
  let inMp = null;
  try {
    const r = await to(rpc.getMempoolEntriesByAddresses({ addresses: [A16], includeOrphanPool: false, filterTransactionPool: false }), 20000);
    inMp = new Map();
    for (const a of r.entries || []) for (const e of [...(a.sending || []), ...(a.receiving || [])]) { const t = e.transaction; inMp.set(String(t.verboseData.transactionId), { fee: Number(e.fee), sm: Number(t.storageMass) || Number(t.mass) || 0, cm: Number(t.verboseData?.computeMass) || 0 }); }
  } catch (e) { inMp = null; }
  const pendingN = chains.filter((c) => c && c.pending).length;
  flushMinute(mkey(t0), N, RATE, pendingN);
  if (inMp) {
    for (const c of chains) {
      if (!c || !c.pending) continue;
      const m = inMp.get(c.pending.txid);
      if (m && m.sm > 0) { const rate = m.fee / Math.max(1, m.sm, m.cm); const r1 = Math.round(rate * 100) / 100; nodeRate.lo = nodeRate.lo == null ? r1 : Math.min(nodeRate.lo, r1); nodeRate.hi = nodeRate.hi == null ? r1 : Math.max(nodeRate.hi, r1); nodeRate.seen++;
        const off = Math.abs(m.sm - c.pending.sm) / Math.max(1, c.pending.sm); if (off > 0.01) nodeRate.smOff++;
        if (!stopped && (off > 0.01 || rate < 0.99 * c.pending.rate || rate > 1.01 * c.pending.rate)) { stopped = "calib-drift"; phase(`LANE_STOP reason=calib-drift node_rate=${r1} step_rate=${c.pending.rate} sm_off=${off.toFixed(4)}`); } }
      else if (!m && t0 - c.pendingAt > 1500) { c.coin = c.pending.child; c.pending = null; c.hops++; }
    }
  }
  // guards from the probe's last sample
  const s = probeLast();
  if (s && s.ts !== lastSampleTs) {
    lastSampleTs = s.ts;
    const ours = s.cls?.heavy?.n;
    if (Number.isFinite(ours)) { if (ours > N + 2) over++; else over = 0; if (!paused && over >= 3) { paused = true; phase(`LANE_PAUSE ours=${ours} n=${N}`); } else if (paused && ours <= N) { paused = false; over = 0; phase(`LANE_RESUME ours=${ours} n=${N}`); } }
    const h = Number(s.size) >= MEMPOOL_HOLD || Number(s.ready_blocks) > READY_HOLD;
    if (h && !held) { held = true; phase(`LANE_HOLD mempool=${s.size} ready_blocks=${s.ready_blocks ?? "-"}`); } else if (!h && held) { held = false; phase(`LANE_HOLD_CLEAR mempool=${s.size} ready_blocks=${s.ready_blocks ?? "-"}`); }
  }
  if (!stopped && (tot.fees >= CAP_FEES || tot.fees + tot.parked >= CAP_MOVED || pileStart - tot.fees - tot.parked < PILE_FLOOR)) { stopped = "cap"; phase(`LANE_CAP fees_tkas=${(tot.fees / 1e8).toFixed(2)} moved_tkas=${((tot.fees + tot.parked) / 1e8).toFixed(2)}`); }
  const now = Date.now(); bucket = Math.min(PER_S, bucket + ((now - lastFill) / 1000) * PER_S); lastFill = now;
  if (!stopped && !paused && !held && inMp) {
    const jobs = [];
    for (let i = 0; i < N; i++) {
      if (bucket < 1 || min.submits >= PER_MIN) break;
      let c = chains[i]; if (!c) { const coin = takeCoin(); if (!coin) { stopped = "pile-empty"; phase("LANE_STOP reason=pile-empty"); break; } tot.coins_taken++; c = chains[i] = { coin: entryOf(coin), pending: null, pendingAt: 0, hops: 0, orphanSince: 0 }; }
      if (c.pending) continue;
      if (BigInt(c.coin.amount) < RETIRE) { const coin = takeCoin(); if (!coin) { stopped = "pile-empty"; phase("LANE_STOP reason=pile-empty"); break; } tot.retired++; tot.coins_taken++; c.coin = entryOf(coin); c.orphanSince = 0; }
      const b = build(c.coin, RATE); if (!b) { tot.retired++; const coin = takeCoin(); if (!coin) break; tot.coins_taken++; c.coin = entryOf(coin); continue; }
      let signed; try { signed = k.signTransaction(b.tx, [pk16], true); } catch (e) { stopped = "sign"; phase("LANE_STOP reason=sign"); break; }
      const txid = String(b.tx.id); fs.appendFileSync(IDS, txid + "\n");
      bucket -= 1; min.submits++; tot.submits++; c.pending = { txid, sm: b.sm, rate: RATE, inflight: 1 }; jobs.push({ i, c, b, txid, signed });
    }
    // submit this tick's transactions together (one answer each), then read the answers in slot order
    const res = await Promise.allSettled(jobs.map((j) => to(rpc.submitTransaction({ transaction: j.signed, allowOrphan: false }), 15000, "submit")));
    for (let q = 0; q < jobs.length; q++) {
      const { i, c, b, txid } = jobs[q]; const r = res[q];
      if (r.status === "fulfilled") {
        min.ok++; tot.ok++; tot.fees += Number(b.fee); tot.parked += Number(SINK_SOMPI); c.orphanSince = 0;
        c.pending = { txid, sm: b.sm, rate: RATE, child: { ...c.coin, outpoint: { transactionId: txid, index: 1 }, amount: b.change, blockDaaScore: 0n } }; c.pendingAt = Date.now();
        fs.appendFileSync(SUB, JSON.stringify({ ts: isoZ(), slot: i, txid, rate: RATE, fee: String(b.fee), sm: b.sm, cm: b.cm, result: "ok" }) + "\n");
      } else {
        c.pending = null; const e = r.reason; const why = reason(e); fs.appendFileSync(SUB, JSON.stringify({ ts: isoZ(), slot: i, txid, rate: RATE, fee: String(b.fee), sm: b.sm, cm: b.cm, result: "rej", reason: why }) + "\n");
        if (why === "orphan") { min.orphan++; tot.orphan_retry++; if (!c.orphanSince) c.orphanSince = Date.now(); else if (Date.now() - c.orphanSince > 30000) { min.lost++; tot.lost++; phase(`LANE_CHAIN_LOST slot=${i}`); const coin = takeCoin(); if (coin) { tot.coins_taken++; c.coin = entryOf(coin); } c.orphanSince = 0; } }
        else if (why === "already_spent") { tot.already++; phase(`LANE_CHAIN_RESET slot=${i} reason=already_spent`); const coin = takeCoin(); if (coin) { tot.coins_taken++; c.coin = entryOf(coin); } }
        else if (why === "rpc") { min.rej++; tot.rej++; }
        else if (!stopped) { min.rej++; tot.rej++; stopped = "reject:" + why; phase(`LANE_STOP reason=reject:${why} msg=${String(e?.message || e).replace(/[0-9a-f]{64}/gi, "<h>").replace(/kaspatest:[a-z0-9]+/g, "<addr>").slice(0, 120)}`); }
        else { min.rej++; tot.rej++; }
      }
    }
  }
  fs.writeFileSync(P("private", "heavy-total.json"), JSON.stringify({ ...tot, fees_tkas: tot.fees / 1e8, parked_tkas: tot.parked / 1e8, pile_start_tkas: pileStart / 1e8, chains: chains.filter(Boolean).length, pending: chains.filter((c) => c && c.pending).length, stopped, ts: isoZ() }));
  const left = 1000 - (Date.now() - t0); if (left > 0) await sleep(left);
}
phase(`LANE_END submits=${tot.submits} ok=${tot.ok} rej=${tot.rej} lost=${tot.lost} fees_tkas=${(tot.fees / 1e8).toFixed(2)} parked_tkas=${(tot.parked / 1e8).toFixed(2)} coins_taken=${tot.coins_taken} pending=${chains.filter((c) => c && c.pending).length}`);
try { await rpc.disconnect(); } catch {}
process.exit(0);
