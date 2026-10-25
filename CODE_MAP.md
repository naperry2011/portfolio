# CODE_MAP

Feature-oriented index of the portfolio repo (Next.js 15 App Router, React 19, Tailwind 3). Design: quest-log notebook (see ADR-007 in `docs/ai/decisions.md`).

## Site Shell / Layout

Category: UI

Primary Files:
- src/app/layout.tsx
- src/app/template.tsx
- src/components/Navbar.tsx
- src/components/Footer.tsx
- src/components/SmoothScroll.tsx

Supporting Files:
- src/app/globals.css (color tokens + `.paper`, `.tone`, `.speed`, `.panel` utilities + view-transition wipe)
- tailwind.config.ts (mirrors the color tokens; `font-display`, `font-pixel`, `font-sans`)

External Integrations:
- next/font/google (Dela Gothic One display, DotGothic16 pixel, Zen Kaku Gothic New body)
- lenis (smooth scroll)

Entry Points:
- RootLayout default export (wraps all route segments)

## Project Data

Category: Content

Primary Files:
- src/data/projects.ts (`apps`, `sideStory`, `sites`; each entry has status, blurb, longer description, meta, image, links, `color`, and for apps `artBg`)

Supporting Files:
- public/projects/*.png (app store feature graphics, 1024x500)
- public/projects/*.jpg (live-site homepage screenshots, 16:10)

Entry Points:
- Imported by the Home and Projects pages

## Shared Components

Category: UI

Primary Files:
- src/components/Panel.tsx (bordered comic panel; variants plain / tone / sun / speed / ink; optional `style`)
- src/components/StatusTag.tsx (status label colored by tone: active red, cleared green, neutral grey)
- src/components/QuestCard.tsx (app card with store graphic and colored offset shadow; `detailed` shows the long description)
- src/components/QuestLogRow.tsx (site row with screenshot, colored thumbnail shadow and hover tint; `detailed` shows the long description)
- src/components/SectionHeading.tsx (display heading + pixel note + colored XP bar via `color` prop)

## Home Page

Category: UI

Primary Files:
- src/app/page.tsx

Supporting Files:
- src/data/projects.ts
- Panel, QuestCard, QuestLogRow, SectionHeading, StatusTag

External Integrations:
- next/image, next/link
- External link: cal.com/cybercap2011

Entry Points:
- Route: `/` (nav label QUESTS)

## Projects Page

Category: UI

Primary Files:
- src/app/projects/page.tsx

Supporting Files:
- src/data/projects.ts
- QuestCard, QuestLogRow, SectionHeading

External Integrations:
- Outbound links to each project's live site and GitHub repo (from `projects.ts`)

Entry Points:
- Route: `/projects` (nav label QUEST LOG)

## About Page

Category: UI

Primary Files:
- src/app/about/page.tsx (bio, stats, save-history job timeline; content inline)

Supporting Files:
- public/profile.jpg
- Panel, SectionHeading

Entry Points:
- Route: `/about` (nav label PLAYER)

## Contact Page

Category: UI

Primary Files:
- src/app/contact/page.tsx (CONTINUE? option menu; options inline)

External Integrations:
- External link: cal.com/cybercap2011 (scheduling)
- mailto: link (no server email path)
- GitHub, LinkedIn, Medium profile links

Entry Points:
- Route: `/contact` (nav label CONTACT)

## Build / Tooling

Category: Infra

Primary Files:
- package.json
- next.config.ts (experimental `viewTransition`)
- tsconfig.json
- tailwind.config.ts
- postcss.config.mjs
- eslint.config.mjs
- .eslintrc.json
- .claude/launch.json (`dev` config for the browser preview)

External Integrations:
- Next.js build/dev server
- Tailwind + PostCSS
- ESLint (eslint-config-next)

Entry Points:
- npm scripts: `dev`, `build`, `start`, `lint`

## Notes

- No API routes, no database, no workers, no cron, no tests. All routes are static.
- Color tokens are CSS variables in `src/app/globals.css`, mirrored as Tailwind theme colors in `tailwind.config.ts`. Change both together.
- To add or change a project: edit `src/data/projects.ts` (include a `color` picked from the project's art; apps also need `artBg`) and drop the image in `public/projects/`. Home and Projects update together.
- Project colors reach components as the CSS custom property `--c`; see "Color per project" in `docs/ai/architecture.md`.
