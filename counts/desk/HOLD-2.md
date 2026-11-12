OBSERVATION

Not scored. No payment of ours in pre-run 16: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# HOLD-2, desk, pre-run 16

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

HOLD-2 in pre-run 16 is the duel, part 1 (lane N=60; esc and lane rates moved each minute by the duel rule): N60-duel-1 12 whole minutes. Families only for payments (no payment of ours); our own heavy lane ran at the N and rate shown per minute (N = how many lane chains may each hold one ready transaction in the mempool). The HOLD file names are kept so the bot's and Mini's gates read as in earlier pre-runs. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r300 (families 5–7) 300 sompi/gram on the desk's private node, esc (families 8–16) 150 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r300 (300) | esc (duel, start 150) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-12T23:38 | 60 / 150 | 74 | 140 | 318 | 58 / 58 | 481 | 487 | 5,069 / 32 | 5,069 | 59.66 | 5,207 | 372.4 |
| 2026-11-12T23:39 | 60 / 150 | 83 | 139 | 371 | 55 / 55 | 435 | 433 | 5,451 / 32 | 5,451 | 56.23 | 5,582 | 354.0 |
| 2026-11-12T23:40 | 60 / 120 | 81 | 161 | 478 | 54 / 54 | 466 | 465 | 5,790 / 32 | 5,790 | 55.08 | 5,985 | 419.3 |
| 2026-11-12T23:41 | 60 / 150 | 67 | 139 | 412 | 57 / 57 | 457 | 455 | 6,204 / 32 | 6,204 | 56.58 | 6,354 | 415.9 |
| 2026-11-12T23:42 | 60 / 150 | 74 | 143 | 403 | 59 / 59 | 435 | 432 | 6,602 / 32 | 6,602 | 56.81 | 6,740 | 406.1 |
| 2026-11-12T23:43 | 60 / 120 | 81 | 143 | 403 | 57 / 57 | 445 | 450 | 6,839 / 32 | 6,839 | 56.76 | 6,989 | 367.1 |
| 2026-11-12T23:44 | 60 / 150 | 65 | 138 | 343 | 56 / 56 | 464 | 458 | 7,236 / 32 | 7,236 | 58.47 | 7,440 | 387.6 |
| 2026-11-12T23:45 | 60 / 150 | 78 | 145 | 376 | 51 / 51 | 475 | 480 | 7,663 / 32 | 7,663 | 56.19 | 7,809 | 356.2 |
| 2026-11-12T23:46 | 60 / 120 | 86 | 141 | 414 | 57 / 57 | 406 | 406 | 8,004 / 32 | 8,004 | 57.55 | 8,161 | 364.1 |
| 2026-11-12T23:47 | 60 / 120 | 75 | 144 | 415 | 55 / 55 | 449 | 452 | 8,361 / 32 | 8,361 | 57.73 | 8,493 | 400.9 |
| 2026-11-12T23:48 | 60 / 150 | 70 | 135 | 380 | 57 / 57 | 485 | 480 | 8,766 / 32 | 8,766 | 58.03 | 8,958 | 391.0 |
| 2026-11-12T23:49 | 60 / 150 | 81 | 148 | 412 | 55 / 55 | 458 | 455 | 9,181 / 32 | 9,181 | 56.74 | 9,335 | 375.4 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R300 hops (300) | Esc hops (duel, start 150) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-12T23:38 | 4,092 | 0 | 74 | 140 | 318 | 3,081 | 385 | 1 | 315 | 20 | kept pace |
| 2026-11-12T23:39 | 4,202 | 0 | 83 | 139 | 371 | 3,174 | 359 | 2 | 488 | 20 | kept pace |
| 2026-11-12T23:40 | 4,314 | 0 | 81 | 161 | 478 | 3,130 | 384 | 1 | 603 | 19 | kept pace |
| 2026-11-12T23:41 | 4,157 | 0 | 67 | 139 | 412 | 3,082 | 359 | 1 | 858 | 20 | kept pace |
| 2026-11-12T23:42 | 4,210 | 0 | 74 | 143 | 403 | 3,155 | 368 | 2 | 569 | 20 | kept pace |
| 2026-11-12T23:43 | 4,278 | 0 | 81 | 143 | 403 | 3,209 | 396 | 1 | 412 | 20 | kept pace |
| 2026-11-12T23:44 | 4,071 | 0 | 65 | 138 | 343 | 3,063 | 353 | 1 | 457 | 20 | kept pace |
| 2026-11-12T23:45 | 4,255 | 0 | 78 | 145 | 376 | 3,183 | 390 | 2 | 424 | 20 | kept pace |
| 2026-11-12T23:46 | 4,273 | 0 | 86 | 141 | 414 | 3,227 | 367 | 1 | 659 | 20 | kept pace |
| 2026-11-12T23:47 | 4,326 | 0 | 75 | 144 | 415 | 3,243 | 388 | 0 | 392 | 20 | kept pace |
| 2026-11-12T23:48 | 4,167 | 0 | 70 | 135 | 380 | 3,097 | 357 | 1 | 540 | 20 | kept pace |
| 2026-11-12T23:49 | 4,289 | 0 | 81 | 148 | 412 | 3,191 | 410 | 1 | 243 | 19 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R300 (families 5–7, desk private node): 300 sompi/gram per hop. Esc (families 8–16, desk private node): 150/188/235/294 sompi/gram per hop. In pre-run 16 that rate is on the hop's node-side mass (kit21): the builder is asked for a bill rate on its own mass so that fee / node mass is the tier's rate.

