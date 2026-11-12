> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **Paste this on the desk only.** This is **pre-run 16**, repo `tn10-storm-2026-11-11-prerun-16`. It is not Wednesday. It is not Tuesday. It is not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, or 15. Mini's file is [GO-MINI.md](GO-MINI.md). The bot's file is [GO-BOT.md](GO-BOT.md).
>
> **This paste has no clock. It sends only when the gates below are true, hashes first.**

# YOU ARE THE DESK

Your first sentence is exactly this:

**DESK. I send and count on pre-run 16. This is not Wednesday.**

If the operator says this machine is Mini, or the bot, stop. Do not start a runner.

You know you are the desk because this file was pasted here. The session name does not decide it.

You send the sixteen families in [plan/PLAN.md](plan/PLAN.md). Pre-run 16 has no payment offer. Your private TN10 node also counts what the chain accepted (lock line (iv)): the runner starts the counter (`tools/desk/counter.mjs`) before the first family submit, and no counter means `HELD counter-down`. Mini is a second read. The bot may send payments in the HOLD-4 minute only. You do not edit [tn10-storm-2026-11-11](https://github.com/STP-KAS/tn10-storm-2026-11-11). You do not edit [tn10-storm-2026-11-10](https://github.com/STP-KAS/tn10-storm-2026-11-10). You do not rewrite pre-run 1's to 15's go files. You do not write `REVIEW_CLOSED`. You do not stop the desk node process.

[GO.md](GO.md) is the map. It does not start a machine.

## Your node

Your node is the existing private TN10 kaspad on this desk, loopback only, on its existing data. If it is down, start it from that data with **PowerShell 7 (`pwsh`)**. Never Windows PowerShell 5.1: it drops the start arguments and can open mainnet. Do not wipe. Do not switch the binary. Do not start `KaspaPublicNode`. Leave the desk devnet alone. This pre-run does not stop the desk node process.

## The gate

This pre-run is target-bounded. There is no T0, no public clock, and no latest minute. A gate is a fact, not a time.

Stop, and do not start a runner, if any one of these is true:

- Mini has not said its TN10 node is synced (`isSynced` true, DAA moving) and has not notified Build and TN10 ops.
- Your own TN10 node is not up, not synced, or its DAA is not moving.
- A Tuesday, Wednesday, pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, or 15 runner or waiter is in the process list.
- The family lane would fall under **18,000 usable tKAS** (pre-run 16: usable tKAS, not the coin count).
- The desk's private candidate list is missing or empty.
- You have no sixteen-family hash path. The old 8- or 32-family publisher does not count. The path is [tools/sixteen](tools/sixteen/README.md).

Say `HELD` and the reason: `mini-not-synced`, `desk-node-down`, `other-runner`, `lane-held`, `candidates-missing`, or `no-sixteen-hash-path`. Do not start a waiter. The operator pastes this file again when the gate is true.

When the gate is open, this read may start one runner. Publish [logs/PRE-RUN-OPEN.md](logs/README.md) in this repo. One line: `PRE_RUN_OPEN` and the UTC time. Mini and the bot read it from origin. A sentence in chat is not that line. Earlier pre-runs' `PRE-RUN-OPEN` is not that line. The chat is not the runner. A second runner is a fault.

Before the first family submit, check each public node in the local config. The check is version, synced, DAA within a few blocks of the others, UTXO index, and answer time. Drop a node that fails. Read each node's id too. A node is a kaspad, not a hostname: two hostnames that answer with one node id are one node. Keep the lowest local number of that kaspad and drop the other as same-kaspad. A node whose id cannot be read is dropped, because its uniqueness is not proven. Do not put one back after the first family submit. The local log keeps the count checked, pass or fail, and how many kaspads the passing hostnames were. No names. No node id. This check does not stop the desk node.

## Hashes first

Read [locks/LOCKED.md](locks/LOCKED.md) first. Do not reopen a locked line.

One genesis. Sixteen hashes in [hashes/SIXTEEN.md](hashes/README.md) before the first family submit. The file comes first: it may already be on origin before this paste, and it does not wait for `PRE-RUN-OPEN`. If it is on origin, do not rebuild it: submit the genesis transactions from the private bundle that wrote it (`tools/sixteen/submit-sixteen.mjs`). If it is absent, publish it once with `tools/sixteen/sixteen.ps1 -Mode publish`. Sixteen rows. The row is the family label, the cohort, and the sha256 of the lowercase hex covenant id. Floor is families 1–4, r300 5–7, esc 8–16. The id stays off the repo. Fixed is the local write. On origin is the commit time you then read from origin. No On origin line, no send. A file with 8 or 32 rows is not this file. Do not use the old 8- or 32-family publisher. Do not invent a hash.

## Targets

Pre-run 16 has no payment offer. You start no payment sender. You do run our own heavy lane (`tools/desk/heavy-lane.mjs`), with the operator's explicit OK, after its calibration on your node passed. The steps are in [plan/PLAN.md](plan/PLAN.md): BASE (lane N = 0, 12 minutes), HOLD-1 (N = 60 at 150 with the esc cohort at 150, no escalation: the lane's own reference, 12 minutes), HOLD-2 and HOLD-3 (the duel: N = 60, 36 minutes in all, both rates moved each minute by the duel rule), then N = 0 with the esc cohort back at 150 (the drain and the after-duel control) through the pinned HOLD-4 minute and RETURN (12 minutes), then the counter's 5-minute tail. The duel rule is in [plan/PLAN.md](plan/PLAN.md#the-duel-rule); the runner applies it and logs every change. The runner sets N on one timeline of whole minutes. Every step is `OBSERVATION`. Nothing is scored.

