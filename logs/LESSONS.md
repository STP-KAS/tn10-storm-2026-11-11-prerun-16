> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> Our own testing. What we observed in this run, on our own nodes. Not a claim about how TN10 or Kaspa behave in general. No key, seed, txid, covenant id, address, host or port.

# Lessons, pre-run 16

Written after the run, 2026-11-13, from the files on origin and the desk's own logs (read-only). Times are UTC unless marked Brussels.

## The question

Pre-runs 14 and 15 held every rate fixed and read that a covenant hop at about twice a heavy competitor's rate kept its BASE pace within about 5 percent. Pre-run 16 lets both sides move: when a covenant chain (side A, the `esc` cohort, families 8–16) and our own heavy lane (side B, N = 60) each raise their rate whenever they fall behind, **does the rate settle, spiral to a cap, or does one side give up?** What do the rate path, the landing share and the cost per landed transaction look like, and what does it do to other TN10 users?

The rule, the same for both sides, once a minute: under 90 percent of its own reference → rate × 1.25 (cap 2,000); at or over 90 percent two minutes in a row → × 0.8 (floor 100); otherwise unchanged. A's reference is the BASE median of esc hops per family (47.61); B's is the HOLD-1 median of our heavy landed (486, minutes 2–12 at N = 60, both sides at 150). Each side sees only its own landings, as a wallet would.

## What happened

