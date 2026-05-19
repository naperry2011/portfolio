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
- **Positive:** Built-in image optimization, font loading (Geist), per-route handlers, free Vercel hosting tier
- **Negative:** Vercel lock-in for some features (Image, edge runtime if used later)
- **Neutral:** App Router requires `'use client'` boundaries for stateful components

**Alternatives considered**
- Astro — leaner, but framer-motion + React ecosystem is more familiar
- Pages Router — older, less aligned with React Server Components direction

---

## ADR-002: Client-boundary re-export for Framer Motion

**Date:** 2025
**Status:** Accepted

**Context**
`framer-motion`'s `motion.*` components need a client boundary, but pages that are otherwise server-component-friendly want animated wrappers.

**Decision**
`src/components/MotionWrapper.tsx` declares `'use client'` and re-exports `motion.div` as `MotionDiv`. Pages import `MotionDiv` from `@/components/MotionWrapper` instead of importing from `framer-motion` directly.

**Consequences**
- **Positive:** Server components can reference animated divs without going fully client
- **Negative:** Two import paths exist (some pages still import `motion` directly); pattern is inconsistent
- **Neutral:** Only `motion.div` is wrapped — other motion primitives still require direct import

**Alternatives considered**
- Mark every page `'use client'` — sacrifices SSR semantics
- Wrap all motion primitives — premature for current surface area

---

## ADR-003: Server-side Medium RSS proxy instead of client fetch

**Date:** 2025
**Status:** Accepted

**Context**
Medium's RSS feed at `medium.com/feed/@<user>` is the only practical way to get blog posts without paid API access. Direct browser fetch is blocked by CORS.

**Decision**
Implement `GET /api/medium-posts` (`src/app/api/medium-posts/route.ts`) that uses `rss-parser` server-side, normalizes items, and returns JSON. Blog page fetches this internal endpoint.

**Consequences**
- **Positive:** Bypasses CORS, lets us shape the payload (excerpt, thumbnail extraction) before it hits the client
- **Negative:** Every blog visit hits Medium with no caching layer
- **Neutral:** Username is currently hardcoded in the route — env var path is unused

**Alternatives considered**
- Static generation at build time — would require redeploys to refresh posts
- Third-party Medium API — gated / paid

---
