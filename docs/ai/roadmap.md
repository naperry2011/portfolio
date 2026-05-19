# Roadmap

Forward-looking direction. Pair with `tasks.md` (active work) and `memory.md` (history).

## Vision

Cyberlounge.net is Nicholas Perry's personal portfolio and lead-gen surface for software and cloud development consulting — a fast, animated, cyberpunk-themed site that showcases projects, surfaces Medium writing, and routes prospects to a Cal.com booking flow.

## Current Focus

**Theme:** Maintenance + content freshness
**Goals:**
1. Keep deployed site stable on Vercel
2. Keep Medium blog feed rendering correctly
3. Tighten documentation drift (README references stale stack version + unused env var)

## Now

- [No tracked initiative in flight]

## Next

- Reconcile README with current stack (Next.js 15, not 14) and remove the unused `NEXT_PUBLIC_MEDIUM_USERNAME` env var reference (or wire it into the route handler)
- Decide whether to remove `nodemailer` deps or build a real contact form behind them
- Add `/privacy` and `/terms` routes, or remove the footer links

## Later

- Replace hardcoded Medium username in `src/app/api/medium-posts/route.ts` with env var
- Add a `public/blog/default-thumbnail.jpg` (currently referenced but missing)
- Caching layer in front of Medium RSS fetch (currently hits Medium on every request)

## Recently Completed

- Repository structural indexing (CODE_MAP + 4 companion docs) — 2026-05-19
- AI context scaffold (`docs/ai/*`, `llms.txt`) — 2026-05-19

## Deferred / Cancelled

- [None recorded]
