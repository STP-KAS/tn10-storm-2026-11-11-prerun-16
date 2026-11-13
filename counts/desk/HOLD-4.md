OBSERVATION

Not scored. No payment of ours in pre-run 16: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# HOLD-4, desk, pre-run 16

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

The pinned minute is the first whole UTC minute whose start is at least 3 minutes after HOLD-3's On origin time. In pre-run 16 the desk offered no payment in it and our heavy lane was at N=0 (the drain). The bot sends in it only on a free third public kaspad.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r300 (families 5–7) 300 sompi/gram on the desk's private node, esc (families 8–16) 150 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r300 (300) | esc (duel, start 150) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-13T00:18 | 0 / 100 | 156 | 164 | 434 | - / - | 0 | 0 | - / - | - | - | 18,792 | 213.5 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R300 hops (300) | Esc hops (duel, start 150) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-13T00:18 | 4,361 | 0 | 156 | 164 | 434 | 3,607 | 377 | 1 | 352 | 19 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R300 (families 5–7, desk private node): 300 sompi/gram per hop. Esc (families 8–16, desk private node): 150 sompi/gram per hop. In pre-run 16 that rate is on the hop's node-side mass (kit21): the builder is asked for a bill rate on its own mass so that fee / node mass is the tier's rate.

| Tier | Node rate as built, median (min–max) | Bill rate, median | Node mass, median (min–max) | Node rate in the desk mempool, lowest–highest (probe) |
|---|---|---:|---|---|
| floor (100) | 100.16 (100.01–100.32) | 313 | 40,821 (40,378–41,911) | - |
| r300 (300) | 300.16 (300–300.32) | 940 | 40,835 (40,403–42,126) | - |
| esc (150) | 150.17 (150–150.32) | 470 | 40,818 (40,383–42,085) | - |

Node rate as built is kit21's fee / node mass (rusty-kaspa v2.1.0 storage mass with UTXO plurality, or compute or transient/2 if larger). In the desk mempool the probe divides the node's fee by the larger of the storage and compute mass the node reports.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 13 (367), 11 (362), 12 (335), 14 (308), 15 (303), 10 (292), 9 (239), 16 (205), 8 (168), 17 (145), 7 (120), 6 (103), and 17 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R300 OK / att / rate rej / full rej / waiting | Esc OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---:|---:|---|
| 2026-11-13T00:18 | 0 | 0 | 0 | 0 | 0 | 154 / 345 / 0 / 0 / 3 | 163 / 286 / 0 / 0 / 2 | 432 / 834 / 0 / 0 / 7 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 16 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621929698 | 0 | 0 | 0 | 33 |
| 5 | yes | 621929698 | 0 | 0 | 0 | 36 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 154 of 154 | 1350 | 2350 |
| r300 | 163 of 163 | 896 | 1268 |
| esc | 432 of 432 | 1050 | 1619 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R300 in mempool / ready | Esc in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r300 | Template: esc | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-13T00:18 | 3 | 18,792 | - | - | - | - | - | - | - | - / - | - / - | - / - | - / - | - | - | - | - | - | - | - | - | - | 213.5 / 154.6 / 111.5 | 18,808 | 18,806 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.
