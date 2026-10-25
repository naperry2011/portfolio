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
- **Responsibility:** Single source of truth for every project shown on the site: `apps` (main quests), `sideStory` (Beats & Backlog), `sites` (quest log). Each entry carries status (label + tone), blurb, longer description, meta line, image, alt text, links, `color` (signature color taken from the project's art) and, for apps, `artBg` (the store graphic's background color).
- **Key file:** `src/data/projects.ts`
- **Used by:** Home and Projects pages, `QuestCard`, `QuestLogRow`, `StatusTag` (types)

### Shared UI Components
- **Responsibility:** The building blocks of the quest-log look
  - `Panel`: comic panel box with the 4px ink border; variants plain / tone / sun / speed / ink; optional `style` (used to pass `--c`)
  - `StatusTag`: pixel-font status label; tone active (red), cleared (green), neutral (grey)
  - `QuestCard`: app card (store graphic, title, status, blurb or description, meta + links) with an 8px offset shadow in the project's color. The art area grows into spare card height on the `artBg` color (`object-contain`), so a stretched card shows more art instead of white space.
  - `QuestLogRow`: site row (screenshot, title link, blurb or description, status); 4px colored shadow on the thumbnail and a hover tint mixed from the project's color
  - `SectionHeading`: display heading with pixel note and an XP bar (ink track with a colored fill, `color` prop)
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
- `--sun`: `#ffd23f` (hero dotted panel, NOW PLAYING / STATS labels, Book a call hover)
- `--cobalt`: `#2346d8` (Quest Log XP bar, NOW PLAYING shadow)
- `--lilac`: `#9179a6` (Save History XP bar, portrait shadow)
- `--mint`: `#3fbfae` (stats shadow, Medium hover)
- `--mustard`: `#e3a83a` (Side Story XP bar, Beats & Backlog panels)

**Color per project:** each project's `color` in `src/data/projects.ts` is passed to its component as the CSS custom property `--c` (inline `style`), and Tailwind arbitrary values read it: `shadow-[8px_8px_0_var(--c)]`, `hover:bg-[color-mix(in_srgb,var(--c)_14%,white)]`. Text on colored grounds is always dark ink; colors used behind ink text are light enough to keep 4.5:1. Colors are decoration only, never the sole signal.

**Typography** (all via `next/font/google`, non-variable, explicit weights):
- Display: Dela Gothic One → `--font-display` → `font-display`
- Pixel labels and menus: DotGothic16 → `--font-pixel` → `font-pixel`
- Body: Zen Kaku Gothic New (400/500/700) → `--font-sans` → `font-sans`
- Japanese characters (the katakana in the nav) fall back to the system font: none of these fonts ship a Japanese subset through `next/font`.
- The Tailwind `fontSize` map keeps the 1.250 scale from the previous design; big page headings use `clamp()` arbitrary values so they fit phone widths.
- Headings that must fit inside a box (the hero name, CONTINUE? on Contact) are sized to the box, not the window: the box is a size container (`[container-type:inline-size]`) and the heading uses `cqi` units (`text-[clamp(32px,13.5cqi,112px)]`). Dela Gothic One runs about 7 to 8 em wide for these words, so keep the value at about 13.5cqi or below (12.5cqi for "CONTINUE?").

**Utilities** (defined in `globals.css`):
- `.paper`: graph-paper background (24px grid)
- `.tone`: manga screentone (7px dot pattern)
- `.tone-sun`: screentone on a sun-yellow ground
- `.speed`: manga speed lines radiating from the left third
- `.panel`: 4px ink border (don't mix with Tailwind border overrides on the same element; use `border-4 border-ink` classes instead)
- Tailwind's opacity shorthand (`bg-background/90`) produces no color for these tokens, because they are plain CSS variables. Use `bg-[color-mix(in_srgb,var(--background)_92%,transparent)]` instead (as the Navbar does).

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
- Next caches optimized images in `.next/cache/images`. After replacing a file in `public/projects/` under the same name, delete that folder or the dev server keeps serving the old image.
- Strong visual theme: new sections need to fit the panel and quest vocabulary.
- Site is fully static. Any future dynamic content (analytics, form submissions) would require a route handler.
