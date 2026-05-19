# Architecture Decisions

ADR log. Write entries when a decision is hard to reverse, affects multiple components, or future-you will ask "why did we do it this way?"

---

## ADR-001: Next.js App Router on Vercel

**Date:** 2025 (initial commit)
**Status:** Accepted

**Context**
Need a fast personal portfolio with SSR, image optimization, and zero-ops hosting. Project is solo-maintained, so platform leverage matters more than portability.

**Decision**
Use Next.js 15 (App Router) deployed to Vercel. TypeScript, Tailwind, React 19.

**Consequences**
- **Positive:** Built-in image optimization, font loading (next/font/google), free Vercel hosting tier
- **Negative:** Vercel lock-in for some features (Image, edge runtime if used later)
- **Neutral:** App Router requires `'use client'` boundaries for stateful components

**Alternatives considered**
- Astro — leaner, but framer-motion + React ecosystem is more familiar
- Pages Router — less aligned with React Server Components direction

---

## ADR-002: Client-boundary re-export for Framer Motion

**Date:** 2025
**Status:** Accepted

**Context**
`framer-motion`'s `motion.*` components need a client boundary, but pages that are otherwise server-component-friendly want animated wrappers.

**Decision**
`src/components/MotionWrapper.tsx` declares `'use client'` and re-exports `motion.div` as `MotionDiv`. Pages import `MotionDiv` from `@/components/MotionWrapper` when they can stay as server components.

**Consequences**
- **Positive:** Home/projects pages can keep server semantics while still animating cards
- **Negative:** Two import paths exist (about/contact still import `motion` directly because the whole page is already `'use client'`); pattern is inconsistent
- **Neutral:** Only `motion.div` is wrapped — other motion primitives still require direct import

**Alternatives considered**
- Mark every page `'use client'` — sacrifices SSR semantics
- Wrap all motion primitives — premature for current surface area

---

## ADR-003: Minimal dark editorial design system

**Date:** 2026-05-19
**Status:** Accepted (supersedes the original cyberpunk visual direction)

**Context**
The original portfolio used a cyberpunk aesthetic (neon green/cyan, bracket-wrapped wordmark, grid backgrounds, glow text effects). For a consultancy/portfolio surface, this read as unserious and dated. Goal: present as a mature independent consultant.

**Decision**
Adopt a "minimal dark editorial" system: near-black background (`#0b0b0d`), Fraunces variable serif for display type, Geist sans for body, single muted-gold accent (`#c9a96a`) used sparingly. Remove all neon, gradients, grid backgrounds, and bracket treatments. Keep the Cyberlounge brand name but restyle the wordmark.

**Consequences**
- **Positive:** Coherent, mature visual language; signals craftsmanship; competes with Linear/Vercel/Sentry-tier marketing surfaces
- **Negative:** Less distinctive at a glance; relies on typography and spacing rather than color to differentiate
- **Neutral:** Design tokens are now CSS variables in `globals.css` + Tailwind theme — both must be kept in sync

**Alternatives considered**
- Light corporate / Linear-style — rejected (too generic)
- Dark luxury / monochrome (no chromatic accent) — rejected (too sterile)
- Light + dark toggle — rejected (more work, no clear win)

---

## ADR-004: Remove blog + Medium RSS proxy

**Date:** 2026-05-19
**Status:** Accepted (supersedes ADR-003 from the prior decision log iteration)

**Context**
Blog page fetched a Medium RSS feed via a server-side proxy (`/api/medium-posts`) to bypass CORS. With the redesign, the blog was de-prioritized and the user wanted it gone entirely.

**Decision**
Delete `src/app/blog/`, `src/app/api/medium-posts/`, and uninstall `rss-parser`, `nodemailer`, `@types/nodemailer`.

**Consequences**
- **Positive:** Smaller surface area, smaller dependency footprint, fully static site (no API routes)
- **Negative:** Lose the dynamic blog list; Medium writing is now only reachable via the social link on the contact page
- **Neutral:** If the user later wants a blog, MDX-based static blog under `src/app/blog/[slug]/page.tsx` is a cheaper add than reviving the RSS proxy

**Alternatives considered**
- Keep blog page, cache Medium responses — rejected (not worth the maintenance)
- Migrate to MDX local content — deferred (no current writing pipeline)

---
