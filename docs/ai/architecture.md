# Architecture

System design at a glance. Pair with root-level `CODE_MAP.md` (file map), `DATA_FLOW.md` (system flows), `ENTRY_POINTS.md`, `FEATURE_BOUNDARIES.md`.

## System Overview

Cyberlounge.net is a personal portfolio site built on Next.js 15 App Router. It serves 5 static-leaning page routes plus a single dynamic API route that proxies a Medium RSS feed. No persistent storage, no auth, no background jobs.

**Style:** Monolith (Next.js single deployable)
**Hosting:** Vercel

## Core Components

### Root Layout
- **Responsibility:** HTML shell, global font (Geist), global CSS, persistent Navbar + Footer, page metadata / OpenGraph / Twitter cards
- **Tech:** Next.js Server Component
- **Key files:** `src/app/layout.tsx`, `src/app/globals.css`
- **Depends on:** `src/components/Navbar.tsx`, `src/components/Footer.tsx`

### Navigation Chrome
- **Responsibility:** Top nav (with active-route highlighting + mobile menu) and footer (quick links, socials, copyright)
- **Tech:** React client components
- **Key files:** `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- **Depends on:** `next/link`, `next/navigation`, `react-icons`

### Page Segments
- **Responsibility:** Page-specific content + animations for `/`, `/about`, `/projects`, `/blog`, `/contact`
- **Tech:** Mix of server and client components; blog uses `useEffect`/`useState` for the Medium feed
- **Key files:** `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/blog/page.tsx`, `src/app/contact/page.tsx`
- **Depends on:** `@/components/MotionWrapper`, `framer-motion`, `react-icons`, `next/image`

### Motion Wrapper
- **Responsibility:** Re-export `framer-motion`'s `motion.div` as `MotionDiv` from a `'use client'` module so server components can compose animated divs
- **Key files:** `src/components/MotionWrapper.tsx`

### Medium Posts API
- **Responsibility:** Fetch `https://medium.com/feed/@naperry2011`, strip HTML, build 150-char excerpts, extract thumbnails, return JSON
- **Tech:** Next.js Route Handler, `rss-parser`
- **Key files:** `src/app/api/medium-posts/route.ts`
- **Depends on:** `rss-parser`, `next/server`

## Data Flow (Critical Path)

1. Browser → Vercel edge → Next.js App Router
2. RootLayout renders → Navbar + page segment + Footer
3. For `/blog`: client component mounts → `fetch('/api/medium-posts')`
4. Route handler → `rss-parser.parseURL` → Medium RSS feed
5. Route handler shapes payload → JSON → browser → React render

## Data Stores

- None. No database, cache, KV, or object store.

## External Integrations

- **Medium RSS** — Source of blog content (`https://medium.com/feed/@naperry2011`)
- **Cal.com** — Booking link on contact page (`cal.com/cybercap2011`)
- **GitHub / LinkedIn / Medium / mailto** — Outbound profile links
- **Vercel** — Hosting + build pipeline

## Security Boundaries

- All routes are public; no auth model.
- Only outbound network call from server code is Medium RSS. No secrets in repo.
- `NEXT_PUBLIC_MEDIUM_USERNAME` is documented in README but not consumed by current code.

## Known Constraints / Trade-offs

- Medium RSS fetch has no caching — every blog page load reaches out to medium.com.
- Username is hardcoded in the API route; redeploys are required to change it.
- `nodemailer` is a declared but unused dependency — supply-chain footprint without runtime use.
- Footer links to `/privacy` and `/terms` which do not exist as routes (404).
