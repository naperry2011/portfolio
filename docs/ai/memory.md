# Project Memory

Running history of what's been built and current state. Update after major changes.

## Current State

**Status:** Active Development (personal portfolio site, deployed to Vercel)
**Last Updated:** 2026-10-25
**Version:** main (uncommitted): quest-log redesign (ADR-007)

### What's Working
- Next.js 15.5.18 App Router site with 4 page routes: `/` (QUESTS), `/projects` (QUEST LOG), `/about` (PLAYER), `/contact` (CONTINUE?)
- Quest-log notebook design system: graph-paper ground `#fbfbf9`, ink `#111111`, manga-red accent `#d42a20`, cleared-green `#1a6b33`; Dela Gothic One display, DotGothic16 pixel labels, Zen Kaku Gothic New body
- Manga motifs as CSS utilities in `globals.css`: `.paper` (graph grid), `.tone` (screentone), `.speed` (speed lines), `.panel` (4px ink border)
- All project content lives in `src/data/projects.ts` (`apps`, `sideStory`, `sites`); Home and Projects both read from it
- Project images are the apps' store feature graphics (1024x500 PNG) and homepage screenshots of the live sites (16:10 JPG) in `public/projects/`
- All routes prerender as static; lint and build pass
- Kept from the previous design: Lenis smooth scroll and the View Transitions curtain wipe

### Project roster (as decided with the user, 2026-10-25)
- Main quests (apps): F*ck Corpo (pre-launch), Afterword, Tonk v2, Pitty Pat
- Side story: Beats & Backlog (in progress)
- Sites: Reality Saving (live, ongoing with client), Captain Diesel's Dojo, Twinkling Hearts, Porchlight / foster care MVP (in progress), Proctor House Rottweilers (in progress), Safe Screen Logistics (client template)
- Deliberately excluded: The Motions, Rooted Legacy, Urban Blue Zone, MedGhana, PK website, Kae Stylez, CodeLapras, all SRE/PNC project repos
- Source of truth for current work is the user's GitHub (naperry2011), not their Vercel project list

### Known Issues
- `public/og-cover.jpg` referenced in layout metadata but not present yet; OG/Twitter cards have no image
- Site screenshots in `public/projects/*.jpg` are only 800px wide (captured from the browser pane); soft at large sizes, replace with full-size captures
- サイバーラウンジ in the nav renders in the system font: none of the three fonts ship a Japanese subset through `next/font`
- About page has no "Currently into" section yet: waiting on the user's actual favorite anime/games (do not invent them)

### In Progress
- Quest-log redesign is uncommitted; user reviews and commits in GitHub Desktop

## Implementation History

### 2026-10-25: Quest-log redesign (whole site)
**What was built:** Full replacement of the Architect design with an anime/gaming "quest log notebook": manga panels, screentone, speed lines and pixel-font game menus over graph paper. New shared components `Panel`, `StatusTag`, `QuestCard`, `QuestLogRow`, `SectionHeading`; new data file `src/data/projects.ts`. All four pages rewritten: Home (hero panels, Main Quests, Beats & Backlog side story, Quest Log, CONTINUE? CTA), Projects (full quest log with longer write-ups), About (player profile, stats, save-history job timeline), Contact (CONTINUE? option menu). Nav and footer restyled; nav labels QUESTS / QUEST LOG / PLAYER / CONTACT with a ▶ cursor on the active route. Added `.claude/launch.json` (`dev` config).
**Why:** User felt the site was "too corpo" and wanted it to feel free and personal. Explored five directions on a claude.ai design canvas (Lounge, Lab/Notebook, Poster, Lab + Lounge mix, Lab + anime/gaming); the user picked the anime/gaming notebook. Earlier mocks were rejected for looking AI-made, so copy now comes from the projects' own READMEs and sites wherever possible.
**Files affected:** `src/app/{layout,page,globals.css}`, `src/app/{about,projects,contact}/page.tsx`, `src/components/{Navbar,Footer}.tsx`, `tailwind.config.ts`, `package.json`, `package-lock.json`; new `src/components/{Panel,StatusTag,QuestCard,QuestLogRow,SectionHeading}.tsx`, `src/data/projects.ts`, 11 images in `public/projects/`. Deleted 12 components (Frame, SplitText, Marquee, TiltCard, ReactiveText, LeaderLine, TickRule, DirectionalArrow, RevealImage, Grain, AmbientCursor, MotionWrapper) and the old Rooted Legacy / The Motions / Reality Saving images. Removed deps `framer-motion`, `react-icons`.

### 2026-05-19 — Homepage depth additions
**What was built:** Two new home-page frames pushing the Architect motif further into actual technical-drafting language: `02 / APPROACH` (architectural detail sheet with four engagement principles, FIG/DETAIL annotations, ghosted numerals, dashed hairlines, SVG leader lines that scroll-draw in) and `05 / NOW` (drawing-register-style block with five label-value rows, SVG directional arrows, dotted hairlines, REV / NEXT REFRESH metadata). Renumbered Capabilities (02 → 03) and Selected Work (03 → 04). Three new shared components: TickRule, DirectionalArrow, LeaderLine.
**Why:** User requested the home read as more "active practice" than "showcase" — depth over breadth.
**Files affected:** new `src/components/{TickRule,DirectionalArrow,LeaderLine}.tsx`; modified `src/app/page.tsx`. No new dependencies.

### 2026-05-19 — Tier 2 Expressive layer
**What was built:** Bundle B (10 artistic moves) layered on top of the Architect Tier 1 foundation. Lenis smooth scroll, animated film-grain overlay, cursor-following ambient gradient, char-by-char hero reveal with Fraunces weight morph, marquee word strip between hero and capabilities, scroll-draw title-block frames (Frame component now client-side with framer-motion useInView), color-flood project images on scroll-into-view, 3D card tilt on hover, cursor-reactive body type on hero subtext, View Transitions API curtain wipe between routes (clip-path inset).
**Why:** User judged Tier 1 alone too restrained — *"I want some animation, something that feels artistic."*
**Files affected:** new `src/components/{SmoothScroll,Grain,AmbientCursor,SplitText,Marquee,RevealImage,TiltCard,ReactiveText}.tsx` (8 new components); modified `src/components/Frame.tsx`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/globals.css`, `next.config.ts`; added `src/app/template.tsx`. New dep: `lenis`.

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
- The fonts' available weights and subsets can be checked offline in `node_modules/next/dist/compiled/@next/font/dist/google/font-data.json`. Non-variable fonts (Dela Gothic One, DotGothic16, Zen Kaku Gothic New) need an explicit `weight`.
- Don't combine the `.panel` utility with Tailwind border overrides like `border-t-0` on one element; both are utilities and their output order isn't guaranteed. Use plain `border-4 border-t-0 border-ink` instead.
- Many of the user's sites use reveal-on-scroll animations, so screenshots taken right after load come out blank. Scroll down and back up before capturing.
- Mocks were rejected as "AI-made" when they used stock copy and generic UI tropes (pill buttons, tilted polaroids, fake handwriting). Real project assets and the projects' own wording fixed it.
