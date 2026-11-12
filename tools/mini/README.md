> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Kaspa Testnet-10 only. No id, key, address, host, or port in this folder.

# Mini's second read, pre-run 16

- `mini-runner.mjs`: pre-run 13's Mini counter, pointed at this repo (our heavy lane is other traffic to Mini), with pre-run 16's three cohorts (floor 1–4 fixed 100, r300 5–7 fixed 300, esc 8–16 the duel; node rates) and the observation-only steps. One hop per transaction (lock line (xi)).
- `mini-classify-test.mjs`: offline check of the one-hop-per-transaction fix.
- `mini-dedupe-test.mjs`, `mini-dedupe.mjs`: pre-run 9's dedupe and its offline check, unchanged.
