OBSERVATION

Not scored. No payment of ours in pre-run 16: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# RETURN, desk, pre-run 16

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

RETURN is families only with our heavy lane at N=0 (the drain), 12 whole minutes, the last stretch before the families stop. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r300 (families 5–7) 300 sompi/gram on the desk's private node, esc (families 8–16) 150 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r300 (300) | esc (duel, start 150) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-13T00:20 | 0 / 100 | 156 | 157 | 426 | - / - | 0 | 0 | - / - | - | - | 18,733 | 233.9 |
| 2026-11-13T00:21 | 0 / 100 | 145 | 152 | 415 | - / - | 0 | 0 | - / - | - | - | 18,670 | 222.1 |
| 2026-11-13T00:22 | 0 / 100 | 152 | 144 | 403 | - / - | 0 | 0 | - / - | - | - | 18,648 | 217.7 |
| 2026-11-13T00:23 | 0 / 100 | 142 | 155 | 402 | - / - | 0 | 0 | - / - | - | - | 18,613 | 221.2 |
| 2026-11-13T00:24 | 0 / 100 | 162 | 163 | 433 | - / - | 0 | 0 | - / - | - | - | 18,582 | 219.2 |
| 2026-11-13T00:25 | 0 / 100 | 152 | 158 | 418 | - / - | 0 | 0 | - / - | - | - | 18,537 | 209.3 |
| 2026-11-13T00:26 | 0 / 100 | 144 | 141 | 398 | - / - | 0 | 0 | - / - | - | - | 18,534 | 217.4 |
| 2026-11-13T00:27 | 0 / 100 | 138 | 149 | 408 | - / - | 0 | 0 | - / - | - | - | 18,495 | 208.5 |
| 2026-11-13T00:28 | 0 / 100 | 146 | 148 | 403 | - / - | 0 | 0 | - / - | - | - | 18,467 | 238.1 |
| 2026-11-13T00:29 | 0 / 100 | 148 | 145 | 392 | - / - | 0 | 0 | - / - | - | - | 18,418 | 223.2 |
| 2026-11-13T00:30 | 0 / 100 | 149 | 146 | 394 | - / - | 0 | 0 | - / - | - | - | 18,422 | 217.9 |
| 2026-11-13T00:31 | 0 / 100 | 149 | 151 | 409 | - / - | 0 | 0 | - / - | - | - | 18,372 | 228.2 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R300 hops (300) | Esc hops (duel, start 150) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-13T00:20 | 4,311 | 0 | 156 | 157 | 426 | 3,572 | 389 | 2 | 434 | 20 | kept pace |
| 2026-11-13T00:21 | 4,175 | 0 | 145 | 152 | 415 | 3,464 | 353 | 1 | 500 | 19 | kept pace |
| 2026-11-13T00:22 | 4,235 | 0 | 152 | 144 | 403 | 3,536 | 384 | 0 | 332 | 20 | kept pace |
| 2026-11-13T00:23 | 4,468 | 0 | 142 | 155 | 402 | 3,769 | 372 | 1 | 654 | 19 | kept pace |
| 2026-11-13T00:24 | 4,326 | 0 | 162 | 163 | 433 | 3,568 | 369 | 1 | 514 | 20 | kept pace |
| 2026-11-13T00:25 | 4,225 | 0 | 152 | 158 | 418 | 3,498 | 352 | 1 | 530 | 20 | kept pace |
| 2026-11-13T00:26 | 4,232 | 0 | 144 | 141 | 398 | 3,549 | 382 | 0 | 485 | 20 | kept pace |
| 2026-11-13T00:27 | 4,240 | 0 | 138 | 149 | 408 | 3,545 | 351 | 1 | 527 | 20 | kept pace |
| 2026-11-13T00:28 | 4,212 | 0 | 146 | 148 | 403 | 3,515 | 358 | 2 | 668 | 19 | kept pace |
| 2026-11-13T00:29 | 4,230 | 0 | 148 | 145 | 392 | 3,545 | 352 | 1 | 324 | 20 | kept pace |
| 2026-11-13T00:30 | 4,211 | 0 | 149 | 146 | 394 | 3,522 | 346 | 1 | 405 | 20 | kept pace |
| 2026-11-13T00:31 | 4,300 | 0 | 149 | 151 | 409 | 3,591 | 387 | 0 | 385 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R300 (families 5–7, desk private node): 300 sompi/gram per hop. Esc (families 8–16, desk private node): 150 sompi/gram per hop. In pre-run 16 that rate is on the hop's node-side mass (kit21): the builder is asked for a bill rate on its own mass so that fee / node mass is the tier's rate.

| Tier | Node rate as built, median (min–max) | Bill rate, median | Node mass, median (min–max) | Node rate in the desk mempool, lowest–highest (probe) |
|---|---|---:|---|---|
| floor (100) | 100.16 (100–100.32) | 313 | 40,740 (40,377–42,183) | - |
| r300 (300) | 300.17 (300–300.32) | 937 | 40,743 (40,403–42,311) | - |
| esc (150) | 150.15 (150–150.32) | 469 | 40,722 (40,383–42,181) | - |

