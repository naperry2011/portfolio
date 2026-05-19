# Project Memory

Running history of what's been built and current state. Update after major changes.

## Current State

**Status:** Active Development (personal portfolio site, deployed to Vercel)
**Last Updated:** 2026-05-19
**Version:** main (post-redesign)

### What's Working
- Next.js 15 App Router site with 4 page routes: `/`, `/about`, `/projects`, `/contact`
- Persistent chrome (Navbar + Footer) wrapping all routes via `src/app/layout.tsx`
- Minimal dark editorial design system: near-black background, Fraunces serif headings, Geist body, single muted-gold accent (`#c9a96a`)
- All four routes prerender as static at build time
- Projects page shows three live external projects: Rooted Legacy, Reality Saving, The Motions

### Known Issues
- Project images at `public/projects/{rooted-legacy,reality-saving,the-motions}.jpg` are referenced but not yet present — user supplies screenshots
- OpenGraph image `/og-cover.jpg` referenced in layout metadata but not present yet
- `metadataBase` not set in layout — Next.js warns during build (cosmetic only)

### In Progress
- (none tracked in repo)

## Implementation History

### 2026-05-19 — Portfolio redesign to minimal dark editorial
**What was built:** Full visual redesign away from cyberpunk neon. New design tokens (charcoal/gold), Fraunces serif headings, restyled Navbar/Footer wordmark (no brackets/neon), full rewrite of `/`, `/projects`, `/about`, `/contact`. Blog page + Medium RSS API removed entirely. AI Augmented Development section removed from home. Added "GoHighLevel CRM Development" under new "Platforms & CRM" skill group. Removed dead deps (rss-parser, nodemailer, @types/nodemailer).
**Why:** User wanted a professional, mature aesthetic and refreshed project lineup.
**Files affected:** `src/app/{layout,page,globals.css}`, `src/app/{about,projects,contact}/page.tsx`, `src/components/{Navbar,Footer}.tsx`, `tailwind.config.ts`, `package.json`. Deleted: `src/app/blog/`, `src/app/api/`.

### 2026-05-19 — Structural indexing pass
**What was built:** `CODE_MAP.md`, `ENTRY_POINTS.md`, `DATA_FLOW.md`, `IMPORT_GRAPH_SUMMARY.md`, `FEATURE_BOUNDARIES.md` at repo root.
**Why:** Enable minimal-context AI operations.

### 2025 — Initial portfolio build
**What was built:** Original cyberpunk-themed Next.js portfolio (now superseded by the 2026-05-19 redesign).

## Architecture Evolution

Single Next.js 15 App Router project, deployed to Vercel. React 19, TypeScript, Tailwind 3, Framer Motion 12. No API routes, no database, no auth, no middleware. All content is hardcoded in page components; all four routes are static. See `docs/ai/architecture.md` and root-level `CODE_MAP.md` / `DATA_FLOW.md` for detail.

## Lessons Learned

- `framer-motion`'s `motion.*` cannot be used directly inside a server component, so `src/components/MotionWrapper.tsx` re-exports `motion.div` as `MotionDiv` behind a `'use client'` boundary.
- `next/font/google` rejects an explicit `weight` array when `axes` is specified for a variable font (Fraunces in this case). The fix is to omit `weight` so the variable axis takes over.
- Tailwind theme tokens that point at CSS variables (e.g. `background: "var(--background)"`) must be defined in both `tailwind.config.ts` *and* `src/app/globals.css` — neither file is authoritative alone.