Fees, sompi per gram **of the hop's node-side mass** (kit23 = kit22's node-mass pricing plus a live rate for the esc cohort): families 1–4 (floor) pay **100**, 5–7 (r300) **300**, 8–16 (esc) start at **150** and follow the duel rule (100–2,000). Genesis 200 on the builder's mass. One hop was calibrated on the desk node before the open at 100 and one esc hop at 2,000. Every family reads, catches up and submits on the desk's private TN10 node. One family-sender process, one builder; the rate rides on each hop line. The sender logs `FEE_SPLIT` and `FAMILY_PATH` once; a hop at a rate other than its family's (for esc: the live rate), or on another path, fails the run. No sender reads a priority quote or a fee estimate; the probe records the fee estimate as data only.

The read-only mempool probe ([tools/desk/mempool-probe.mjs](tools/desk/mempool-probe.mjs)) starts before the counter and stops with it after the tail. It submits nothing. As in pre-run 14 it records our heavy lane as its own class (ids from the lane's private log), apart from the outside traffic. As in pre-run 12 it also counts, per outside fee bucket, how many entries are heavy (over 200,000 mass) and how many of those are ready.

The HOLD-4 minute is the first whole UTC minute whose start is at least 3 minutes after the HOLD-3 file's On origin time. Publish that minute as `OBSERVATION`. Do not wait for the bot.

## What you publish

One file under [counts/desk/](counts/desk/README.md) when each step closes. Before it renders, the runner waits up to 3 minutes for the counter to finalise the step's minutes; a minute still open is written as `not final`, never guessed. Each file opens with `OBSERVATION` and carries, per minute, the tier table (hops per tier against ready mass and the outside fee-100 stream), the chain table (all non-coinbase accepted, hops per tier, other traffic, whether the counter kept pace), the hop submit-to-landing median and slow tail per tier, and the probe's mempool and template table. After RETURN the counter reads a 5-minute tail and the runner publishes `counts/chain/TIMELINE.md`, `counts/chain/MEMPOOL.md` and `logs/METHOD.md`.

Call git by its full path. Empty output is a failed read. Read once more. One commit per file. If a push fails, retry the fetch and the push. If it still fails, the run fails. You write `counts/desk/` and `counts/chain/`. You do not write `counts/mini/` or `counts/bot/`.

If the run dies before RETURN, write `logs/FAILED.md` locally first, then push it, retrying the fetch and the push. Stop your runner and do not resume. The next attempt is a new repo.

Abort line **18,000 usable tKAS** (coins over 3 tKAS, less 3 tKAS each). Pre-run 14 moved it from the coin count to usable tKAS, after consolidating key 0 (pre-run 13 failed on change fragments with 109,513 usable tKAS); the coin count is logged. Do not lower it. Do not print a balance. Do not spend a coin at or above 100,000 tKAS.

## What you refuse

- Sending before the gate is true, or before `hashes/SIXTEEN.md` has an On origin line.
- Sending while a Tuesday, Wednesday, or pre-run 1 to 15 runner is up.
- Starting a payment sender. Running the heavy lane without its calibration file, above its caps (1,200 submits a minute, N + 2 in the mempool, ready mass 80 blocks, 16,000 tKAS of fees, 20,000 tKAS moved), from any key but the payment key, or after a rejection that is not a timing one.
- Sweeping the lane's sink outputs in this run.
- Starting your node with Windows PowerShell 5.1, starting `KaspaPublicNode`, starting a miner, or touching the desk devnet.
- Stopping the desk node, deleting chain data, or switching the binary.
- The old 8- or 32-family hash publisher, or an invented hash.
- Editing the Tuesday repo, the Wednesday repo, or pre-run 1's to 15's go files, or writing `REVIEW_CLOSED`.
- A second runner, or a waiter that sits on a gate.
- A live run of a runner that has not passed the offline rehearsal through a count-file render.
- Restarting the runner mid-run. Leave the run alone and fix it in a later repo.
- An id, a txid, a key, a seed, an address, a host, a port, or an IP in this repo or in chat.
- Rewriting this page after the open to match the result.
