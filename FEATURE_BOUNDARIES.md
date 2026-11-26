# FEATURE_BOUNDARIES

Responsibility boundaries between components.

## Root Layout (src/app/layout.tsx)

Owns:
- HTML document shell, graph-paper `<body>` class, home metadata (via `pageMeta`), site-wide Person + WebSite structured data
- Mounting SmoothScroll, Navbar and Footer around every route
- Loading global CSS and font variables (Dela Gothic One, DotGothic16, Zen Kaku Gothic New)

Does NOT Own:
- Page content, routing, data

Communicates With:
- src/components/{SmoothScroll,Navbar,Footer}.tsx (render)
- All route segments (via `{children}`)

Isolation Level: Strong

## Navbar (src/components/Navbar.tsx)

Owns:
- Top navigation bar, ▶ cursor and `aria-current` on the active route (via `usePathname`)
- Mobile menu open/close state
- CYBERLOUNGE wordmark and katakana

Does NOT Own:
- Routing logic (delegated to next/link)

Communicates With:
- next/navigation (read-only pathname)

Isolation Level: Strong

## Footer (src/components/Footer.tsx)

Owns:
- Footer strip, copyright, external profile links, email link

Does NOT Own:
- Newsletter signup, analytics, contact form

Communicates With:
- next/link (home link), external URLs

Isolation Level: Strong

## Project Data (src/data/projects.ts)

Owns:
- Every project's title, status, copy, meta, image path, links, signature `color` and (apps) `artBg`
- The `Project`, `Status`, `StatusTone`, `ProjectLink` types

Does NOT Own:
- Presentation (components decide what to show, e.g. blurb vs description)

Communicates With:
- Imported by Home, Projects, QuestCard, QuestLogRow, StatusTag

Isolation Level: Strong (plain data, no imports)

## Shared UI Components (src/components/{Panel,StatusTag,QuestCard,QuestLogRow,SectionHeading}.tsx)

Owns:
- Panel: bordered box and its background variants (plain / tone / sun / speed / ink)
- StatusTag: mapping a status tone to a color
- QuestCard / QuestLogRow: how one project is laid out, with a `detailed` mode for the Projects page, and how the project's `color` is applied (shadows, hover tint) via the `--c` custom property
- SectionHeading: section title, note and the colored XP bar

Does NOT Own:
- Which projects appear or in what order (pages decide)
- Project content (comes from src/data/projects.ts)

Communicates With:
- QuestCard → Panel, StatusTag; QuestLogRow → StatusTag; next/image

Isolation Level: Strong

## Motion (src/components/{RevealObserver,TypeLine,Countdown}.tsx + globals.css)

Owns:
- RevealObserver: deciding when a `[data-reveal]` element has entered the viewport (sets `data-in`, adds `.reveal-ready` to `<html>`)
- TypeLine: the typed hero dialogue line
- Countdown: the CONTINUE? counter
- globals.css: every keyframe, transition and the reduced-motion switch

Does NOT Own:
- Which elements animate (components opt in with `data-reveal`, `.slam`, `.pressable`)

Communicates With:
- next/navigation (RevealObserver re-scans on route change)

Isolation Level: Strong

## Trainer Website Shop (src/app/trainer-websites/page.tsx, src/data/packages.ts)

Owns:
- The offer: package names, features, demo links, prices, the compare table and the steps (all in src/data/packages.ts)
- The sales page layout and its Service structured data

Does NOT Own:
- The demo sites themselves (separate Vercel projects)
- Booking (the button links out to Cal.com)
- The Quest Log entry for the project (src/data/projects.ts, which links here)

Communicates With:
- Shared UI components, Search Metadata (`pageMeta`, `JsonLd`)

Isolation Level: Strong

## Search Metadata (src/lib/seo.ts, src/app/{sitemap,robots}.ts, src/components/JsonLd.tsx)

Owns:
- The canonical host (`SITE_URL`), per-page title / description / canonical / share tags (`pageMeta`)
- The sitemap, robots.txt and site-wide structured data (Person, WebSite, ProfilePage); the shop page builds its own Service entry

Does NOT Own:
- Page copy or visible headings (pages keep their game labels)
- The share image itself (src/app/opengraph-image.tsx)

Communicates With:
- Layout and pages (they call `pageMeta` and render `JsonLd`)

Isolation Level: Strong

## SmoothScroll (src/components/SmoothScroll.tsx)

Owns:
- Lenis instance lifecycle (create, animation frame loop, destroy)

Does NOT Own:
- Page layout or route transitions (the View Transitions wipe is CSS in globals.css)

Communicates With:
- lenis

Isolation Level: Strong

## Page Segments (home / projects / about / contact)

Owns:
- Page-specific layout, section order, page metadata
- Inline content for About (bio, stats, job history) and Contact (options)

Does NOT Own:
- Site chrome (provided by layout)
- Project content (src/data/projects.ts)
- API endpoints (none exist)

Communicates With:
- src/data/projects.ts and shared UI components (home, projects)
- Panel, SectionHeading (about)
- External services via anchor links

Isolation Level: Strong (no page imports another page or another page's helpers)

## Build / Tooling

Owns:
- Compilation (next/tsc), styling pipeline (tailwind/postcss), lint rules, preview config (.claude/launch.json)

Does NOT Own:
- Runtime behavior

Communicates With:
- Source tree at build time only

Isolation Level: Strong