- Before the open: key 0 consolidated (4,872 small coins into 430) and its big coins split into 25 tKAS coins, keys 1–15 funded, hop calibration at 100 and 2,000 (node rates 100.08 and 2,000.22, node storage mass equal to the builder's), lane calibration at 100 and 2,000 (266,671 / 266,768 storage mass, node rates 100.00 / 2,000.00). Offline rehearsal p16-a exited 0. The bot's free check ran once, read-only, before arming (the pre-run 15 fix).
- Live run: desk runner 23:11:56Z to `RUN end` 00:37:41Z. BASE 23:14–23:25 (N = 0, esc 150), HOLD-1 23:26–23:37 (N = 60 at 150, esc 150: the lane's reference), HOLD-2 = duel part 1 23:38–23:49, HOLD-3 = duel parts 2 and 3 23:50–00:13, then N = 0 and esc back at 150 (drain) through the pinned HOLD-4 minute 00:18 and RETURN 00:20–00:31, then a 5-minute counter tail. Every step file, RETURN, TIMELINE, MEMPOOL and METHOD is on origin; every whole minute kept pace; no repair, no restart, nothing killed. The duel log is [logs/duel.log](duel.log).
- Every OK hop and every lane transaction was included: the counter's totals equal the submit-OK counts exactly (floor 8,600, r300 11,897, esc 31,189; lane 22,258 of 22,258, 0 rejected, 0 lost).
- The outside heavy fee-100 stream came in at 23:24 (end of BASE) and was present for the rest of the run. We do not say who sends it.
- The desk probe's mempool read failed from 23:59Z on (`getMempoolEntries` answered "WebSocket disconnected" once the mempool passed about 13,000 entries; the size and fee estimate still read). So ready mass, the outside-stream counts and the template columns are blank for duel parts 2 (last minute) and 3, HOLD-4 and RETURN. The counter and the duel rule do not use the probe and were not affected. Cause not established; a message-size limit is our guess.

## The rate path

Rate in effect each minute of the duel (a decision lands about 22 s into the next minute, so each minute after a change is a mix):

| Part | Minutes | Esc (side A) | Lane (side B) |
|---|---|---|---|
| HOLD-1 reference | 23:26–23:37 | 150 | 150 |
| Duel 1 | 23:38–23:49 | 150 188 235 294 294 235 235 188 235 294 294 235 | 150 150 120 150 150 120 150 150 120 120 150 150 |
| Duel 2 | 23:50–00:01 | 294 294 235 235 294 294 235 235 294 294 235 235 | 120 120 150 150 120 120 150 150 120 150 188 188 |
| Duel 3 | 00:02–00:13 | 294 294 235 235 188 188 235 294 294 235 235 188 | 150 150 120 120 150 188 188 150 150 120 120 150 |

- **Side A** climbed 150 → 188 → 235 → 294 in the first three minutes (at the reference its hops ran at 64–75 percent of BASE) and then cycled between 188 and 294 for the rest of the duel: 235 in 16 minutes, 294 in 14, 188 in 5, and the first minute at 150. It never went above 294 and never back to 150. 11 steps up, 10 down.
- **Side B** mostly went *down*: its hops landed at or over 90 percent of its reference in most minutes, so the rule stepped it to 120, and the odd weak minute stepped it back to 150 or, three times, to 188. Rates in effect: 150 in 19 minutes, 120 in 13, 188 in 4. 11 steps up, 10 down. Its mean was 140–146, under its 150 start.
- **The ratio settled near two.** Esc ÷ lane rate, minute by minute: median **1.96**, range 1.0–2.45.

**It settled; it did not spiral, and neither side gave up.** The pair sat in a band (A 188–294, B 120–188) for 36 minutes, far from the 2,000 cap and never at the 100 floor for side A.

## Landing and cost

| Part | Esc hops / family, % of BASE (median, range) | Our heavy landed, % of the 486 ref (median) | Mean esc rate | Mean lane rate | Floor % BASE | R300 % BASE |
|---|---|---|---:|---:|---:|---:|
| BASE (N = 0) | 100 | — | 150 | — | 100 | 100 |
| HOLD-1 ref (N = 60 @ 150) | 69 (64–75) | 99 | 150 | 150 | 38 | 101 |
| Duel 1 | 94 (74–112) | 94 | 240 | 140 | 42 | 96 |
| Duel 2 | 93 (79–108) | 93 | 265 | 144 | 40 | 96 |
| Duel 3 | 97 (77–125) | 99 | 243 | 146 | 40 | 102 |
| HOLD-4 (1 min, N = 0) | 101 | — | 150 | — | 85 | 111 |
| RETURN (N = 0) | 95 (91–101) | — | 150 | — | 81 | 101 |

Share of all included non-coinbase transactions on our node, per minute: our lane about 11 percent, esc about 9–10 (7 at the reference), floor about 2 (4–5 with the lane at 0), other traffic about 74–75 (81–83 with the lane at 0).

Cost per landed transaction (every OK transaction landed, so per OK = per landed):

| What | Landed | Fees, tKAS | Per landed, tKAS |
|---|---:|---:|---:|
| Esc hop at 150 (BASE, reference, drain, RETURN) | 16,809 | 1,042.77 | 0.062 |
| Esc hop in the duel (188 / 235 / 294) | 14,380 (1,717 / 6,699 / 5,964) | 1,506.96 (133.18 / 649.66 / 724.12) | 0.105 (0.078 / 0.097 / 0.121) |
| Floor hop at 100 | 8,600 | 355.71 | 0.041 |
| R300 hop at 300 | 11,897 | 1,474.70 | 0.124 |
| Our heavy at the reference (150) | 5,793 | 2,317.81 | 0.400 |
| Our heavy in the duel | 16,465 | 6,393.76 | 0.388 |

So side A paid about 69 percent more per hop than at 150 and got back from about 69 to about 93–97 percent of its BASE pace. Side B ended up paying slightly *less* per transaction than at its reference and kept 93–99 percent of it. A r300 hop (a fixed twice-150) held 96–102 percent at 0.124 a hop, about what the duel's mean esc rate bought for 0.105.

## Theory against what we observed

Written before the run ([plan/PLAN.md](../plan/PLAN.md)), and what we saw:

| Expectation | Observed |
|---|---|
| Side B hardly feels side A (A is about 17 million mass a minute against B's 115–125 million). | Yes, as far as this run can see. Over the 35 duel minutes with a decision the rank correlation between A's rate and B's landing was −0.04; A's rate and its own landing +0.54. |
| A climbs to about 1.5–2 times B's rate in 2–4 minutes and cycles in a band. | Yes: 294 in three minutes, then a 188–294 band; median ratio 1.96. |
| A spiral needs B to lose landings to A. | B did not lose to A, and there was no spiral. B's moves followed its own minute-to-minute noise (and the outside stream), not A. |
| Other users at up to about the lane's rate lose about what pre-run 15 saw at N = 60 @ 150. | Roughly: see below. Our floor cohort (at 100, level with the outside stream) ran at 38–42 percent of BASE, and was hit hardest when the lane went up (rank correlation of the lane's rate with floor −0.67; floor fell to 19 percent of BASE in the 00:00 minute, at 188). |

## Our lane slowed other TN10 users

During the 48 lane minutes (reference plus duel), other traffic landed on our desk node had a median of 3,107–3,165 a minute, against 3,545 in RETURN, 3,607 in the HOLD-4 minute and 3,513–3,693 in the drain and tail minutes: about 11–12 percent lower. Against BASE (3,150) it was about level, but BASE was mostly before the outside stream arrived, and "other traffic" includes that stream's own landings, so we cannot separate the two cleanly. The node's priority fee estimate read a median of 381–387 in the lane minutes, against 189 in BASE and 214–220 after. The backlog of other transactions at 100 sompi/gram in our mempool grew from a median of 16 (BASE) to about 12,400 by 23:58 (the last minute the probe could read it); the whole mempool was 18,775 at the end of the duel and still 18,372 at the end of RETURN. Our own floor hops at 100 (a stand-in for a low-fee user) ran at 38–42 percent of BASE while the lane ran, 81–85 percent after. We did this on purpose, with the operator's OK, in bounded steps, stepped the lane to zero at the end, and it is in this repo's [public statement](../PLAYBOOK.md#public-statement).

## Drain and recovery

The lane went to 0 at 00:13:59Z and esc back to 150. The lane's 50 waiting transactions landed in the 00:14 minute; none were left after. Floor hops were 139–156 a minute from 00:14 (about 76–85 percent of BASE) and stayed there through RETURN; esc read 95 percent of BASE and r300 101 percent in RETURN. Floor stayed under BASE while the outside stream's backlog sat in the mempool.

## Bot

The bot sent nothing. It filed a legal `NO SEND no-free-node`, on time: the waiter read HOLD-3 2 s after its On origin time (00:14:22Z), pinned 00:18, its libraries checked fine, and its free check ran 00:17:20–00:17:30Z, before the minute: the kept public nodes 1 and 5 were 2 distinct kaspads and every other answering endpoint was the same kaspad as a kept one, so no free node. The file was on origin at 00:19:04Z (`4861742`). One slow fetch (28 s, killed and retried) at 23:44:54Z did not matter.

## Mini

Mini read every minute in full (12 / 12 / 12 / 24 / 1 / 12) and matched the desk in **219 of 219** cohort cells (floor / r300 / esc per minute), with 0 late removals. Its TN10 kaspad was not wiped or restarted.

## Spend

| Item | tKAS |
|---|---:|
| Our heavy lane, fees | 8,711.57 (834.67 parked on our sink key, not swept) |
| Family hops, fees (floor / r300 / esc) | 4,380.18 (355.71 / 1,474.70 / 2,549.73), node mass about 41,300 a hop |
| Consolidation and split before the open | 7.27 (5.63 + 1.64) |
| Calibrations | a handful of single transactions |
| Bot | 0 |
| **About** | **13,100** |

Family submit results other than OK were `already_spent` and `orphan` only (the builder's waiting retries); 0 rate or full rejects. tKAS is not a limit (operator, 12 Nov).

Key 0 after the run (read-only status, 00:40Z): 3,124 coins over 3 tKAS but only **21,125 usable tKAS** (76,982 before the run; the abort line is 18,000), 329 small coins; keys 1–15 have no genesis coin left; payment pile 7,074 coins. A next run must refill key 0 first.

## Quirks

- The probe's mempool read failed from 23:59Z (above). Counts and the duel were not affected.
- BASE was light (ready about 1.3 blocks) until the outside stream arrived at 23:24; later N = 0 minutes sat behind its backlog, so RETURN is the fairer control for floor.
- Side B's reference was taken with A at 150; once A paid more, B's own landings barely changed, so B spent most of the duel stepping *down*.

## What this seems to show

- With both sides following the same "pay more when behind, a little less when fine" rule, a light covenant chain against a heavy lane settled at about twice the lane's rate (median 1.96) within three minutes and stayed there. No spiral, nobody gave up. That matches the fixed-rate "about twice" reading of pre-runs 14 and 15.
- No spiral here because the covenant side is too light to hurt the lane: raising A's rate moved A's own landing and not B's. That is the condition a spiral needs, and this run did not have it.
- Catching up cost side A about 69 percent more per hop; side B paid nothing extra.
- What this cannot say: both sides were ours and used one rule with fixed 90 percent references; one node's view (the desk's private node, not a miner's template); 36 minutes; an outside stream at 100 present; side A much lighter than side B. Real players may use other rules (fee-estimate wallets, bid wars, no down step), may be heavy on both sides, or may react to each other. We are just testing.

## Every minute: rates, hops per family, the lane

Rates are those in effect at the minute's start; decisions are the duel log's (rate before → after, applied about 22 s into the next minute). BASE per family: floor 45.8, r300 49.3, esc 47.6.

| Min (UTC) | Step | Lane N / rate in effect | Esc rate in effect | Floor / fam | R300 / fam | Esc / fam (% BASE) | Our heavy landed (% HOLD-1 ref) | Esc decision | Lane decision | Other traffic | Fee est. priority |
|---|---|---|---:|---:|---:|---:|---:|---|---|---:|---:|
| 23:14 | BASE N0-control | 0 / — | 150 | 46.5 | 50.7 | 49.6 (104%) | 0 | — | — | 3,150 | 192.1 |
| 23:15 | BASE N0-control | 0 / — | 150 | 48.2 | 50.7 | 48.8 (102%) | 0 | — | — | 3,108 | 188.9 |
| 23:16 | BASE N0-control | 0 / — | 150 | 45.5 | 46.7 | 46.8 (98%) | 0 | — | — | 3,129 | 188.0 |
| 23:17 | BASE N0-control | 0 / — | 150 | 46.2 | 46.7 | 46.8 (98%) | 0 | — | — | 3,170 | 189.4 |
| 23:18 | BASE N0-control | 0 / — | 150 | 45.0 | 49.0 | 47.6 (100%) | 0 | — | — | 3,072 | 188.1 |
| 23:19 | BASE N0-control | 0 / — | 150 | 50.2 | 54.0 | 52.2 (110%) | 0 | — | — | 3,151 | 192.3 |
| 23:20 | BASE N0-control | 0 / — | 150 | 46.0 | 47.3 | 47.3 (99%) | 0 | — | — | 3,059 | 190.4 |
| 23:21 | BASE N0-control | 0 / — | 150 | 45.2 | 49.7 | 47.8 (100%) | 0 | — | — | 3,218 | 185.9 |
| 23:22 | BASE N0-control | 0 / — | 150 | 47.2 | 49.7 | 47.7 (100%) | 0 | — | — | 3,287 | 186.3 |
| 23:23 | BASE N0-control | 0 / — | 150 | 44.5 | 48.3 | 46.6 (98%) | 0 | — | — | 3,118 | 184.2 |
| 23:24 | BASE N0-control | 0 / — | 150 | 37.0 | 46.3 | 43.0 (90%) | 0 | — | — | 3,449 | 227.3 |
| 23:25 | BASE N0-control | 0 / — | 150 | 42.2 | 56.3 | 50.7 (106%) | 0 | — | — | 3,530 | 222.2 |
| 23:26 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 17.0 | 51.0 | 30.3 (64%) | 415 (85%) | — | — | 3,001 | 389.3 |
| 23:27 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 18.0 | 55.3 | 33.6 (70%) | 453 (93%) | — | — | 3,145 | 382.6 |
| 23:28 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 22.2 | 53.0 | 34.1 (72%) | 491 (101%) | — | — | 3,072 | 372.4 |
| 23:29 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 15.2 | 49.0 | 31.2 (66%) | 477 (98%) | — | — | 3,106 | 388.1 |
| 23:30 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 17.2 | 47.0 | 31.3 (66%) | 469 (97%) | — | — | 3,125 | 385.0 |
| 23:31 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 16.2 | 49.3 | 32.2 (68%) | 491 (101%) | — | — | 3,107 | 375.0 |
| 23:32 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 18.0 | 50.7 | 34.8 (73%) | 516 (106%) | — | — | 3,079 | 391.7 |
| 23:33 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 19.5 | 48.7 | 32.2 (68%) | 486 (100%) | — | — | 3,169 | 375.5 |
| 23:34 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 16.8 | 56.7 | 33.7 (71%) | 486 (100%) | — | — | 3,267 | 384.0 |
| 23:35 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 17.0 | 63.7 | 35.8 (75%) | 476 (98%) | — | — | 3,101 | 383.8 |
| 23:36 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 18.0 | 49.0 | 32.3 (68%) | 480 (99%) | — | — | 3,095 | 374.6 |
| 23:37 | HOLD-1 N60-r150-ref | 60 / 150 | 150 | 17.8 | 48.0 | 33.4 (70%) | 498 (102%) | 150->188 | 150->150 | 3,127 | 362.1 |
| 23:38 | HOLD-2 N60-duel-1 | 60 / 150 | 150 | 18.5 | 46.7 | 35.3 (74%) | 481 (99%) | 188->235 | 150->120 | 3,081 | 372.4 |
| 23:39 | HOLD-2 N60-duel-1 | 60 / 150 | 188 | 20.8 | 46.3 | 41.2 (87%) | 435 (90%) | 235->294 | 120->150 | 3,174 | 354.0 |
| 23:40 | HOLD-2 N60-duel-1 | 60 / 120 | 235 | 20.2 | 53.7 | 53.1 (112%) | 466 (96%) | 294->294 | 150->150 | 3,130 | 419.3 |
| 23:41 | HOLD-2 N60-duel-1 | 60 / 150 | 294 | 16.8 | 46.3 | 45.8 (96%) | 457 (94%) | 294->235 | 150->120 | 3,082 | 415.9 |
| 23:42 | HOLD-2 N60-duel-1 | 60 / 150 | 294 | 18.5 | 47.7 | 44.8 (94%) | 435 (90%) | 235->235 | 120->150 | 3,155 | 406.1 |
| 23:43 | HOLD-2 N60-duel-1 | 60 / 120 | 235 | 20.2 | 47.7 | 44.8 (94%) | 445 (92%) | 235->188 | 150->150 | 3,209 | 367.1 |
| 23:44 | HOLD-2 N60-duel-1 | 60 / 150 | 235 | 16.2 | 46.0 | 38.1 (80%) | 464 (95%) | 188->235 | 150->120 | 3,063 | 387.6 |
| 23:45 | HOLD-2 N60-duel-1 | 60 / 150 | 188 | 19.5 | 48.3 | 41.8 (88%) | 475 (98%) | 235->294 | 120->120 | 3,183 | 356.2 |
| 23:46 | HOLD-2 N60-duel-1 | 60 / 120 | 235 | 21.5 | 47.0 | 46.0 (97%) | 406 (84%) | 294->294 | 120->150 | 3,227 | 364.1 |
| 23:47 | HOLD-2 N60-duel-1 | 60 / 120 | 294 | 18.8 | 48.0 | 46.1 (97%) | 449 (92%) | 294->235 | 150->150 | 3,243 | 400.9 |
| 23:48 | HOLD-2 N60-duel-1 | 60 / 150 | 294 | 17.5 | 45.0 | 42.2 (89%) | 485 (100%) | 235->294 | 150->120 | 3,097 | 391.0 |
| 23:49 | HOLD-2 N60-duel-1 | 60 / 150 | 235 | 20.2 | 49.3 | 45.8 (96%) | 458 (94%) | 294->294 | 120->120 | 3,191 | 375.4 |
| 23:50 | HOLD-3 N60-duel-2 | 60 / 120 | 294 | 22.8 | 52.0 | 51.3 (108%) | 424 (87%) | 294->235 | 120->150 | 3,156 | 344.2 |
| 23:51 | HOLD-3 N60-duel-2 | 60 / 120 | 294 | 21.0 | 47.3 | 44.2 (93%) | 461 (95%) | 235->235 | 150->150 | 3,107 | 356.1 |
| 23:52 | HOLD-3 N60-duel-2 | 60 / 150 | 235 | 18.5 | 47.3 | 42.7 (90%) | 458 (94%) | 235->294 | 150->120 | 3,042 | 393.8 |
| 23:53 | HOLD-3 N60-duel-2 | 60 / 150 | 235 | 20.8 | 47.0 | 45.3 (95%) | 449 (92%) | 294->294 | 120->120 | 3,196 | 397.8 |
| 23:54 | HOLD-3 N60-duel-2 | 60 / 120 | 294 | 21.8 | 45.3 | 44.4 (93%) | 411 (85%) | 294->235 | 120->150 | 3,189 | 374.7 |
| 23:55 | HOLD-3 N60-duel-2 | 60 / 120 | 294 | 18.5 | 49.0 | 46.4 (98%) | 445 (92%) | 235->235 | 150->150 | 3,072 | 373.7 |
| 23:56 | HOLD-3 N60-duel-2 | 60 / 150 | 235 | 16.2 | 49.0 | 42.2 (89%) | 461 (95%) | 235->294 | 150->120 | 3,086 | 376.5 |
| 23:57 | HOLD-3 N60-duel-2 | 60 / 150 | 235 | 17.5 | 47.3 | 45.2 (95%) | 415 (85%) | 294->294 | 120->150 | 3,201 | 380.6 |
| 23:58 | HOLD-3 N60-duel-2 | 60 / 120 | 294 | 19.5 | 49.3 | 48.7 (102%) | 402 (83%) | 294->235 | 150->188 | 3,121 | 393.5 |
| 23:59 | HOLD-3 N60-duel-2 | 60 / 150 | 294 | 13.2 | 48.3 | 44.3 (93%) | 501 (103%) | 235->235 | 188->188 | 3,267 | 414.4 |
| 00:00 | HOLD-3 N60-duel-2 | 60 / 188 | 235 | 8.5 | 45.3 | 37.4 (79%) | 475 (98%) | 235->294 | 188->150 | 3,047 | 446.8 |
| 00:01 | HOLD-3 N60-duel-2 | 60 / 188 | 235 | 13.5 | 46.3 | 43.6 (92%) | 478 (98%) | 294->294 | 150->150 | 3,169 | 420.9 |
| 00:02 | HOLD-3 N60-duel-3 | 60 / 150 | 294 | 16.5 | 47.3 | 47.3 (99%) | 486 (100%) | 294->235 | 150->120 | 3,127 | 397.9 |
| 00:03 | HOLD-3 N60-duel-3 | 60 / 150 | 294 | 20.8 | 49.7 | 44.9 (94%) | 478 (98%) | 235->235 | 120->120 | 3,170 | 342.7 |
| 00:04 | HOLD-3 N60-duel-3 | 60 / 120 | 235 | 26.5 | 64.7 | 59.7 (125%) | 432 (89%) | 235->188 | 120->150 | 3,169 | 357.8 |
| 00:05 | HOLD-3 N60-duel-3 | 60 / 120 | 235 | 19.8 | 60.7 | 48.3 (102%) | 413 (85%) | 188->188 | 150->188 | 3,140 | 368.2 |
| 00:06 | HOLD-3 N60-duel-3 | 60 / 150 | 188 | 16.8 | 50.7 | 36.4 (77%) | 518 (107%) | 188->235 | 188->188 | 2,990 | 396.4 |
| 00:07 | HOLD-3 N60-duel-3 | 60 / 188 | 188 | 13.0 | 50.0 | 40.3 (85%) | 524 (108%) | 235->294 | 188->150 | 3,060 | 410.8 |
| 00:08 | HOLD-3 N60-duel-3 | 60 / 188 | 235 | 14.5 | 47.7 | 44.6 (94%) | 498 (102%) | 294->294 | 150->150 | 3,129 | 406.1 |
| 00:09 | HOLD-3 N60-duel-3 | 60 / 150 | 294 | 17.2 | 48.0 | 47.0 (99%) | 485 (100%) | 294->235 | 150->120 | 3,104 | 436.9 |
| 00:10 | HOLD-3 N60-duel-3 | 60 / 150 | 294 | 20.2 | 53.7 | 49.9 (105%) | 482 (99%) | 235->235 | 120->120 | 3,124 | 400.4 |
| 00:11 | HOLD-3 N60-duel-3 | 60 / 120 | 235 | 23.0 | 51.3 | 47.6 (100%) | 382 (79%) | 235->188 | 120->150 | 3,390 | 337.7 |
| 00:12 | HOLD-3 N60-duel-3 | 60 / 120 | 235 | 19.2 | 46.7 | 40.9 (86%) | 429 (88%) | 188->235 | 150->188 | 3,146 | 344.4 |
| 00:13 | HOLD-3 N60-duel-3 | 60 / 150 | 188 | 17.0 | 50.7 | 42.7 (90%) | 507 (104%) | — | — | 3,008 | 371.7 |
| 00:18 | HOLD-4 | 0 / — | 150 | 39.0 | 54.7 | 48.2 (101%) | 0 | — | — | 3,607 | 213.5 |
| 00:20 | RETURN | 0 / — | 150 | 39.0 | 52.3 | 47.3 (99%) | 0 | — | — | 3,572 | 233.9 |
| 00:21 | RETURN | 0 / — | 150 | 36.2 | 50.7 | 46.1 (97%) | 0 | — | — | 3,464 | 222.1 |
| 00:22 | RETURN | 0 / — | 150 | 38.0 | 48.0 | 44.8 (94%) | 0 | — | — | 3,536 | 217.7 |
| 00:23 | RETURN | 0 / — | 150 | 35.5 | 51.7 | 44.7 (94%) | 0 | — | — | 3,769 | 221.2 |
| 00:24 | RETURN | 0 / — | 150 | 40.5 | 54.3 | 48.1 (101%) | 0 | — | — | 3,568 | 219.2 |
| 00:25 | RETURN | 0 / — | 150 | 38.0 | 52.7 | 46.4 (98%) | 0 | — | — | 3,498 | 209.3 |
| 00:26 | RETURN | 0 / — | 150 | 36.0 | 47.0 | 44.2 (93%) | 0 | — | — | 3,549 | 217.4 |
| 00:27 | RETURN | 0 / — | 150 | 34.5 | 49.7 | 45.3 (95%) | 0 | — | — | 3,545 | 208.5 |
| 00:28 | RETURN | 0 / — | 150 | 36.5 | 49.3 | 44.8 (94%) | 0 | — | — | 3,515 | 238.1 |
| 00:29 | RETURN | 0 / — | 150 | 37.0 | 48.3 | 43.6 (92%) | 0 | — | — | 3,545 | 223.2 |
| 00:30 | RETURN | 0 / — | 150 | 37.2 | 48.7 | 43.8 (92%) | 0 | — | — | 3,522 | 217.9 |
| 00:31 | RETURN | 0 / — | 150 | 37.2 | 50.3 | 45.4 (95%) | 0 | — | — | 3,591 | 228.2 |

## What a next attempt could try (not opened)

- A heavy-against-heavy duel: two lanes of similar size escalating against each other, where a spiral is possible.
- Unequal rules: one side that only steps up (no down step) or follows the node's fee estimate, against our rule.
- Hop landing time per rate, not only hops per minute.
- Fix the probe's mempool read for a mempool over about 13,000 entries.
- Refill key 0 first (21,125 usable tKAS left, abort line 18,000).
