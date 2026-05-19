# Architecture

System design at a glance. Pair with root-level `CODE_MAP.md`, `DATA_FLOW.md`, `ENTRY_POINTS.md`, `FEATURE_BOUNDARIES.md`.

## System Overview

Cyberlounge.net is a personal portfolio site built on Next.js 15 App Router. It serves 4 fully-static page routes. No persistent storage, no API routes, no auth, no background jobs.

**Style:** Monolith (Next.js single deployable)
**Hosting:** Vercel

## Core Components

### Root Layout
- **Responsibility:** HTML shell, font variables (Geist sans, Geist Mono, Fraunces serif via `next/font/google`), global CSS, persistent Navbar + Footer, page metadata / OG / Twitter cards, `metadataBase`
- **Tech:** Next.js Server Component
- **Key files:** `src/app/layout.tsx`, `src/app/globals.css`
- **Depends on:** `src/components/Navbar.tsx`, `src/components/Footer.tsx`

### Navigation Chrome
- **Responsibility:** Top nav (active-route accent underline + mobile menu) and footer (title-block treatment, quick links, socials, copyright)
- **Tech:** React client components
- **Key files:** `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- **Depends on:** `next/link`, `next/navigation`, `react-icons`

### Frame Component (Architect title-block motif)
- **Responsibility:** Reusable architectural drawing block — top hairline rule, `topLeft`/`topRight` corner-metadata slots, content body, bottom hairline rule, `bottomLeft`/`bottomRight` corner-metadata slots. The recurring visual signature of the redesign.
- **Tech:** Next.js Server Component (no `'use client'`)
- **Key file:** `src/components/Frame.tsx`
- **Used by:** All four page segments (`/`, `/about`, `/projects` uses inline frames not the component, `/contact` uses inline)

### Page Segments
- **Responsibility:** Page-specific content + animations for `/`, `/about`, `/projects`, `/contact`. Each page opens with a top title-block strip (page number, kind, rev date) and uses framed sections for major content blocks.
- **Tech:** Mix of server and client components (about/projects/contact are `'use client'` because of framer-motion entry animations; home is server)
- **Key files:** `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/contact/page.tsx`
- **Depends on:** `@/components/Frame`, `@/components/MotionWrapper`, `framer-motion`, `react-icons`, `next/image`

### Motion Wrapper
- **Responsibility:** Re-export `framer-motion`'s `motion.div` as `MotionDiv` from a `'use client'` module so server components can compose animated divs
- **Key files:** `src/components/MotionWrapper.tsx`

## Design System

Source of truth: CSS variables in `src/app/globals.css`, mirrored as Tailwind theme tokens in `tailwind.config.ts`. **Both files must be kept in sync** when renaming or adjusting tokens.

**Palette (Architect Tier 1):**
- `--background`: `#0a0a0c` (near-black, slightly cooler than Minimal Dark Editorial)
- `--ink`: `#f4f0e8` (paper-cream — body & headings; warms the whole page)
- `--muted`: `#8a8a90` (secondary text)
- `--rule`: `#1c1c20` (hairlines, frame strokes)
- `--surface`: `#111114` (elevated cards)
- `--accent`: `#b8966d` (oxidized brass — single chromatic accent; hover/active only)
- `--hero-opsz`: `144` (Fraunces variable axis target; Tier 2 will scroll-animate this)

**Typography:**
- Display: Fraunces (variable serif, opsz axis) via `next/font/google` → `--font-serif`
- Body / UI: Geist sans → `--font-sans`
- Mono (labels, corner metadata): Geist Mono → `--font-mono`
- Type scale: strict 1.250 (major third) ratio, with `9xl` (168px) added for kinetic hero

**Utilities** (defined in `globals.css`):
- `.label` — uppercase mono small-caps (corner metadata, eyebrows). Letter-spacing `0.16em`.
- `.label-ink` — modifier; promotes a `.label` from muted to ink color
- `.rule` — 1px hairline in `--rule` color, full width of parent
- `.hero-opsz` — applies `font-variation-settings: "opsz" var(--hero-opsz)` to a serif heading
- `.link-accent` — accent-colored link with hover opacity fade

## Data Flow (Critical Path)

1. Browser → Vercel edge → Next.js App Router
2. All 4 routes prerendered as static at build time
3. RootLayout renders → Navbar + page segment + Footer
4. Outbound clicks (project cards, contact CTAs) navigate to external URLs

## Data Stores

- None.

## External Integrations

- **Cal.com** — Booking link on contact page (`cal.com/cybercap2011`)
- **Live project sites** (rooted-legacy-phi, reality-saving, the-motions) — Outbound links only
- **GitHub / LinkedIn / Medium / mailto** — Outbound profile links
- **Vercel** — Hosting + build pipeline

## Security Boundaries

- All routes are public; no auth model.
- No outbound network call from server code.
- No secrets in repo.

## Known Constraints / Trade-offs

- OG image (`/og-cover.jpg`) referenced but not yet provided.
- Site is fully static — any future dynamic content (analytics, form submissions) would require introducing a route handler.
- `framer-motion` is imported both directly (about/projects/contact use `motion.*`) and via the `MotionDiv` wrapper (home, projects) — minor inconsistency since the wrapping pattern is only useful when the *parent* is a server component.

## Planned (Tier 2)

The implementation plan at `docs/plans/2026-05-19-architect-redesign-implementation.md` describes the Expressive layer (Bundle B) — ten artistic moves to be layered on top of the current foundation. New dep on landing: Lenis (~12kb).
