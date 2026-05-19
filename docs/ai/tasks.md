# Tasks

Active work. Update as items are completed and new work is identified.

## Sprint / Iteration

**Range:** 2026-05-19 to [open]
**Goal:** Documentation alignment + remove dead surface area

## In Progress

- [ ] (none)

## Up Next

- [ ] Update README.md to reflect Next.js 15 (currently says 14) — XS
- [ ] Decide on `nodemailer` deps: remove or wire up a contact form handler — S
- [ ] Wire `NEXT_PUBLIC_MEDIUM_USERNAME` into `src/app/api/medium-posts/route.ts` (or drop from README) — XS
- [ ] Add `public/blog/default-thumbnail.jpg` fallback image referenced by the route handler — XS
- [ ] Resolve footer `/privacy` and `/terms` links (create pages or remove links) — S

## Blocked

- [ ] (none)

## Recently Completed

- [x] Generate `CODE_MAP.md`, `ENTRY_POINTS.md`, `DATA_FLOW.md`, `IMPORT_GRAPH_SUMMARY.md`, `FEATURE_BOUNDARIES.md` — 2026-05-19
- [x] Scaffold `docs/ai/*` and `llms.txt` — 2026-05-19

## Bugs

- [ ] Footer links to `/privacy` and `/terms` produce 404s — P3
- [ ] Medium thumbnail fallback path `/blog/default-thumbnail.jpg` 404s — P3

## Tech Debt

- [ ] Hardcoded Medium username in API route — Impact: blocks reuse / env-based config
- [ ] No caching on Medium RSS fetch — Impact: every blog page load hits Medium
- [ ] `framer-motion` imported both directly and via `MotionWrapper` — Impact: inconsistent pattern, minor
- [ ] Unused `nodemailer` dependency — Impact: bundle / supply-chain surface