| Tier | Node rate as built, median (min–max) | Bill rate, median | Node mass, median (min–max) | Node rate in the desk mempool, lowest–highest (probe) |
|---|---|---:|---|---|
| floor (100) | 100.16 (100–100.32) | 319 | 41,493 (40,396–42,284) | 100–100.31 |
| r300 (300) | 300.17 (300–300.32) | 954 | 41,457 (40,403–42,248) | 300–300.31 |
| esc (150) | 235.25 (150–294.32) | 751 | 41,497 (40,395–42,268) | 150–294.31 |

Node rate as built is kit21's fee / node mass (rusty-kaspa v2.1.0 storage mass with UTXO plurality, or compute or transient/2 if larger). In the desk mempool the probe divides the node's fee by the larger of the storage and compute mass the node reports.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 17 (366), 20 (365), 16 (356), 18 (348), 21 (337), 19 (335), 15 (312), 14 (223), 22 (203), 13 (142), 23 (101), 12 (78), and 20 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R300 OK / att / rate rej / full rej / waiting | Esc OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|
| 2026-11-12T23:38 | 0 | 0 | 0 | 0 | 0 | 74 / 312 / 0 / 0 / 4 | 139 / 278 / 0 / 0 / 3 | 319 / 778 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:39 | 0 | 0 | 0 | 0 | 0 | 82 / 320 / 0 / 0 / 3 | 139 / 278 / 0 / 0 / 3 | 371 / 804 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:40 | 0 | 0 | 0 | 0 | 0 | 82 / 312 / 0 / 0 / 5 | 161 / 274 / 0 / 0 / 3 | 478 / 832 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:41 | 0 | 0 | 0 | 0 | 0 | 67 / 315 / 0 / 0 / 5 | 138 / 275 / 0 / 0 / 2 | 409 / 820 / 0 / 0 / 6 | 0 | 0 | yes |
| 2026-11-12T23:42 | 0 | 0 | 0 | 0 | 0 | 73 / 319 / 0 / 0 / 4 | 142 / 282 / 0 / 0 / 1 | 403 / 823 / 0 / 0 / 6 | 0 | 0 | yes |
| 2026-11-12T23:43 | 0 | 0 | 0 | 0 | 0 | 82 / 324 / 0 / 0 / 5 | 145 / 282 / 0 / 0 / 3 | 405 / 819 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:44 | 0 | 0 | 0 | 0 | 0 | 65 / 311 / 0 / 0 / 5 | 137 / 278 / 0 / 0 / 2 | 343 / 788 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:45 | 0 | 0 | 0 | 0 | 0 | 78 / 319 / 0 / 0 / 5 | 146 / 278 / 0 / 0 / 3 | 376 / 807 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:46 | 0 | 0 | 0 | 0 | 0 | 86 / 323 / 0 / 0 / 5 | 140 / 279 / 0 / 0 / 2 | 413 / 838 / 0 / 0 / 7 | 0 | 0 | yes |
| 2026-11-12T23:47 | 0 | 0 | 0 | 0 | 0 | 75 / 321 / 0 / 0 / 5 | 144 / 279 / 0 / 0 / 2 | 409 / 824 / 0 / 0 / 1 | 0 | 0 | yes |
| 2026-11-12T23:48 | 0 | 0 | 0 | 0 | 0 | 70 / 319 / 0 / 0 / 5 | 136 / 273 / 0 / 0 / 3 | 387 / 806 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:49 | 0 | 0 | 0 | 0 | 0 | 80 / 319 / 0 / 0 / 4 | 148 / 278 / 0 / 0 / 3 | 413 / 815 / 0 / 0 / 9 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 16 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621912362 | 0 | 0 | 0 | 33 |
| 5 | yes | 621912362 | 0 | 0 | 0 | 37 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 913 of 914 | 2426 | 7072 |
| r300 | 1715 of 1715 | 1083 | 1653 |
| esc | 4726 of 4726 | 1154 | 1906 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R300 in mempool / ready | Esc in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r300 | Template: esc | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-12T23:38 | 3 | 5,207 | 177 | 59.66 | 5,142 | 105 | 5,069 | 266,624 | 0 | 58 / 58 | 4 / 4 | 3 / 3 | 9 / 9 | 7 | 470,457 | 1 | 0 | 1 | 0 | 1 | 1 | 2 | 372.4 / 180.0 / 114.1 | 5,220 | 5,218 |
| 2026-11-12T23:39 | 3 | 5,582 | 163 | 56.23 | 5,515 | 96 | 5,451 | 266,624 | 0 | 55 / 55 | 4 / 4 | 3 / 3 | 8 / 8 | 8 | 474,151 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 354.0 / 178.3 / 114.0 | 5,604 | 5,623 |
| 2026-11-12T23:40 | 3 | 5,985 | 184 | 55.08 | 5,919 | 112 | 5,790 | 266,623 | 0 | 54 / 54 | 4 / 4 | 3 / 3 | 9 / 9 | 7 | 472,827 | 1 | 0 | 1 | 0 | 1 | 2 | 0 | 419.3 / 183.4 / 114.4 | 5,961 | 5,971 |
| 2026-11-12T23:41 | 3 | 6,354 | 184 | 56.58 | 6,284 | 112 | 6,204 | 266,623 | 0 | 57 / 57 | 4 / 4 | 3 / 3 | 9 / 9 | 7 | 473,783 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 415.9 / 183.2 / 114.4 | 6,387 | 6,376 |
| 2026-11-12T23:42 | 2 | 6,740 | 170 | 56.81 | 6,674 | 104 | 6,602 | 266,623 | 0 | 59 / 59 | 4 / 4 | 3 / 3 | 9 / 9 | 9 | 474,844 | 1 | 0 | 1 | 0 | 0 | 0 | 3 | 406.1 / 182.5 / 114.3 | 6,745 | 6,744 |
| 2026-11-12T23:43 | 3 | 6,989 | 188 | 56.76 | 6,922 | 115 | 6,839 | 266,622 | 0 | 57 / 57 | 4 / 4 | 3 / 3 | 9 / 9 | 8 | 473,472 | 1 | 0 | 1 | 0 | 2 | 0 | 0 | 367.1 / 179.5 / 114.1 | 6,990 | 6,990 |
| 2026-11-12T23:44 | 3 | 7,440 | 224 | 58.47 | 7,368 | 151 | 7,236 | 266,622 | 0 | 56 / 56 | 4 / 4 | 3 / 3 | 9 / 9 | 7 | 391,262 | 1 | 0 | 0 | 0 | 0 | 1 | 3 | 387.6 / 181.2 / 114.2 | 7,472 | 7,470 |
| 2026-11-12T23:45 | 3 | 7,809 | 184 | 56.19 | 7,749 | 118 | 7,663 | 266,621 | 0 | 51 / 51 | 4 / 4 | 1 / 1 | 7 / 7 | 9 | 473,595 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 356.2 / 178.5 / 114.0 | 7,794 | 7,794 |
| 2026-11-12T23:46 | 3 | 8,161 | 179 | 57.55 | 8,090 | 113 | 8,004 | 266,621 | 0 | 57 / 57 | 4 / 4 | 3 / 3 | 8 / 8 | 7 | 473,564 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 364.1 / 179.3 / 114.0 | 8,146 | 8,186 |
| 2026-11-12T23:47 | 3 | 8,493 | 195 | 57.73 | 8,428 | 125 | 8,361 | 266,620 | 0 | 55 / 55 | 4 / 4 | 3 / 3 | 8 / 8 | 6 | 473,124 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 400.9 / 182.2 / 114.3 | 8,484 | 8,484 |
| 2026-11-12T23:48 | 3 | 8,958 | 149 | 58.03 | 8,890 | 80 | 8,766 | 266,620 | 0 | 57 / 57 | 4 / 4 | 2 / 2 | 7 / 7 | 7 | 473,121 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 391.0 / 181.4 / 114.2 | 8,878 | 8,886 |
| 2026-11-12T23:49 | 3 | 9,335 | 186 | 56.74 | 9,269 | 120 | 9,181 | 266,619 | 0 | 55 / 55 | 4 / 4 | 3 / 3 | 7 / 7 | 10 | 473,262 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 375.4 / 180.2 / 114.1 | 9,390 | 9,404 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.
