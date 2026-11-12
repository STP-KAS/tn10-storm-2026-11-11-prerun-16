> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · This page does not start a machine. Pre-run 16. Not Wednesday. Not Tuesday. Not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, or 15.

# Targets

There is no T0. There is no public clock. There is no latest minute. Nothing in pre-run 16 is scored: every step is an observation of whole minutes.

The hash file comes first and does not wait for the open. Nothing else in this page starts until the gates are true: Mini's TN10 node is synced with DAA moving; the desk's private TN10 node is up from its own data (PowerShell 7, no wipe) and synced; no Tuesday, Wednesday, or pre-run 1 to 15 runner is up; the operator has armed (no paste; see the README); our heavy lane's calibration on the node passed; and this repo's `logs/PRE-RUN-OPEN.md` is on origin.

## Order

1. **Nodes live.** Both TN10 nodes synced, DAA moving. No wipe.
2. **Calibration.** One lane transaction, read back from the desk mempool: node storage mass within 1 percent of our SDK's, fee rate 99–101. Otherwise the lane does not run and that is recorded.
3. **Hashes first.** [hashes/SIXTEEN.md](../hashes/README.md): sixteen rows, family label, tier, sha256 of the lowercase hex covenant id, and an On origin line.
4. **Families.** The sixteen covenant families start on the desk's private node, 1.2 hop/s offered. No payment sender of ours is started.
5. **Our heavy lane** starts at N = 0 and follows one timeline of whole minutes set by the runner:

