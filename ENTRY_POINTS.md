# ENTRY_POINTS

All execution entry points for the portfolio repo.

## Next.js App Server

Path: package.json (`scripts.dev` = `next dev`, `scripts.start` = `next start`, `scripts.build` = `next build`)
Responsibility: Boot the Next.js 15 App Router server; serves all routes.
Invokes: src/app/layout.tsx → each route segment
Depends On: next, react, react-dom, lenis, next.config.ts, tsconfig.json

## Browser Preview Config

Path: .claude/launch.json (`dev` configuration: `npm run dev` on port 3000)
Responsibility: Lets the Claude desktop browser preview start the dev server.
Invokes: package.json `dev` script

## Root Layout

Path: src/app/layout.tsx
Responsibility: HTML shell, font variables (Dela Gothic One, DotGothic16, Zen Kaku Gothic New), global CSS, graph-paper body, persistent SmoothScroll/Navbar/Footer, metadata.
Invokes: src/components/SmoothScroll.tsx, src/components/Navbar.tsx, src/components/Footer.tsx, src/app/globals.css
Depends On: next/font/google

## Route: `/` (Home, nav label QUESTS)

Path: src/app/page.tsx
Responsibility: Speed-line hero panels, Main Quests (apps), Beats & Backlog side story, Quest Log (sites), CONTINUE? call to action.
Invokes: src/data/projects.ts, src/components/{Panel,QuestCard,QuestLogRow,SectionHeading,StatusTag}.tsx
Depends On: next/image, next/link

## Route: `/projects` (QUEST LOG)

Path: src/app/projects/page.tsx
Responsibility: Every app, the side story and every site, with their longer write-ups.
Invokes: src/data/projects.ts, src/components/{QuestCard,QuestLogRow,SectionHeading}.tsx
Depends On: next (Metadata type)

## Route: `/about` (PLAYER)

Path: src/app/about/page.tsx
Responsibility: Portrait, bio, stats panel, save-history job timeline (content inline).
Invokes: src/components/{Panel,SectionHeading}.tsx
Depends On: next/image

## Route: `/contact` (CONTINUE?)

Path: src/app/contact/page.tsx
Responsibility: Option menu: book a call, email, GitHub, LinkedIn, Medium.
Invokes: External: cal.com, mailto, github.com, linkedin.com, medium.com
Depends On: next (Metadata type)

## Notes

- No API handlers. No middleware. No CLI scripts, workers, cron, queues or serverless handlers.
- Static assets served from `public/`: `profile.jpg` and `projects/*.{png,jpg}`.
