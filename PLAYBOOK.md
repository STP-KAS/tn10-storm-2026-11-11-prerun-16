> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is the playbook for pre-run 16.** It is not Wednesday. It is not Tuesday. It is not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, or 15. It does not start a machine and it does not arm one.

# Playbook

Who does what, and the gates before each machine may start. The plan is [plan/PLAN.md](plan/PLAN.md), the locks are [locks/LOCKED.md](locks/LOCKED.md), and the go files are the three GO pages. This page does not override them.

## Oversight

TN10 ops oversees this rehearsal end to end: Mini, the desk (Build), and the bot. TN10 only. Never mainnet. Do not edit the Tuesday repo, the Wednesday repo, or pre-run 1's to 15's go files. Do not write `REVIEW_CLOSED`.

For pre-run 16 the operator does not paste. On 2026-11-12 he asked TN10 ops for covenant pre-runs under congestion and competition, pre-run 11 and then 12, 13 or more as needed (voice, 09:06 and 09:09 Brussels time), and at 10:04 in chat said "Keep exploring". That is the arm. The agents start their runners once the gates are facts.

## Start gates

1. **Mini node synced.** Existing TN10 kaspad, existing data, no wipe. `isSynced` true, DAA moving.
2. **Desk node synced.** Existing private TN10 kaspad, existing data, loopback only, started with `pwsh`. No wipe. Synced, DAA moving.
3. **No other runner.** No earlier runner, waiter, or counter on any machine. Lane above the abort line. The desk's private candidate list is present and not empty (`HELD candidates-missing` otherwise).
4. **Hashes.** `hashes/SIXTEEN.md` with sixteen rows and an On origin line, from [tools/sixteen](tools/sixteen/README.md).
5. **Open.** The desk pushes `logs/PRE-RUN-OPEN.md`. Mini then pushes `logs/MINI-ARMED.md`.
6. **Counter, families, senders.** The desk runner starts the counter on its private node and waits for its start line (`HELD counter-down` otherwise). Then the genesis from the bundle that wrote `hashes/SIXTEEN.md`, the families, and the payment steps.

## Who does what

| Who | Role | What not to do |
|---|---|---|
| **Desk (Build)** | Sends the sixteen families (two fixed cohorts and the esc cohort whose rate the duel moves, one path, one build, kit23) and runs our own heavy lane (the operator's OK, calibrated first). No payments. Its private TN10 node counts what the chain accepted (lock line (iv)) and its probe reads the mempool (xii). Publishes `hashes/SIXTEEN.md`, `logs/PRE-RUN-OPEN.md`, `counts/desk/` per step, `counts/chain/TIMELINE.md` and `MEMPOOL.md` after the tail, and `logs/METHOD.md`. | Do not stop or wipe the desk node. No Windows PowerShell 5.1, no `KaspaPublicNode`, no miner, no devnet. No 8- or 32-family publisher. No second runner. Never restart the runner mid-run. No payment sender. No heavy lane other than the runner's own lane process. |
| **Mini** | Second chain read on its own node. Does not send, mine, or hold a key. Publishes `logs/MINI-ARMED.md`, then `counts/mini/` when the matching desk file is on origin. | Do not wipe. Do not repeat the desk's head as Mini's. |
| **Bot (TN10 ops)** | Sends payments in the HOLD-4 minute only, on a synced public kaspad that is not one the desk kept, or publishes a legal `NO SEND`. | Do not send in any other step. One waiter. No local node. |

## Status when this repo was opened

Not a gate. Read on 2026-11-12 between 22:34Z and 22:45Z. This is our own TN10 testing; status lines are what we read on our own machines.

- Mini: existing TN10 kaspad 2.1.0 up, no wipe. Pre-run 15's Mini runner ended on its own at 2026-11-12T22:20:38Z.
- Desk: existing private TN10 kaspad 2.1.0 up with `pwsh`, no wipe. It is not stopped for this pre-run. No pre-run 15 runner or child is running. `serve.mjs` and its keeper are not touched.
- Box: no local TN10 node. No bot waiter running.
- **Family lane** (key 0), 22:34:59Z: only 320 coins over 3 tKAS (75,018 usable tKAS, most of it in a few large coins) and 4,872 coins of 3 tKAS or less. **Consolidated** 22:36:50Z: 65 transactions, none rejected, those 4,872 coins (11,621 tKAS) into 430 coins of about 25 tKAS, 5.63 tKAS in fees. **Split** 22:36:52Z (new `split16.mjs`): the 320 large coins (75,978 tKAS) into 3,038 coins of 25 tKAS, 320 transactions, none rejected, 1.64 tKAS in fees. **Push-back on the plan:** we did not refill key 0 from the payment pile. The pile (about 160,000 tKAS) funds the heavy lane, whose floor is 100,000 tKAS; moving pile coins would have cut the duel's budget. Key 0's own large coins were enough once split.
- Keys 1–15 got a fresh genesis coin from the family lane (15 transactions at 22:37:29Z, none rejected). The funding script's lane-coin margin is now 2,500 coins over 3 tKAS (the runner's own low-coin line; it was 5,000). After: key 0 3,453 coins over 3 tKAS, 76,982 usable tKAS, no small coins. Amounts and ids are in private notes.
- **Hop calibration on the node** (kit23), 22:37:54Z: one calibration covenant on key 0 (launch path `…-p16-cal`, not one of the sixteen families and not in `SIXTEEN.md`), its genesis, then two hops built by the family path and submitted on the desk's private node, each read back from the desk mempool:

