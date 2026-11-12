OBSERVATION

Not scored. No payment of ours in pre-run 16: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# BASE, desk, pre-run 16

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

BASE in pre-run 16 is lane N=0 (control): N0-control 12 whole minutes. Families only for payments (no payment of ours); our own heavy lane ran at the N and rate shown per minute (N = how many lane chains may each hold one ready transaction in the mempool). The HOLD file names are kept so the bot's and Mini's gates read as in earlier pre-runs. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r300 (families 5–7) 300 sompi/gram on the desk's private node, esc (families 8–16) 150 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r300 (300) | esc (duel, start 150) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-12T23:14 | 0 / 100 | 186 | 152 | 446 | 0 / 0 | 0 | 0 | - / - | - | 1.42 | 16 | 192.1 |
| 2026-11-12T23:15 | 0 / 100 | 193 | 152 | 439 | 0 / 0 | 0 | 0 | - / - | - | 1.25 | 15 | 188.9 |
| 2026-11-12T23:16 | 0 / 100 | 182 | 140 | 421 | 0 / 0 | 0 | 0 | - / - | - | 1.41 | 9 | 188.0 |
| 2026-11-12T23:17 | 0 / 100 | 185 | 140 | 421 | 0 / 0 | 0 | 0 | - / - | - | 1.34 | 16 | 189.4 |
| 2026-11-12T23:18 | 0 / 100 | 180 | 147 | 428 | 0 / 0 | 0 | 0 | - / - | - | 1.34 | 16 | 188.1 |
| 2026-11-12T23:19 | 0 / 100 | 201 | 162 | 470 | 0 / 0 | 0 | 0 | - / - | - | 1.54 | 18 | 192.3 |
| 2026-11-12T23:20 | 0 / 100 | 184 | 142 | 426 | 0 / 0 | 0 | 0 | 0 / 0 | 2 | 1.34 | 15 | 190.4 |
| 2026-11-12T23:21 | 0 / 100 | 181 | 149 | 430 | 0 / 0 | 0 | 0 | - / - | - | 1.33 | 16 | 185.9 |
| 2026-11-12T23:22 | 0 / 100 | 189 | 149 | 429 | 0 / 0 | 0 | 0 | 0 / 0 | 1 | 1.35 | 17 | 186.3 |
| 2026-11-12T23:23 | 0 / 100 | 178 | 145 | 419 | 0 / 0 | 0 | 0 | - / - | - | 1.34 | 12 | 184.2 |
| 2026-11-12T23:24 | 0 / 100 | 148 | 139 | 387 | 0 / 0 | 0 | 0 | 49 / 22 | 49 | 17.70 | 77 | 227.3 |
| 2026-11-12T23:25 | 0 / 100 | 169 | 169 | 456 | 0 / 0 | 0 | 0 | 30 / 19 | 30 | 16.03 | 58 | 222.2 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R300 hops (300) | Esc hops (duel, start 150) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-12T23:14 | 3,903 | 0 | 186 | 152 | 446 | 3,150 | 392 | 2 | 727 | 20 | kept pace |
| 2026-11-12T23:15 | 3,859 | 0 | 193 | 152 | 439 | 3,108 | 374 | 1 | 448 | 19 | kept pace |
| 2026-11-12T23:16 | 3,845 | 0 | 182 | 140 | 421 | 3,129 | 363 | 1 | 583 | 20 | kept pace |
| 2026-11-12T23:17 | 3,887 | 0 | 185 | 140 | 421 | 3,170 | 379 | 1 | 523 | 20 | kept pace |
| 2026-11-12T23:18 | 3,795 | 0 | 180 | 147 | 428 | 3,072 | 377 | 1 | 342 | 19 | kept pace |
| 2026-11-12T23:19 | 3,955 | 0 | 201 | 162 | 470 | 3,151 | 388 | 1 | 671 | 20 | kept pace |
| 2026-11-12T23:20 | 3,786 | 0 | 184 | 142 | 426 | 3,059 | 371 | 1 | 598 | 20 | kept pace |
| 2026-11-12T23:21 | 3,954 | 0 | 181 | 149 | 430 | 3,218 | 374 | 1 | 233 | 19 | kept pace |
| 2026-11-12T23:22 | 4,035 | 0 | 189 | 149 | 429 | 3,287 | 357 | 1 | 478 | 20 | kept pace |
| 2026-11-12T23:23 | 3,833 | 0 | 178 | 145 | 419 | 3,118 | 366 | 0 | 635 | 20 | kept pace |
| 2026-11-12T23:24 | 4,115 | 0 | 148 | 139 | 387 | 3,449 | 349 | 0 | 513 | 19 | kept pace |
| 2026-11-12T23:25 | 4,322 | 0 | 169 | 169 | 456 | 3,530 | 360 | 1 | 836 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R300 (families 5–7, desk private node): 300 sompi/gram per hop. Esc (families 8–16, desk private node): 150 sompi/gram per hop. In pre-run 16 that rate is on the hop's node-side mass (kit21): the builder is asked for a bill rate on its own mass so that fee / node mass is the tier's rate.

