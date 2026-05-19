# Tasks

Active work. Update as items are completed and new work is identified.

## Sprint / Iteration

**Range:** 2026-05-19 to [open]
**Goal:** Validate Tier 1 visually; line up Tier 2 Expressive layer for execution

## In Progress

- [ ] (none — awaiting user review of T1 on Vercel)

## Up Next

- [ ] Push current main + verify Vercel deploy of T2 expressive layer — XS
- [ ] Add `public/og-cover.jpg` (1200×630) for OpenGraph + Twitter card — XS (user-supplied)
- [ ] Update README.md to mention Architect design system + `<Frame>` component — S
- [ ] Re-verify About page bio copy with user (current text was migrated) — S

## Blocked

- [ ] (none)

## Recently Completed

- [x] Architect redesign Tier 2 (Expressive): Lenis smooth scroll, grain, ambient gradient, char-by-char hero, marquee, scroll-draw frames, color-flood images, 3D tilt, reactive text, View Transitions curtain — 2026-05-19
- [x] Architect redesign Tier 1: design tokens, type scale, Frame component, 4 page rewrites, metadataBase fix — 2026-05-19
- [x] Real project screenshots (logo/portrait/character art) pulled from each project domain — 2026-05-19
- [x] New About page portrait + cleanup of 7 orphaned `public/` images — 2026-05-19
- [x] Next.js bump 15.1.7 → 15.5.18 (cleared Vercel CVE advisory) — 2026-05-19
- [x] Full minimal-dark-editorial redesign + project lineup refresh — 2026-05-19
- [x] Removed AI Augmented Development section from home — 2026-05-19
- [x] Added "GoHighLevel CRM Development" under new "Platforms & CRM" skill group — 2026-05-19
- [x] Removed blog page + Medium RSS API + rss-parser / nodemailer deps — 2026-05-19
- [x] Generated `CODE_MAP.md` + 4 companion structural docs — 2026-05-19
- [x] Scaffolded `docs/ai/*` and `llms.txt` — 2026-05-19

## Bugs

- [ ] OG image `/og-cover.jpg` returns 404 (referenced but not provided) — P3

## Tech Debt

- [ ] `framer-motion` imported both directly (about/projects/contact) and via `MotionDiv` wrapper (home/projects) — minor inconsistency
- [ ] Hardcoded social URLs (GitHub/LinkedIn/Cal.com) — fine for now; revisit if rebrand happens
- [ ] Project image paths mix `.jpg` (Rooted Legacy) and `.webp` (Reality Saving, The Motions) — fine functionally; cosmetic inconsistency