| Hop | Builder bill rate (on 13,046) | kit23 storage mass | Node storage mass | Node compute mass | Fee, sompi | Node rate (fee ÷ node mass) |
|---|---:|---:|---:|---:|---:|---:|
| family 1 at 100 | 321 | 41,846 | 41,846 | 9,123 | 4,187,766 | 100.08 |
| family 8 (esc) at the 2,000 cap, through the live-rate file | 6,418 | 41,860 | 41,860 | 9,123 | 83,729,228 | 2,000.22 |

  Storage mass matched to the unit and both node rates were within 1 percent of the asked rate (and not under it), so the families may run on kit23, and an esc hop at the cap is priced right.
- **Our heavy lane's calibration**: at 2,000, 22:38:42Z: SDK storage mass 266,768, node storage mass 266,768 (0.00 percent off), compute 2,036, node rate 2,000.00 (fee 5.34 tKAS). At 100, 22:38:49Z: 266,671 on both sides, node rate 100.00. The sink key is pre-runs 13–15's (it holds their parked outputs, about 69,800, not swept).
- Re-read 2026-11-12T22:45Z: on the desk only the private kaspad, `serve.mjs`, its keeper and their shells run (untouched); on Mini only its TN10 kaspad. No runner, waiter or counter is up.
- Known risks, not fixed mid-run:
  - Our lane slows other TN10 users' transactions at fees up to about its own rate while it runs. If the duel drives the lane's rate up, more of them wait. The operator OK'd the lane; the rate is capped at 2,000, the fees at 40,000 tKAS, and the lane steps down to zero at the end.
  - The outside heavy fee-100 stream may also be there; the probe counts it apart from ours. It can move side B's metric, and so side B's rate, without side A doing anything; the duel log shows both sides' metrics every minute so this can be read.
  - The rule reacts to the minute just closed and takes effect about 22 seconds into the next one, so the rates lag the landings by about one minute.
  - About one heavy transaction fits a block, so heavies (ours and outside) together land at most near 600 a minute.
  - Each family is a chain of hops, so a hop waits for its parent whatever its fee.
  - The probe reads the desk node's mempool and template, not a miner's.
  - Only two unique public kaspads answered in every check so far, and the desk keeps both, so the bot is expected to file `NO SEND no-free-node`.

## Offline rehearsal, recorded before `PRE-RUN-OPEN`

Rehearsal `p16-a` ran on the desk against the fake node (no network), 2026-11-12 22:44:54Z to 23:05:59Z, with 2-minute lane steps (`STORM_LANE_MIN=2`, `STORM_RET_MIN=2`), using the exact runner, lane, kit23 and family-fee files of this pre-run.

- Genesis 16 of 16 from the published bundle; fee split verified on the submit rows: floor 100, r300 300, esc 150.
- Lane plan as built: N0 control, then N60 at 150 (side B's reference), then two duel segments, then the N0 drain with esc back at 150.
- Duel rule: reference A = 59.61 esc hops per family (BASE median), reference B = 1,199 lane landings (HOLD-1 median). Six `DUEL MIN` decisions; the fake node has no contention, so both sides were at or above target and both rates stepped down 150 -> 120 -> 100 and stayed at the floor. This shows the rule writes both rate files and both sides follow them (the esc hops were built at 120 and 100, the lane minutes show 120 and 100); it does not show the step-up path, which only real contention can trigger.
- One fix before the live run: the reference needed at least min(6, minutes) good minutes, too strict for a short step; it is now min(6, max(1, minutes - 1)). The rehearsal ran with the fixed runner.
- Every step file, TIMELINE, MEMPOOL and METHOD published to the rehearsal's local origin; `RUNNER_EXIT 0`.

## Status after the live run

AFTER_PLACEHOLDER

### Public statement

We run our own heavy lane on TN10 in this pre-run, with the operator's OK, at N = 60: 12 minutes at 150 and then 36 minutes at rates our duel rule sets between 100 and 2,000 sompi/gram. While it runs, other TN10 users' transactions paying up to about the lane's rate wait longer on the nodes that see it. The figures for this run are added here after it. This is our own testing; tKAS has no value.

## When something breaks

Append a worked fix to [locks/LOCKED.md](locks/LOCKED.md) in the form that page shows, and a repair line to `logs/FIXES.md`. If the run dies before RETURN, write `logs/FAILED.md`, stop every runner, waiter, and counter, and do not resume. The next attempt is a new repo that starts from this repo's lock file.
