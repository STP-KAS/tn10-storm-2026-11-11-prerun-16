OBSERVATION

Not scored. No payment of ours in pre-run 16: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# HOLD-1, desk, pre-run 16

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

HOLD-1 in pre-run 16 is lane N=60 at 150, esc at 150 (the lane's reference, no escalation): N60-r150-ref 12 whole minutes. Families only for payments (no payment of ours); our own heavy lane ran at the N and rate shown per minute (N = how many lane chains may each hold one ready transaction in the mempool). The HOLD file names are kept so the bot's and Mini's gates read as in earlier pre-runs. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r300 (families 5–7) 300 sompi/gram on the desk's private node, esc (families 8–16) 150 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r300 (300) | esc (duel, start 150) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-12T23:26 | 60 / 150 | 68 | 153 | 273 | 54 / 54 | 415 | 472 | 218 / 32 | 218 | 52.73 | 404 | 389.3 |
| 2026-11-12T23:27 | 60 / 150 | 72 | 166 | 302 | 59 / 59 | 453 | 452 | 610 / 32 | 610 | 57.04 | 767 | 382.6 |
| 2026-11-12T23:28 | 60 / 150 | 89 | 159 | 307 | 51 / 51 | 491 | 491 | 1,018 / 32 | 1,018 | 54.71 | 1,149 | 372.4 |
| 2026-11-12T23:29 | 60 / 150 | 61 | 147 | 281 | 58 / 58 | 477 | 472 | 1,421 / 32 | 1,421 | 58.55 | 1,569 | 388.1 |
| 2026-11-12T23:30 | 60 / 150 | 69 | 141 | 282 | 57 / 57 | 469 | 477 | 1,822 / 32 | 1,822 | 58.04 | 2,013 | 385.0 |
| 2026-11-12T23:31 | 60 / 150 | 65 | 148 | 290 | 55 / 55 | 491 | 486 | 2,239 / 32 | 2,239 | 55.59 | 2,433 | 375.0 |
| 2026-11-12T23:32 | 60 / 150 | 72 | 152 | 313 | 55 / 55 | 516 | 521 | 2,633 / 32 | 2,633 | 54.98 | 2,850 | 391.7 |
| 2026-11-12T23:33 | 60 / 150 | 78 | 146 | 290 | 53 / 53 | 486 | 480 | 3,027 / 32 | 3,027 | 52.85 | 3,199 | 375.5 |
| 2026-11-12T23:34 | 60 / 150 | 67 | 170 | 303 | 57 / 57 | 486 | 486 | 3,435 / 32 | 3,435 | 57.91 | 3,609 | 384.0 |
| 2026-11-12T23:35 | 60 / 150 | 68 | 191 | 322 | 55 / 55 | 476 | 482 | 3,845 / 32 | 3,845 | 58.63 | 4,038 | 383.8 |
| 2026-11-12T23:36 | 60 / 150 | 72 | 147 | 291 | 53 / 53 | 480 | 479 | 4,275 / 32 | 4,275 | 56.51 | 4,455 | 374.6 |
| 2026-11-12T23:37 | 60 / 150 | 71 | 144 | 301 | 57 / 57 | 498 | 495 | 4,671 / 32 | 4,671 | 57.96 | 4,838 | 362.1 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R300 hops (300) | Esc hops (duel, start 150) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-12T23:26 | 3,909 | 0 | 68 | 153 | 273 | 3,001 | 353 | 1 | 434 | 20 | kept pace |
| 2026-11-12T23:27 | 4,138 | 0 | 72 | 166 | 302 | 3,145 | 367 | 1 | 380 | 20 | kept pace |
| 2026-11-12T23:28 | 4,117 | 0 | 89 | 159 | 307 | 3,072 | 376 | 1 | 539 | 20 | kept pace |
| 2026-11-12T23:29 | 4,072 | 0 | 61 | 147 | 281 | 3,106 | 358 | 2 | 829 | 19 | kept pace |
| 2026-11-12T23:30 | 4,083 | 0 | 69 | 141 | 282 | 3,125 | 371 | 1 | 336 | 20 | kept pace |
| 2026-11-12T23:31 | 4,100 | 0 | 65 | 148 | 290 | 3,107 | 384 | 0 | 547 | 20 | kept pace |
| 2026-11-12T23:32 | 4,130 | 0 | 72 | 152 | 313 | 3,079 | 402 | 1 | 563 | 20 | kept pace |
| 2026-11-12T23:33 | 4,168 | 0 | 78 | 146 | 290 | 3,169 | 371 | 1 | 373 | 20 | kept pace |
| 2026-11-12T23:34 | 4,293 | 0 | 67 | 170 | 303 | 3,267 | 388 | 0 | 377 | 19 | kept pace |
| 2026-11-12T23:35 | 4,158 | 0 | 68 | 191 | 322 | 3,101 | 385 | 1 | 364 | 20 | kept pace |
| 2026-11-12T23:36 | 4,085 | 0 | 72 | 147 | 291 | 3,095 | 359 | 1 | 326 | 20 | kept pace |
| 2026-11-12T23:37 | 4,141 | 0 | 71 | 144 | 301 | 3,127 | 404 | 2 | 283 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R300 (families 5–7, desk private node): 300 sompi/gram per hop. Esc (families 8–16, desk private node): 150 sompi/gram per hop. In pre-run 16 that rate is on the hop's node-side mass (kit21): the builder is asked for a bill rate on its own mass so that fee / node mass is the tier's rate.

| Tier | Node rate as built, median (min–max) | Bill rate, median | Node mass, median (min–max) | Node rate in the desk mempool, lowest–highest (probe) |
|---|---|---:|---|---|
| floor (100) | 100.15 (100–100.31) | 319 | 41,593 (40,380–42,320) | 100–100.3 |
| r300 (300) | 300.15 (300–300.31) | 958 | 41,647 (40,435–42,357) | 300.01–300.31 |
| esc (150) | 150.19 (150–150.32) | 479 | 41,646 (40,383–42,357) | 150.01–150.31 |

Node rate as built is kit21's fee / node mass (rusty-kaspa v2.1.0 storage mass with UTXO plurality, or compute or transient/2 if larger). In the desk mempool the probe divides the node's fee by the larger of the storage and compute mass the node reports.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 21 (557), 22 (489), 20 (480), 19 (375), 23 (371), 18 (243), 17 (199), 16 (164), 24 (160), 15 (83), 25 (81), 14 (46), and 19 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R300 OK / att / rate rej / full rej / waiting | Esc OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|
| 2026-11-12T23:26 | 0 | 0 | 0 | 0 | 0 | 67 / 315 / 0 / 0 / 3 | 153 / 288 / 0 / 0 / 1 | 279 / 759 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:27 | 0 | 0 | 0 | 0 | 0 | 73 / 319 / 0 / 0 / 4 | 168 / 276 / 0 / 0 / 3 | 300 / 765 / 0 / 0 / 7 | 0 | 0 | yes |
| 2026-11-12T23:28 | 0 | 0 | 0 | 0 | 0 | 89 / 325 / 0 / 0 / 4 | 158 / 284 / 0 / 0 / 2 | 306 / 783 / 0 / 0 / 6 | 0 | 0 | yes |
| 2026-11-12T23:29 | 0 | 0 | 0 | 0 | 0 | 60 / 306 / 0 / 0 / 3 | 146 / 284 / 0 / 0 / 1 | 282 / 771 / 0 / 0 / 7 | 0 | 0 | yes |
| 2026-11-12T23:30 | 0 | 0 | 0 | 0 | 0 | 70 / 310 / 0 / 0 / 4 | 144 / 279 / 0 / 0 / 4 | 285 / 765 / 0 / 0 / 10 | 0 | 0 | yes |
| 2026-11-12T23:31 | 0 | 0 | 0 | 0 | 0 | 65 / 315 / 0 / 0 / 4 | 147 / 283 / 0 / 0 / 3 | 288 / 771 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:32 | 0 | 0 | 0 | 0 | 0 | 72 / 319 / 0 / 0 / 4 | 150 / 277 / 0 / 0 / 1 | 312 / 780 / 0 / 0 / 7 | 0 | 0 | yes |
| 2026-11-12T23:33 | 0 | 0 | 0 | 0 | 0 | 78 / 318 / 0 / 0 / 4 | 145 / 270 / 0 / 0 / 0 | 291 / 773 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:34 | 0 | 0 | 0 | 0 | 0 | 66 / 316 / 0 / 0 / 3 | 171 / 289 / 0 / 0 / 1 | 303 / 773 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:35 | 0 | 0 | 0 | 0 | 0 | 69 / 314 / 0 / 0 / 4 | 193 / 280 / 0 / 0 / 3 | 323 / 776 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:36 | 0 | 0 | 0 | 0 | 0 | 72 / 314 / 0 / 0 / 4 | 144 / 286 / 0 / 0 / 0 | 290 / 767 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:37 | 0 | 0 | 0 | 0 | 0 | 71 / 317 / 0 / 0 / 4 | 148 / 282 / 0 / 0 / 3 | 301 / 776 / 0 / 0 / 8 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 16 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621905108 | 0 | 0 | 0 | 33 |
| 5 | yes | 621905108 | 0 | 0 | 0 | 37 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 852 of 852 | 2557 | 7534 |
| r300 | 1867 of 1867 | 993 | 1540 |
| esc | 3560 of 3560 | 1523 | 3108 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R300 in mempool / ready | Esc in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r300 | Template: esc | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-12T23:26 | 3 | 404 | 218 | 52.73 | 339 | 149 | 218 | 266,629 | 0 | 54 / 54 | 4 / 4 | 3 / 3 | 5 / 5 | 8 | 391,102 | 1 | 0 | 1 | 0 | 2 | 0 | 5 | 389.3 / 181.3 / 114.2 | 405 | 404 |
| 2026-11-12T23:27 | 3 | 767 | 218 | 57.04 | 708 | 148 | 610 | 266,629 | 0 | 59 / 59 | 4 / 4 | 2 / 2 | 9 / 9 | 10 | 349,702 | 1 | 0 | 1 | 0 | 1 | 0 | 7 | 382.6 / 180.8 / 114.2 | 760 | 760 |
| 2026-11-12T23:28 | 3 | 1,149 | 203 | 54.71 | 1,080 | 138 | 1,018 | 266,628 | 0 | 51 / 51 | 4 / 4 | 3 / 3 | 9 / 9 | 8 | 391,777 | 1 | 0 | 1 | 0 | 2 | 1 | 5 | 372.4 / 180.0 / 114.1 | 1,148 | 1,145 |
| 2026-11-12T23:29 | 3 | 1,569 | 222 | 58.55 | 1,497 | 152 | 1,421 | 266,627 | 0 | 58 / 58 | 4 / 4 | 3 / 3 | 8 / 8 | 9 | 391,715 | 1 | 0 | 1 | 0 | 2 | 1 | 5 | 388.1 / 181.2 / 114.2 | 1,597 | 1,611 |
| 2026-11-12T23:30 | 3 | 2,013 | 218 | 58.04 | 1,942 | 151 | 1,822 | 266,627 | 0 | 57 / 57 | 4 / 4 | 3 / 3 | 8 / 8 | 11 | 391,899 | 1 | 0 | 0 | 0 | 2 | 1 | 6 | 385.0 / 181.0 / 114.2 | 2,006 | 2,011 |
| 2026-11-12T23:31 | 3 | 2,433 | 193 | 55.59 | 2,363 | 124 | 2,239 | 266,627 | 0 | 55 / 55 | 4 / 4 | 3 / 3 | 9 / 9 | 5 | 349,838 | 1 | 0 | 1 | 0 | 1 | 1 | 1 | 375.0 / 180.2 / 114.1 | 2,392 | 2,401 |
| 2026-11-12T23:32 | 3 | 2,850 | 224 | 54.98 | 2,783 | 154 | 2,633 | 266,626 | 0 | 55 / 55 | 4 / 4 | 3 / 3 | 8 / 8 | 12 | 433,826 | 1 | 0 | 1 | 0 | 2 | 1 | 7 | 391.7 / 181.5 / 114.2 | 2,867 | 2,864 |
| 2026-11-12T23:33 | 3 | 3,199 | 188 | 52.85 | 3,131 | 119 | 3,027 | 266,626 | 0 | 53 / 53 | 4 / 4 | 3 / 3 | 8 / 8 | 9 | 392,795 | 1 | 0 | 1 | 0 | 2 | 1 | 2 | 375.5 / 180.2 / 114.1 | 3,158 | 3,159 |
| 2026-11-12T23:34 | 3 | 3,609 | 207 | 57.91 | 3,537 | 134 | 3,435 | 266,626 | 0 | 57 / 57 | 4 / 4 | 3 / 3 | 9 / 9 | 5 | 391,710 | 1 | 0 | 1 | 0 | 1 | 1 | 2 | 384.0 / 180.9 / 114.2 | 3,576 | 3,589 |
| 2026-11-12T23:35 | 3 | 4,038 | 216 | 58.63 | 3,979 | 143 | 3,845 | 266,625 | 0 | 55 / 55 | 4 / 4 | 3 / 3 | 9 / 9 | 8 | 349,847 | 1 | 0 | 1 | 0 | 1 | 0 | 5 | 383.8 / 180.9 / 114.2 | 4,101 | 4,101 |
| 2026-11-12T23:36 | 3 | 4,455 | 201 | 56.51 | 4,382 | 136 | 4,275 | 266,625 | 0 | 53 / 53 | 4 / 4 | 3 / 3 | 9 / 9 | 7 | 349,544 | 1 | 0 | 1 | 0 | 0 | 0 | 3 | 374.6 / 180.2 / 114.1 | 4,472 | 4,484 |
| 2026-11-12T23:37 | 3 | 4,838 | 190 | 57.96 | 4,768 | 121 | 4,671 | 266,625 | 0 | 57 / 57 | 4 / 4 | 2 / 2 | 7 / 7 | 9 | 349,650 | 1 | 0 | 1 | 0 | 1 | 1 | 4 | 362.1 / 179.1 / 114.0 | 4,844 | 4,861 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.