| Order | File | Lane N | Lane rate | esc cohort (families 8–16) | Length |
|---:|---|---|---:|---|---|
| 1 | BASE | 0 (control) | — | 150 | 12 whole minutes |
| 2 | HOLD-1 (the lane's reference) | 60 | 150 | 150 | 12 whole minutes |
| 3 | HOLD-2 (duel, part 1) | 60 | duel rule | duel rule | 12 whole minutes |
| 4 | HOLD-3 (duel, parts 2 and 3) | 60 | duel rule | duel rule | 2 × 12 whole minutes |
| 5 | drain, HOLD-4 | 0 | — | 150 | the pinned minute; the bot sends only on a free third public kaspad, or files `NO SEND` |
| 6 | RETURN (after-duel control) | 0 (drain) | — | 150 | 12 whole minutes |
| 7 | tail | families and lane stopped, the counter reads on | — | — | 5 minutes |

The lane's N changes on the minute boundary, on a timeline fixed when the lane starts, so a step file's render never stretches a lane step. The minutes between HOLD-3's end and the pinned minute are the start of the drain; they are in `counts/chain/TIMELINE.md`. **Push-back on the first sketch:** the middle N = 0 control is dropped so the duel can run 36 minutes in one piece; BASE before and RETURN after are the N = 0 controls. HOLD-1 is added so the lane has a reference of its own (it does not run in BASE).

## Cohorts (families, node rates)

| Cohort | Families | Rate, sompi/gram of node mass | Role |
|---|---|---:|---|
| floor | 1–4 | 100, fixed | control: level with the outside stream |
| r300 | 5–7 | 300, fixed | control: twice the duel's starting rate |
| esc | 8–16 | starts 150; the duel rule moves it between 100 and 2,000 | side A of the duel |

A hop is about 41,800 node mass (storage mass; compute 9,123), our lane's transaction about 266,700. The rate is fee ÷ the node's mass (kit21's pricing, kept in kit23). kit23 differs from kit22 in one place: the esc families read their live rate from a control file the runner writes (clamped 100–2,000), so a rate change reaches the next hop within a second.

## The duel rule

Once a minute, at 22 seconds past the minute or later (the counter's line for the minute just closed is final about 20 seconds after it ends), the desk runner reads that minute and moves both rates:

| Side | What it is | Metric | Reference |
|---|---|---|---|
| A | esc cohort, families 8–16 | esc hops landed per family in the minute | median of BASE (12 minutes, lane at 0, esc at 150) |
| B | our heavy lane, N = 60 | our heavy transactions landed in the minute | median of HOLD-1 minutes 2–12 (N = 60 at 150, esc at 150) |

- metric under 90 percent of the reference: rate × 1.25, rounded, at most 2,000;
- at or over 90 percent for 2 minutes in a row: rate × 0.8, rounded, at least 100;
- otherwise unchanged. An unread, partial or lagging minute holds both rates.

Both sides start the duel at 150. The rule only sees its own side's landings, as a wallet would; it does not see the other side's rate. The new rates take effect about 22 seconds into the next minute, so each minute after the first is a mix of the old and the new rate; the per-minute snapshot of both rates and every decision are in `logs/duel.log`.

## What the selector theory predicts

In rusty-kaspa v2.1.0 (below) a block is filled by weighted random sampling, weight (fee/mass)^3 per transaction, once the ready set is over one block. Our expectations, written before the run:

- **Side B hardly feels side A.** Nine esc families at about 45 hops a minute are about 17 million mass a minute; our lane at about 420–470 heavies a minute is about 115–125 million. Only one heavy fits a 500,000 block, and up to five hops fit beside it. So raising A's rate should move A's own landing a lot and B's landing very little. B's rule should then only react to the outside stream, not to A.
- **Side A climbs to about 1.5–2 times B's rate and stops there.** Pre-runs 14–15: at the lane's rate a hop kept about 65–75 percent, at 1.33 times about 80–90, at 2 times about 95–98. With steps of 1.25 from 150: 188, 234, 293. We expect A to reach about 234–293 within 2–4 minutes and then cycle in a band (the down step after 2 good minutes pulls it back), not to spiral.
- **A spiral needs B to lose landings to A.** If B's landings drop when A rises, B climbs too, and the pair can ratchet to the cap. The theory says A is too light to cause that; that is the thing this run checks.
- **Other users** at up to about the lane's rate lose more the higher B goes; if B stays near 150, about what pre-run 15 saw at N = 60 at 150 (about 10–13 percent less of their traffic landed on our node).

## Our heavy lane

- **Shape.** One input (the chain's own coin, from the payment key), two plain pay-to-key outputs: 0.0375 tKAS to a dedicated sink key of ours, and the change back into the chain. Storage mass about 266,670 (KIP-9: 10^12 / 3,750,000 sompi for the small output, the change and input terms nearly cancel). Compute mass about 2,000. Fee rate × mass: about 0.40 tKAS at 150, 2.67 at 1,000 and 5.34 at the 2,000 cap.
- **Why this shape.** Our SDK counts every output at UTXO plurality 1 (pre-run 12's source check); plain outputs have plurality 1 on the node too, so the two agree. A covenant output (plurality 2) would be under-read by the SDK by a factor of four.
- **Ready count.** A chain's next transaction goes out only after the previous one has left the desk mempool. So the lane has at most N entries in the mempool and all are ready. About one 267,000-mass transaction fits a 500,000 block, so at about 10 blocks a second the chain takes at most about 600 heavy transactions a minute, shared with any outside heavy. At N = 60 the lane alone holds about 32 blocks of ready mass.
- **Money.** Only from the payment key (key 16, 7,458 coins over 10 tKAS, about 160,000 tKAS, before this run). Each chain takes one pile coin and runs it down to under 2 tKAS, then takes the next. The family lane (key 0) is not touched by the heavy lane. The operator said tKAS is not a limit; the caps stay as guards, and the spend is logged.
- **Caps.** 1,200 lane submits a minute; pause above N + 2 lane entries for three probe samples; hold at mempool 90,000 or ready mass over 80 blocks; rate at most **2,000**; stop at **40,000** tKAS of fees or **45,000** tKAS moved (pre-run 15: 16,000 / 20,000), or the pile estimate under 100,000 tKAS (unchanged); stop on any rejection that is not a timing one, or if the node's rate or mass on our own entries drifts from the calibration.
- **Not swept in this run.** The 0.0375 tKAS sink outputs (pre-runs 13 to 15's, about 69,800, and this run's) stay where they are, on the same sink key. A sweep is a separate, later, logged step.

## Why this shape

- Pre-runs 14–15 read a fixed ladder. A duel needs both sides free to move, with one rule, so the answer is about the rule and the shapes, not about a ladder we chose.
- HOLD-1 gives the lane a reference at the duel's starting point (N = 60 at 150, esc at 150), so B's rule has something to compare with; BASE gives A's.
- The fixed floor (100) and r300 (300) cohorts show what the duel does to bystanders at a low and a high fixed rate.
- 36 minutes in one piece so a slow ratchet has time to show. The 2,000 cap and the 40,000 tKAS fee cap keep a runaway bounded; if the lane meets the fee cap, it stops and that is recorded as "gave up (budget)".
- No payments: the only load is the families, our lane and whatever other TN10 traffic is there.

## What we read

For each minute: the lane's N and rate, the esc rate and every duel decision (`logs/duel.log`); hops per tier and each tier's node rate (as built and as the probe read it in the mempool) (desk counter, accepted on chain); our heavy in the mempool and ready (probe), our heavy landed (counter), lane submits (the lane's log); outside heavy at 100 (probe, entries not in our logs); the ready mass in blocks of 500,000; the mempool size and the fee estimate. Mini is a second read of the hops.

## Selection rule

The desk node and the public kaspads answered serverVersion 2.1.0. In rusty-kaspa tag v2.1.0 (commit 01b532e8b553523216471682649693af92f0fd16), `mining/src/mempool/model/frontier.rs` takes every ready transaction best-first while the ready set's mass fits one block, and otherwise samples at random with weight (fee/mass)^3 (`ALPHA = 3`). Only a transaction with no parent in the mempool is ready, so a chained hop is not a candidate until its parent is out of the mempool. A higher fee raises the odds of being drawn; it does not buy a place in a queue. This is the source's rule, read from the code; the run reads the desk node's own template, not a miner's.

Abort line **18,000 usable tKAS** (key 0 coins over 3 tKAS, less 3 tKAS each). The coin count is logged, not a gate (pre-run 13 tripped on change fragments). Key 0 was consolidated before the open. Do not lower it.