| Tier | Node rate as built, median (min–max) | Bill rate, median | Node mass, median (min–max) | Node rate in the desk mempool, lowest–highest (probe) |
|---|---|---:|---|---|
| floor (100) | 100.11 (100–100.32) | 321 | 41,787 (40,413–42,371) | 100.01–100.31 |
| r300 (300) | 300.15 (300–300.32) | 961 | 41,788 (40,423–42,374) | 300–300.32 |
| esc (150) | 150.17 (150–150.32) | 481 | 41,787 (40,478–42,376) | 150–150.31 |

Node rate as built is kit21's fee / node mass (rusty-kaspa v2.1.0 storage mass with UTXO plurality, or compute or transient/2 if larger). In the desk mempool the probe divides the node's fee by the larger of the storage and compute mass the node reports.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 23 (717), 22 (669), 24 (525), 21 (483), 20 (292), 25 (209), 19 (151), 18 (76), 26 (60), 27 (44), 17 (38), 28 (24), and 20 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R300 OK / att / rate rej / full rej / waiting | Esc OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|
| 2026-11-12T23:14 | 0 | 0 | 0 | 0 | 0 | 185 / 360 / 0 / 0 / 3 | 152 / 284 / 0 / 0 / 3 | 445 / 845 / 0 / 0 / 7 | 0 | 0 | yes |
| 2026-11-12T23:15 | 0 | 0 | 0 | 0 | 0 | 192 / 374 / 0 / 0 / 2 | 149 / 284 / 0 / 0 / 0 | 436 / 851 / 0 / 0 / 4 | 0 | 0 | yes |
| 2026-11-12T23:16 | 0 | 0 | 0 | 0 | 0 | 184 / 363 / 0 / 0 / 4 | 142 / 278 / 0 / 0 / 2 | 426 / 823 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:17 | 0 | 0 | 0 | 0 | 0 | 184 / 365 / 0 / 0 / 3 | 140 / 272 / 0 / 0 / 2 | 421 / 821 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:18 | 0 | 0 | 0 | 0 | 0 | 181 / 365 / 0 / 0 / 4 | 148 / 285 / 0 / 0 / 3 | 428 / 849 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:19 | 0 | 0 | 0 | 0 | 0 | 201 / 371 / 0 / 0 / 4 | 162 / 284 / 0 / 0 / 3 | 470 / 843 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:20 | 0 | 0 | 0 | 0 | 0 | 184 / 368 / 0 / 0 / 4 | 142 / 279 / 0 / 0 / 3 | 425 / 815 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T23:21 | 0 | 0 | 0 | 0 | 0 | 181 / 361 / 0 / 0 / 4 | 149 / 277 / 0 / 0 / 3 | 431 / 827 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:22 | 0 | 0 | 0 | 0 | 0 | 189 / 365 / 0 / 0 / 4 | 149 / 287 / 0 / 0 / 3 | 429 / 834 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:23 | 0 | 0 | 0 | 0 | 0 | 177 / 358 / 0 / 0 / 3 | 145 / 281 / 0 / 0 / 3 | 419 / 827 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:24 | 0 | 0 | 0 | 0 | 0 | 149 / 352 / 0 / 0 / 4 | 139 / 276 / 0 / 0 / 3 | 387 / 807 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-12T23:25 | 0 | 0 | 0 | 0 | 0 | 169 / 358 / 0 / 0 / 4 | 167 / 274 / 0 / 0 / 1 | 450 / 822 / 0 / 0 / 3 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 16 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621897800 | 0 | 0 | 0 | 33 |
| 5 | yes | 621897800 | 0 | 0 | 0 | 37 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 2176 of 2176 | 1108 | 1740 |
| r300 | 1784 of 1784 | 1025 | 1519 |
| esc | 5167 of 5167 | 1055 | 1611 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R300 in mempool / ready | Esc in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r300 | Template: esc | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-12T23:14 | 3 | 16 | 17 | 1.42 | 1 | 1 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 9 / 9 | 11 | 455,305 | 0 | 0 | 0 | 0 | 3 | 6 | 0 | 192.1 / 148.0 / 110.6 | 13 | 7 |
| 2026-11-12T23:15 | 3 | 15 | 15 | 1.25 | 0 | 0 | - | - | 0 | 0 / 0 | 3 / 3 | 3 / 3 | 9 / 9 | 11 | 459,703 | 0 | 0 | 0 | 1 | 3 | 7 | 0 | 188.9 / 146.8 / 110.4 | 0 | 10 |
| 2026-11-12T23:16 | 3 | 9 | 16 | 1.41 | 1 | 1 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 9 / 9 | 11 | 460,157 | 0 | 0 | 0 | 0 | 3 | 8 | 0 | 188.0 / 146.5 / 110.4 | 1 | 7 |
| 2026-11-12T23:17 | 3 | 16 | 16 | 1.34 | 0 | 0 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 9 / 9 | 11 | 459,705 | 0 | 0 | 0 | 2 | 3 | 6 | 0 | 189.4 / 147.0 / 110.5 | 5 | 12 |
| 2026-11-12T23:18 | 3 | 16 | 16 | 1.34 | 0 | 0 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 9 / 9 | 11 | 460,842 | 0 | 0 | 0 | 1 | 3 | 7 | 0 | 188.1 / 146.5 / 110.4 | 0 | 16 |
| 2026-11-12T23:19 | 3 | 18 | 18 | 1.54 | 2 | 2 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 9 / 9 | 12 | 459,717 | 0 | 0 | 0 | 1 | 3 | 7 | 1 | 192.3 / 148.0 / 110.6 | 2 | 15 |
| 2026-11-12T23:20 | 3 | 15 | 18 | 1.34 | 3 | 3 | 2 | 2,798 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 9 / 9 | 14 | 460,206 | 0 | 0 | 0 | 2 | 3 | 6 | 3 | 190.4 / 147.4 / 110.5 | 0 | 0 |
| 2026-11-12T23:21 | 3 | 16 | 16 | 1.33 | 0 | 0 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 9 / 9 | 12 | 499,198 | 0 | 0 | 0 | 1 | 3 | 8 | 0 | 185.9 / 145.8 / 110.3 | 9 | 16 |
| 2026-11-12T23:22 | 3 | 17 | 17 | 1.35 | 1 | 1 | 1 | 8,950 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 8 / 8 | 12 | 459,207 | 0 | 0 | 0 | 2 | 3 | 6 | 1 | 186.3 / 145.9 / 110.3 | 15 | 15 |
| 2026-11-12T23:23 | 3 | 12 | 16 | 1.34 | 0 | 0 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 9 / 9 | 11 | 459,840 | 0 | 0 | 0 | 2 | 3 | 6 | 0 | 184.2 / 145.2 / 110.2 | 0 | 8 |
| 2026-11-12T23:24 | 3 | 77 | 57 | 17.70 | 78 | 43 | 49 | 266,629 | 0 | 0 / 0 | 3 / 3 | 3 / 3 | 9 / 9 | 12 | 433,583 | 0 | 0 | 0 | 0 | 3 | 5 | 6 | 227.3 / 158.3 / 111.9 | 89 | 94 |
| 2026-11-12T23:25 | 3 | 58 | 52 | 16.03 | 43 | 38 | 30 | 266,629 | 0 | 0 / 0 | 4 / 4 | 2 / 2 | 8 / 8 | 9 | 432,368 | 1 | 0 | 0 | 0 | 2 | 2 | 5 | 222.2 / 157.0 / 111.8 | 48 | 46 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.