Node rate as built is kit21's fee / node mass (rusty-kaspa v2.1.0 storage mass with UTXO plurality, or compute or transient/2 if larger). In the desk mempool the probe divides the node's fee by the larger of the storage and compute mass the node reports.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 9 (364), 10 (305), 11 (299), 8 (277), 12 (273), 7 (236), 13 (232), 6 (209), 5 (164), 14 (162), 4 (159), 15 (118), and 15 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R300 OK / att / rate rej / full rej / waiting | Esc OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|
| 2026-11-13T00:20 | 0 | 0 | 0 | 0 | 0 | 155 / 351 / 0 / 0 / 4 | 157 / 281 / 0 / 0 / 3 | 426 / 833 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-13T00:21 | 0 | 0 | 0 | 0 | 0 | 146 / 347 / 0 / 0 / 5 | 152 / 282 / 0 / 0 / 3 | 415 / 816 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-13T00:22 | 0 | 0 | 0 | 0 | 0 | 152 / 345 / 0 / 0 / 5 | 144 / 272 / 0 / 0 / 3 | 403 / 809 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-13T00:23 | 0 | 0 | 0 | 0 | 0 | 142 / 345 / 0 / 0 / 5 | 155 / 280 / 0 / 0 / 3 | 402 / 812 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-13T00:24 | 0 | 0 | 0 | 0 | 0 | 160 / 349 / 0 / 0 / 3 | 163 / 289 / 0 / 0 / 3 | 432 / 825 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-13T00:25 | 0 | 0 | 0 | 0 | 0 | 154 / 346 / 0 / 0 / 5 | 158 / 288 / 0 / 0 / 3 | 419 / 823 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-13T00:26 | 0 | 0 | 0 | 0 | 0 | 144 / 347 / 0 / 0 / 6 | 141 / 284 / 0 / 0 / 3 | 398 / 819 / 0 / 0 / 10 | 0 | 0 | yes |
| 2026-11-13T00:27 | 0 | 0 | 0 | 0 | 0 | 138 / 340 / 0 / 0 / 5 | 146 / 280 / 0 / 0 / 0 | 406 / 825 / 0 / 0 / 7 | 0 | 0 | yes |
| 2026-11-13T00:28 | 0 | 0 | 0 | 0 | 0 | 146 / 341 / 0 / 0 / 5 | 150 / 280 / 0 / 0 / 2 | 404 / 814 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-13T00:29 | 0 | 0 | 0 | 0 | 0 | 148 / 346 / 0 / 0 / 5 | 146 / 277 / 0 / 0 / 3 | 393 / 804 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-13T00:30 | 0 | 0 | 0 | 0 | 0 | 148 / 343 / 0 / 0 / 4 | 146 / 281 / 0 / 0 / 3 | 394 / 798 / 0 / 0 / 9 | 0 | 0 | yes |
| 2026-11-13T00:31 | 0 | 0 | 0 | 0 | 0 | 150 / 349 / 0 / 0 / 5 | 151 / 280 / 0 / 0 / 3 | 406 / 808 / 0 / 0 / 6 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 16 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621937393 | 0 | 0 | 0 | 33 |
| 5 | yes | 621937393 | 0 | 0 | 0 | 36 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 1783 of 1783 | 1363 | 2455 |
| r300 | 1809 of 1809 | 1021 | 1513 |
| esc | 4898 of 4898 | 1137 | 1749 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R300 in mempool / ready | Esc in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r300 | Template: esc | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-13T00:20 | 3 | 18,733 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 233.9 / 159.9 / 112.1 | 18,718 | 18,723 |
| 2026-11-13T00:21 | 3 | 18,670 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 222.1 / 156.9 / 111.8 | 18,671 | 18,680 |
| 2026-11-13T00:22 | 3 | 18,648 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 217.7 / 155.8 / 111.6 | 18,629 | 18,642 |
| 2026-11-13T00:23 | 3 | 18,613 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 221.2 / 156.7 / 111.7 | 18,605 | 18,611 |
| 2026-11-13T00:24 | 3 | 18,582 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 219.2 / 156.2 / 111.7 | 18,601 | 18,593 |
| 2026-11-13T00:25 | 3 | 18,537 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 209.3 / 153.4 / 111.3 | 18,540 | 18,547 |
| 2026-11-13T00:26 | 3 | 18,534 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 217.4 / 155.7 / 111.6 | 18,534 | 18,538 |
| 2026-11-13T00:27 | 3 | 18,495 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 208.5 / 153.1 / 111.3 | 18,481 | 18,487 |
| 2026-11-13T00:28 | 2 | 18,467 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 238.1 / 160.9 / 112.2 | 18,465 | 18,471 |
| 2026-11-13T00:29 | 3 | 18,418 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 223.2 / 157.2 / 111.8 | 18,418 | 18,426 |
| 2026-11-13T00:30 | 3 | 18,422 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 217.9 / 155.8 / 111.6 | 18,441 | 18,450 |
| 2026-11-13T00:31 | 3 | 18,372 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 228.2 / 158.5 / 111.9 | 18,359 | 18,357 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.
