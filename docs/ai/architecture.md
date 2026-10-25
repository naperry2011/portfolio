# Architecture

System design at a glance. Pair with root-level `CODE_MAP.md`, `DATA_FLOW.md`, `ENTRY_POINTS.md`, `FEATURE_BOUNDARIES.md`. Current design: quest-log notebook (ADR-007).

## System Overview

Cyberlounge.net is Nicholas Perry's personal portfolio, built on Next.js 15 App Router. It serves 4 fully static page routes. No persistent storage, no API routes, no auth, no background jobs.

**Style:** Monolith (Next.js single deployable)
**Hosting:** Vercel

## Core Components

### Root Layout
- **Responsibility:** HTML shell, font variables (Dela Gothic One, DotGothic16, Zen Kaku Gothic New via `next/font/google`), global CSS, graph-paper `<body>`, persistent Navbar + Footer, smooth scroll, page metadata / OG / Twitter cards, `metadataBase`
- **Tech:** Next.js Server Component
- **Key files:** `src/app/layout.tsx`, `src/app/globals.css`
- **Depends on:** `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/SmoothScroll.tsx`

### Navigation Chrome
- **Responsibility:** Top nav (pixel-font links QUESTS / QUEST LOG / PLAYER / CONTACT, ▶ cursor on the active route, MENU/CLOSE mobile menu) and footer (black strip with copyright and external links)
- **Tech:** Navbar is a client component (`usePathname`, `useState`); Footer is a server component
- **Key files:** `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- **Depends on:** `next/link`, `next/navigation`

### Project Data
- **Responsibility:** Single source of truth for every project shown on the site: `apps` (main quests), `sideStory` (Beats & Backlog), `sites` (quest log). Each entry carries status (label + tone), blurb, longer description, meta line, image, alt text and links.
- **Key file:** `src/data/projects.ts`
- **Used by:** Home and Projects pages, `QuestCard`, `QuestLogRow`, `StatusTag` (types)

### Shared UI Components
- **Responsibility:** The building blocks of the quest-log look
  - `Panel`: comic panel box with the 4px ink border; variants plain / tone / speed / ink
  - `StatusTag`: pixel-font status label; tone active (red), cleared (green), neutral (grey)
  - `QuestCard`: app card (store graphic, title, status, blurb or description, meta + links)
  - `QuestLogRow`: site row (screenshot, title link, blurb or description, status)
  - `SectionHeading`: display heading with pixel note and thick ink rule
- **Tech:** Server components
- **Key files:** `src/components/{Panel,StatusTag,QuestCard,QuestLogRow,SectionHeading}.tsx`

### Page Segments
- **Responsibility:** Page-specific layout and copy for `/` (quests), `/projects` (quest log), `/about` (player profile) and `/contact` (CONTINUE? menu)
- **Tech:** All server components; each non-home page exports its own `metadata`
- **Key files:** `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`
- **Depends on:** `src/data/projects.ts` (home, projects), shared UI components, `next/image`, `next/link`

### Smooth Scroll and Route Transitions
- **Responsibility:** Lenis smooth scrolling (client component mounted in the layout) and the View Transitions curtain wipe between routes (CSS in `globals.css`, enabled by `experimental.viewTransition` in `next.config.ts`)
- **Key files:** `src/components/SmoothScroll.tsx`, `src/app/template.tsx`, `src/app/globals.css`, `next.config.ts`

## Design System

Source of truth: CSS variables in `src/app/globals.css`, mirrored as Tailwind theme colors in `tailwind.config.ts`. **Both files must be kept in sync** when renaming or adjusting tokens.

**Palette:**
- `--background`: `#fbfbf9` (paper)
- `--ink`: `#111111` (text, panel borders, black panels)
- `--muted`: `#55555f` (secondary labels)
- `--body`: `#33333b` (long-form body text)
- `--rule`: `#b9bfd0` (dashed row dividers)
- `--grid`: `#e3e8f4` (graph-paper lines)
- `--surface`: `#ffffff` (panel fill)
- `--accent`: `#d42a20` (manga red: active statuses, ▶ cursor, hovers)
- `--cleared`: `#1a6b33` (CLEARED statuses)
- `--tone-dot`: `#c9c9c9` (screentone dots)

**Typography** (all via `next/font/google`, non-variable, explicit weights):
- Display: Dela Gothic One → `--font-display` → `font-display`
- Pixel labels and menus: DotGothic16 → `--font-pixel` → `font-pixel`
- Body: Zen Kaku Gothic New (400/500/700) → `--font-sans` → `font-sans`
- Japanese characters (the katakana in the nav) fall back to the system font: none of these fonts ship a Japanese subset through `next/font`.
- The Tailwind `fontSize` map keeps the 1.250 scale from the previous design; big headings use `clamp()` arbitrary values so they fit phone widths.

**Utilities** (defined in `globals.css`):
- `.paper`: graph-paper background (24px grid)
- `.tone`: manga screentone (7px dot pattern)
- `.speed`: manga speed lines radiating from the left third
- `.panel`: 4px ink border (don't mix with Tailwind border overrides on the same element; use `border-4 border-ink` classes instead)

## Data Flow (Critical Path)

1. Browser → Vercel edge → Next.js App Router
2. All 4 routes prerendered as static at build time
3. RootLayout renders → SmoothScroll + Navbar + page segment + Footer
4. Home and Projects map over `src/data/projects.ts`
5. Outbound clicks (project links, booking, socials) navigate to external URLs

## Data Stores

- None. Project content is a TypeScript module; images live in `public/projects/`.

## External Integrations

- **Cal.com**: booking link (`cal.com/cybercap2011`) on home and contact
- **Live project sites and GitHub repos**: outbound links from `src/data/projects.ts`
- **GitHub / LinkedIn / Medium / mailto**: outbound profile links (footer, contact)
- **Vercel**: hosting + build pipeline

## Security Boundaries

- All routes are public; no auth model.
- No outbound network call from server code.
- No secrets in repo.

## Known Constraints / Trade-offs

- OG image (`/og-cover.jpg`) referenced but not yet provided.
- Site screenshots in `public/projects/*.jpg` are 800px wide; soft when shown large.
- Strong visual theme: new sections need to fit the panel and quest vocabulary.
- Site is fully static. Any future dynamic content (analytics, form submissions) would require a route handler.
