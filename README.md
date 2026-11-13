> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is a pre-run. Pre-run 16.** It is not the Wednesday run. It is not the Tuesday run. It is not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, or 15. A read does not start a runner.

# tn10-storm-2026-11-11-prerun-16

**Pre-run 16 of the Wednesday neuron.** The neuron stays [tn10-storm-2026-11-11](https://github.com/STP-KAS/tn10-storm-2026-11-11). This repo does not edit that repo, does not write `REVIEW_CLOSED`, and does not set or move a clock for it. [tn10-storm-2026-11-10](https://github.com/STP-KAS/tn10-storm-2026-11-10) (Tuesday) is not edited from here either.

> **Our own testing.** This is our own Kaspa Testnet-10 testing, run on our own machines and nodes. What these pages report is what we observed in this run; it is not a claim of how TN10 or Kaspa behave in general.

**Where this starts.** Pre-runs 1 to 4 failed and are closed. Pre-runs 5 to 12 finished through RETURN and are closed. Pre-run 13 ran through the pinned HOLD-4 minute and failed in RETURN on its coin-count abort line; it is closed. Pre-runs 14 and 15 finished through RETURN and are closed. The index of all of them is the [pre-run 2 README](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-2#pre-runs-in-this-rehearsal); the cumulative findings are in [tn-master](https://github.com/STP-KAS/tn-master). This repo starts from [pre-run 15's locks/LOCKED.md](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-15/blob/cfeb80e/locks/LOCKED.md) at commit cfeb80e, copied here as [locks/LOCKED.md](locks/LOCKED.md), with a pre-run 16 section added at the end.

## What pre-runs 14 and 15 left open

[Pre-run 14](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-14) and [pre-run 15](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-15) priced every covenant hop on the node's own mass against our own heavy lane at fixed rates. As we observed it: a hop at about twice the lane's rate kept about 95–104 percent of its BASE pace, and at about 60 blocks of ready mass about three times was needed. Both runs held every rate fixed. Real users do not: when they fall behind, they pay more. The open question was what happens when **both** sides do that.

## What pre-run 16 tries: a fee-escalation duel

The question: **when a covenant chain and a competing heavy lane both raise their fee rate whenever they fall behind, does the rate settle, keep spiralling to a cap, or does one side give up? What do the rate path, the landing share and the cost per landed transaction look like for each side, and for other TN10 users?**

> **Result (after the run).** Pre-run 16 ran through RETURN, every minute clean, no repair. With both sides on the same rule, the covenant side climbed from 150 to 294 in three minutes and then cycled between 188 and 294, while our heavy lane moved between 120 and 188, mostly down: the rates settled near twice the lane's rate (median 1.96). No spiral, and neither side gave up. Raising the covenant side's rate moved its own landing (back to 93–97 percent of BASE, from 69 at the lane's rate) and not the lane's; it cost about 69 percent more per hop. Both sides were ours, on one node, with one rule, so this cannot say how real players would duel. Mini matched 219 of 219; the bot filed `NO SEND no-free-node` on time. What we observed: [logs/LESSONS.md](logs/LESSONS.md). Our heavy lane slowed other TN10 users' transactions while it ran; see the [public statement](PLAYBOOK.md#public-statement).
>
> **We run our own heavy lane on TN10 again, and it slows other TN10 users' transactions.** In this pre-run we submit our own bounded stream of heavy transactions (about 266,700 storage mass each, up to 60 at a time, at rates our duel rule sets between 100 and 2,000 sompi/gram) from our own test coins. While it runs, other TN10 users' transactions paying up to about the lane's rate wait longer. The operator gave the explicit OK for the lane (2026-11-12) and said tKAS is not a limit. It is calibrated on the node first (at 100 and at 2,000), capped by ready count, by a per-minute submit cap and by a spend cap, stepped down to zero at the end, and every step is in this repo. This is our own testing; tKAS has no value.

- **Both sides are ours.** Side A is nine covenant families (8–16, the `esc` cohort). Side B is our heavy lane (N = 60 chains). Control cohorts stay at fixed rates: floor (1–4) **100** and r300 (5–7) **300**, node rates.
- **One rule for both sides, once a minute** (desk runner, from the counter's final line for the minute just closed): if the side's metric is under **90 percent** of its own reference, its rate goes up × 1.25 (cap **2,000**); if it is at or over 90 percent for **2 minutes in a row**, it goes down × 0.8 (floor **100**). A minute that is unread, partial or lagging holds both rates. Side A's metric is esc hops per family in the minute ÷ the BASE median; side B's is our heavy landed in the minute ÷ the median of HOLD-1 (minutes 2–12, N = 60 at 150). Both start at 150. Every rate change is logged (`logs/duel.log`, published after the run).
- **Calibrated on the node before the open.** One hop at 100 and one esc hop at the 2,000 cap, and one lane transaction at 2,000 and one at 100, read back from the desk mempool: see [PLAYBOOK.md](PLAYBOOK.md#status-when-this-repo-was-opened).
- **Steps on one timeline, 12 whole minutes each:** BASE (lane N = 0, 12 minutes), HOLD-1 (N = 60 at 150 with the esc cohort at 150, no escalation: the lane's own reference, 12 minutes), HOLD-2 and HOLD-3 (the duel: N = 60, 36 minutes in all, both rates moved each minute by the duel rule), then N = 0 with the esc cohort back at 150 (the drain and the after-duel control) through the pinned HOLD-4 minute and RETURN (12 minutes), then the counter's 5-minute tail. All are `OBSERVATION`. The HOLD file names are kept so the bot's and Mini's gates read as before.
- **Guards.** The lane's guards are pre-run 15's (N + 2 pause, hold at mempool 90,000 or ready mass over 80 blocks, stop on a non-timing rejection or a drift from the calibration, pile floor 100,000 tKAS) with the fee cap raised to **40,000 tKAS** and the moved cap to 45,000 so the duel can run to the rate cap but cannot drain the pile. The family lane's abort line stays **18,000 usable tKAS**.
- **What this can and cannot say.** Both sides are ours and run on one node with one rule; the outside heavy fee-100 stream may be there too. It can show how this rule behaves for these two shapes on this node in these minutes. It cannot say how other people's wallets or other nodes would behave.

All locked lines from earlier pre-runs stay, except where the pre-run 16 block in [locks/LOCKED.md](locks/LOCKED.md) says what changes and why.

## Machines

| Machine | Go file | First sentence |
|---|---|---|
| Desk | [GO-DESK.md](GO-DESK.md) | DESK. I send and count on pre-run 16. This is not Wednesday. |
| Mini | [GO-MINI.md](GO-MINI.md) | MINI. I count pre-run 16 as the second read. I do not send. This is not Wednesday. |
| Bot | [GO-BOT.md](GO-BOT.md) | GROKBOT. I send payments on the pre-run 16 HOLD-4 only. I do not count. This is not Wednesday. |

The operator does not paste. On 2026-11-12 he asked TN10 ops for covenant pre-runs under congestion and competition, pre-run 11 and then 12, 13 or more as needed (voice, 09:06 and 09:09 Brussels time), and at 10:04 in chat said "Keep exploring". For our own heavy lane he gave the explicit OK in chat at about 11:08 and 11:10 Brussels time ("Do whatever you think is needed", then "No need to keep it short. Tn is for testing. Test at will"), and at 15:19 he said tKAS is not a limit ("Use all the tkas you want"). At 23:26 Brussels time he asked "Can we solve the fee escalation open question?" That is the arm for pre-run 16, its heavy lane and the duel. The agents start the runners once the gates are facts. [GO.md](GO.md) is the map, [PLAYBOOK.md](PLAYBOOK.md) has the roles and gates, and [plan/PLAN.md](plan/PLAN.md) has the targets and the reasons.

## Gates, in order

No clock. Each gate is a fact read from a node or from origin.

1. Mini's TN10 node is up from its own data, synced, DAA moving.
2. The desk's private TN10 node is up from its own data (PowerShell 7), synced, DAA moving.
3. No other runner or waiter is up. The family lane is above its abort line (18,000 usable tKAS). The desk's private candidate list is present.
4. `hashes/SIXTEEN.md` is on origin: sixteen rows and an On origin line, from the sixteen-family path.
5. The desk pushes `logs/PRE-RUN-OPEN.md`; Mini pushes `logs/MINI-ARMED.md`.
6. The probe and the desk counter are up. Then the families, our heavy lane at N = 0, and the observation steps on the lane's timeline.

Before the open: the hop calibration (node rate within 1 percent of 100 and of 2,000) and the lane's calibration (at 2,000 and at 100) passed.

## What a decent result is

- `hashes/SIXTEEN.md` on origin before the first family submit.
- Every step file on origin, each with hops per minute for the three cohorts (floor, r300, esc), each cohort's node rate, the lane's N and rate, our heavy and the outside heavy apart, and the probe's table for the same minutes.
- `counts/chain/TIMELINE.md` and `counts/chain/MEMPOOL.md` after the tail, and RETURN on origin.
- The duel's rate path for both sides, minute by minute, and an answer to the question (settled, spiralled, or one side gave up), or an honest "not answered" with the reason.
- A HOLD-4 desk file, a bot file or a legal `NO SEND`, and a Mini file.
- The spend and the leftovers (the parked sink outputs, not swept) stated in the write-up.
- No id, txid, key, address, host, or port in this repo.

A miss stays in this repo. A next attempt is a new repo and starts from this repo's lock file.

**Part of [tn-master](https://github.com/STP-KAS/tn-master).** The rule is [docs/NEURON.md](https://github.com/STP-KAS/tn-master/blob/main/docs/NEURON.md). This pre-run is its own row. It is not row 47.
