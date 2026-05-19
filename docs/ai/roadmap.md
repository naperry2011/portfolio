# Roadmap

Forward-looking direction. Pair with `tasks.md` (active work) and `memory.md` (history).

## Vision

Cyberlounge.net is Nicholas Perry's personal portfolio and lead-gen surface for software and cloud development consulting — a *digital architect with defined taste*. The site itself is the proof: visible system thinking, deliberate ratios, and (planned Tier 2) artistic motion that reads as authored rather than templated.

## Current Focus

**Theme:** Architect redesign — visual review of Tier 1 before kicking off Tier 2 (Expressive layer)
**Goals:**
1. Validate the T1 foundation visually on Vercel (palette, type, title-block motif)
2. Land Tier 2 Bundle B — Lenis smooth scroll, animated grain, ambient gradient, char-by-char hero, marquee, scroll-draw frames, color-flood images, 3D tilt, cursor-reactive type, page-transition curtain
3. Optional Tier 3 polish: Spec view overlay

## Now

- Tier 1 (Architect foundation) shipped on `main`. Awaiting user visual review before T2.

## Next

- Tier 2 Expressive layer (10 artistic moves; plan: `docs/plans/2026-05-19-architect-redesign-implementation.md` tasks 12–22)
- Add `public/og-cover.jpg` (1200×630) for OpenGraph + Twitter card
- README pass to mention Architect design system + Frame component

## Later

- Tier 3 Spec view overlay (the Architect's signature toggle — grid + 8px baseline on demand)
- Consider analytics (Vercel Analytics or Plausible) — currently no instrumentation
- Consider MDX-based local blog under `src/app/blog/[slug]/page.tsx` (only if Nicholas starts writing again)
- Consider contact form (would re-introduce a server action + email provider — `nodemailer` was previously removed)

## Recently Completed

- Architect redesign Tier 1: design tokens, type scale, `<Frame>` component, 4 page rewrites, metadataBase fix — 2026-05-19
- New About page portrait (`public/profile.jpg`) + cleanup of 7 orphaned images — 2026-05-19
- Real project screenshots pulled directly from each project domain — 2026-05-19
- Next.js bumped 15.1.7 → 15.5.18 (cleared Vercel CVE advisory) — 2026-05-19
- Full minimal-dark-editorial redesign + project lineup refresh + blog/API removal — 2026-05-19
- Repository structural indexing (CODE_MAP + 4 companion docs) — 2026-05-19
- AI context scaffold (`docs/ai/*`, `llms.txt`) — 2026-05-19

## Deferred / Cancelled

- `/privacy` and `/terms` pages — no longer linked from anywhere, deferred until needed
- Server-side contact form — was never wired; `nodemailer` removed
- Custom cursor (was originally in T2 plan) — dropped in favor of cursor-following ambient gradient (more cohesive)
- Standalone magnetic CTAs (was originally in T2 plan) — superseded by the broader cursor-reactive type system
