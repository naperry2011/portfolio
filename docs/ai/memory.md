# Project Memory

Running history of what's been built and current state. Update after major changes.

## Current State

**Status:** Active Development (personal portfolio site, deployed to Vercel)
**Last Updated:** 2026-05-19
**Version:** main @ e0aa8e2 — Architect Tier 1 landed

### What's Working
- Next.js 15.5.18 App Router site with 4 page routes: `/`, `/about`, `/projects`, `/contact`
- Architect design system: near-black `#0a0a0c` background, paper-cream `#f4f0e8` ink, oxidized-brass `#b8966d` accent, Fraunces serif display + Geist sans body + Geist Mono labels
- Strict 1.250 major-third type scale (custom Tailwind `fontSize` map, up to `9xl` 168px for hero)
- Reusable `<Frame>` component encapsulating the title-block motif (corner metadata + hairlines) used across all pages
- All four routes prerender as static at build time
- Projects page shows three live external projects with live screenshots: Rooted Legacy (logo), Reality Saving (founder portrait), The Motions (Quake character art) — all pulled directly from each project's Vercel deployment
- About page uses the new black-and-white portrait at `public/profile.jpg`
- `metadataBase` set in layout — no Next build warnings

### Known Issues
- `public/og-cover.jpg` referenced in layout metadata but not present yet — OG/Twitter cards fall back gracefully
- About page bio copy was migrated from the prior version; user may want to refresh

### In Progress
- (none — waiting on user review of T1 before kicking off Tier 2 Expressive layer)

## Implementation History

### 2026-05-19 — Tier 1 Architect redesign foundation
**What was built:** New design tokens (paper-cream ink `#f4f0e8`, oxidized-brass accent `#b8966d`, refined dark background `#0a0a0c`). Strict 1.250 type scale. Reusable `<Frame>` component for the title-block motif. All 4 pages (Home / About / Projects / Contact) rewritten with framed sections, corner metadata, and the architectural "title block" treatment. Navbar and Footer updated for the new palette. `metadataBase` set in layout to silence Next build warning.
**Why:** Position site as "digital architect with defined taste" — visible system, deliberate ratios. Foundation for Tier 2 (Expressive layer).
**Files affected:** `src/app/globals.css`, `tailwind.config.ts`, `src/components/{Frame,Navbar,Footer}.tsx`, `src/app/{layout,page,about,projects,contact}/*.tsx`.

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
- Tailwind theme tokens that point at CSS variables (e.g. `background: "var(--background)"`) must be defined in both `tailwind.config.ts` *and* `src/app/globals.css` — neither file is authoritative alone. Renaming a token requires editing both.
- Vercel flags Next.js CVEs at deploy time but still ships the build. The `Vulnerable version of Next.js detected, please update immediately.` line is a security advisory, not a build failure — bump within the 15.x patch line to clear it.
- Vision-attached images in chat have no filesystem path tools can read from; users must save the file manually before code can reference it.
