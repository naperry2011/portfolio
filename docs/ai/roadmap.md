# Roadmap

Forward-looking direction. Pair with `tasks.md` (active work) and `memory.md` (history).

## Vision

Cyberlounge.net is Nicholas Perry's personal portfolio and lead-gen surface for software and cloud development consulting — a fast, mature, editorial site that showcases projects, communicates capabilities clearly, and routes prospects to a Cal.com booking flow.

## Current Focus

**Theme:** Post-redesign polish
**Goals:**
1. Get real project screenshots and OG cover image in `public/`
2. Update README + small build-warning fixes
3. Decide what (if anything) goes in the empty `/about` bio spaces

## Now

- [No tracked initiative in flight]

## Next

- Replace placeholder image paths with real screenshots once user supplies them
- Set `metadataBase` in layout to clear the Next.js build warning
- Update README to reflect Next.js 15 + drop blog/Medium env-var references

## Later

- Consider an MDX-based local blog under `src/app/blog/[slug]/page.tsx` (only if user starts writing again)
- Consider analytics (Vercel Analytics or Plausible) — currently no instrumentation
- Consider a contact form (would re-introduce a server action + email provider — `nodemailer` was just removed)

## Recently Completed

- Full visual redesign to minimal dark editorial — 2026-05-19
- Projects page rewrite with three live projects — 2026-05-19
- Blog + Medium API removal — 2026-05-19
- Repository structural indexing (CODE_MAP + 4 companion docs) — 2026-05-19
- AI context scaffold (`docs/ai/*`, `llms.txt`) — 2026-05-19

## Deferred / Cancelled

- `/privacy` and `/terms` pages — no longer linked from anywhere, deferred until needed
- Server-side contact form — was never wired; `nodemailer` removed
