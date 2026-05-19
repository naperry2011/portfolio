# ENTRY_POINTS

All execution entry points for the portfolio repo.

## Next.js App Server

Path: package.json (`scripts.dev` = `next dev`, `scripts.start` = `next start`, `scripts.build` = `next build`)
Responsibility: Boot the Next.js 15 App Router server; serves all routes and API handlers.
Invokes: src/app/layout.tsx → each route segment
Depends On: next, react, react-dom, next.config.ts, tsconfig.json

## Root Layout

Path: src/app/layout.tsx
Responsibility: HTML shell, global font, global CSS, persistent Navbar/Footer chrome around `{children}`.
Invokes: src/components/Navbar.tsx, src/components/Footer.tsx, src/app/globals.css
Depends On: next/font/google (Geist)

## Route: `/` (Home)

Path: src/app/page.tsx
Responsibility: Landing page (hero, skills, CTAs).
Invokes: src/components/MotionWrapper.tsx (MotionDiv)
Depends On: framer-motion, react-icons, next/image, next/link

## Route: `/about`

Path: src/app/about/page.tsx
Responsibility: About / bio content.
Invokes: —
Depends On: framer-motion, react-icons/fa, next/image

## Route: `/projects`

Path: src/app/projects/page.tsx
Responsibility: Projects gallery.
Invokes: src/components/MotionWrapper.tsx
Depends On: framer-motion, react-icons/fa, next/image, public/*.jpg

## Route: `/blog`

Path: src/app/blog/page.tsx
Responsibility: Render Medium posts list; client-side fetch from internal API.
Invokes: GET /api/medium-posts; src/components/MotionWrapper.tsx
Depends On: framer-motion, react-icons/fa, next/image, React useEffect/useState

## Route: `/contact`

Path: src/app/contact/page.tsx
Responsibility: Contact options (Cal.com booking link, social links, mailto).
Invokes: External: cal.com, github.com, linkedin.com, medium.com, mailto
Depends On: framer-motion, react-icons/fa

## API Handler: `GET /api/medium-posts`

Path: src/app/api/medium-posts/route.ts
Responsibility: Fetch Medium RSS feed, normalize items to `{title, content (excerpt), thumbnail, link, pubDate, categories}`, return JSON. Returns 404 if no items, 500 on parse/network error.
Invokes: rss-parser → `https://medium.com/feed/@naperry2011`
Depends On: rss-parser, next/server

## Notes

- No CLI scripts, workers, cron, Kafka consumers, or Lambda handlers in this repo.
- No `middleware.ts` defined.
- Static assets served from `public/` by Next.js.
