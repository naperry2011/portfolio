# Tasks

Active work. Update as items are completed and new work is identified.

## Sprint / Iteration

**Range:** 2026-05-19 to [open]
**Goal:** Finish redesign polish — supply real assets, fix small content drift

## In Progress

- [ ] (none)

## Up Next

- [ ] Drop screenshots at `public/projects/rooted-legacy.jpg`, `public/projects/reality-saving.jpg`, `public/projects/the-motions.jpg` (~1600×1200, ~4:3) — XS
- [ ] Add `public/og-cover.jpg` (1200×630) for OpenGraph + Twitter card — XS
- [ ] Update README.md to reflect Next.js 15 + the new four-route shape + drop `NEXT_PUBLIC_MEDIUM_USERNAME` — S
- [ ] Re-verify About page bio copy with user (current text was migrated from prior version) — S

## Blocked

- [ ] (none)

## Recently Completed

- [x] Architect redesign Tier 1: design tokens, type scale, Frame component, 4 page rewrites, metadataBase fix — 2026-05-19
- [x] Full visual redesign: minimal dark editorial system (charcoal + Fraunces serif + muted gold accent) — 2026-05-19
- [x] Projects page rewrite with three live projects (Rooted Legacy, Reality Saving, The Motions) — 2026-05-19
- [x] Removed AI Augmented Development section from home — 2026-05-19
- [x] Added "GoHighLevel CRM Development" under new "Platforms & CRM" skill group — 2026-05-19
- [x] Removed blog page + Medium RSS API + rss-parser / nodemailer deps — 2026-05-19
- [x] Generated `CODE_MAP.md` + 4 companion structural docs — 2026-05-19
- [x] Scaffolded `docs/ai/*` and `llms.txt` — 2026-05-19

## Bugs

- [ ] Project image paths return 404 until screenshots are dropped in `public/projects/` — P2
- [ ] OG image `/og-cover.jpg` returns 404 — P3

## Tech Debt

- [ ] `framer-motion` imported both directly (about/contact/projects) and via `MotionDiv` wrapper (home/projects) — minor inconsistency
- [ ] Hardcoded social URLs (GitHub/LinkedIn/Cal.com) — fine for now; revisit if rebrand happens
