# Architecture

System design at a glance. Pair with root-level `CODE_MAP.md`, `DATA_FLOW.md`, `ENTRY_POINTS.md`, `FEATURE_BOUNDARIES.md`.

## System Overview

Cyberlounge.net is a personal portfolio site built on Next.js 15 App Router. It serves 4 fully-static page routes. No persistent storage, no API routes, no auth, no background jobs.

**Style:** Monolith (Next.js single deployable)
**Hosting:** Vercel

## Core Components

### Root Layout
- **Responsibility:** HTML shell, font variables (Geist sans, Geist Mono, Fraunces serif), global CSS, persistent Navbar + Footer, page metadata / OG / Twitter cards
- **Tech:** Next.js Server Component
- **Key files:** `src/app/layout.tsx`, `src/app/globals.css`
- **Depends on:** `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `next/font/google`

### Navigation Chrome
- **Responsibility:** Top nav (active-route underline + mobile menu) and footer (quick links, socials, copyright)
- **Tech:** React client components
- **Key files:** `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- **Depends on:** `next/link`, `next/navigation`, `react-icons`

### Page Segments
- **Responsibility:** Page-specific content + animations for `/`, `/about`, `/projects`, `/contact`
- **Tech:** Mix of server and client components; all data hardcoded
- **Key files:** `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/contact/page.tsx`
- **Depends on:** `@/components/MotionWrapper`, `framer-motion`, `react-icons`, `next/image`

### Motion Wrapper
- **Responsibility:** Re-export `framer-motion`'s `motion.div` as `MotionDiv` from a `'use client'` module so server components can compose animated divs
- **Key files:** `src/components/MotionWrapper.tsx`

## Design System

Source of truth: CSS variables in `src/app/globals.css`, mirrored as Tailwind theme tokens in `tailwind.config.ts`.

**Palette:**
- `--background`: `#0b0b0d` (near-black)
- `--surface`: `#141416` (elevated cards)
- `--border`: `#26262b`
- `--foreground`: `#ededed`
- `--muted`: `#9a9a9f`
- `--accent`: `#c9a96a` (muted warm gold — single chromatic accent)

**Typography:**
- Display: Fraunces (variable serif, opsz axis) via `next/font/google` → `--font-serif`
- Body / UI: Geist sans → `--font-sans`
- Monospace (eyebrow labels, code): Geist Mono → `--font-mono`

**Utilities** (defined in `globals.css`):
- `.eyebrow` — small-caps mono label for section headers
- `.divider` — 1px horizontal rule
- `.link-accent` — accent-colored link with hover fade

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

- Project images are referenced (`/projects/*.jpg`) but the user must drop the actual files in `public/projects/`.
- OG image (`/og-cover.jpg`) similarly user-supplied.
- Site is fully static — any future dynamic content (analytics, form submissions) would require introducing a route handler.
