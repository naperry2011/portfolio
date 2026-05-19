# Project Memory

Running history of what's been built and current state. Update after major changes.

## Current State

**Status:** Active Development (personal portfolio site, deployed to Vercel)
**Last Updated:** 2026-05-19
**Version:** main @ 31114d3

### What's Working
- Next.js 15 App Router site with 5 page routes: `/`, `/about`, `/projects`, `/blog`, `/contact`
- Persistent chrome (Navbar + Footer) wrapping all routes via `src/app/layout.tsx`
- Medium RSS proxy at `GET /api/medium-posts` powering the blog page (rss-parser, strips HTML, builds 150-char excerpt, extracts thumbnail from first `<img>`)
- Framer Motion animations across pages via `MotionDiv` client-boundary re-export
- Tailwind-based cyberpunk styling, Geist font, OpenGraph/Twitter meta

### Known Issues
- `nodemailer` and `@types/nodemailer` are declared in `package.json` but unused — no server email path is wired; contact page is link-only (Cal.com + mailto)
- README still says "Next.js 14"; repo is on Next.js 15.1.7
- README references `NEXT_PUBLIC_MEDIUM_USERNAME` env var, but the medium-posts route hardcodes `@naperry2011` in the RSS URL — env var is not actually read
- Default thumbnail fallback `/blog/default-thumbnail.jpg` is referenced but not present in `public/`
- Footer links to `/privacy` and `/terms` routes that don't exist

### In Progress
- (none tracked in repo)

## Implementation History

### 2025 - Initial portfolio build
**What was built:** Next.js App Router scaffold with home/about/projects/blog/contact pages, Medium RSS integration, Tailwind cyberpunk theme.
**Why:** Personal portfolio + lead-gen site for software/cloud consulting (Cyberlounge.net).
**Files affected:** `src/app/*`, `src/components/*`, `public/*`

### 2026-05-19 - Structural indexing pass
**What was built:** `CODE_MAP.md`, `ENTRY_POINTS.md`, `DATA_FLOW.md`, `IMPORT_GRAPH_SUMMARY.md`, `FEATURE_BOUNDARIES.md` at repo root.
**Why:** Enable minimal-context AI operations.
**Files affected:** repo root (docs only)

## Architecture Evolution

Single Next.js 15 App Router project, deployed to Vercel. React 19, TypeScript, Tailwind 3, Framer Motion 12. One server route handler (`/api/medium-posts`) that proxies a Medium RSS feed via `rss-parser`. No database, queue, cache, auth, or middleware. See `docs/ai/architecture.md` and root-level `CODE_MAP.md` / `DATA_FLOW.md` for detail.

## Lessons Learned

- `framer-motion`'s `motion.*` cannot be used directly inside a server component, so `src/components/MotionWrapper.tsx` re-exports `motion.div` as `MotionDiv` behind a `'use client'` boundary — pattern reused by home/projects/blog pages.
- Medium's RSS feed embeds full HTML in `content:encoded`; the route handler strips tags and pulls the first `<img src>` as a thumbnail rather than relying on a dedicated image field.
