# ENTRY_POINTS

All execution entry points for the portfolio repo.

## Next.js App Server

Path: package.json (`scripts.dev` = `next dev`, `scripts.start` = `next start`, `scripts.build` = `next build`)
Responsibility: Boot the Next.js 15 App Router server; serves all routes.
Invokes: src/app/layout.tsx → each route segment
Depends On: next, react, react-dom, next.config.ts, tsconfig.json

## Root Layout

Path: src/app/layout.tsx
Responsibility: HTML shell, font variables (Geist sans, Geist Mono, Fraunces serif), global CSS, persistent Navbar/Footer chrome.
Invokes: src/components/Navbar.tsx, src/components/Footer.tsx, src/app/globals.css
Depends On: next/font/google

## Route: `/` (Home)

Path: src/app/page.tsx
Responsibility: Hero, capabilities (skills grouped into Web / Cloud / Database / Platforms & CRM), featured projects strip.
Invokes: src/components/MotionWrapper.tsx (MotionDiv)
Depends On: framer-motion, react-icons, next/image, next/link

## Route: `/about`

Path: src/app/about/page.tsx
Responsibility: Bio, expertise cards, professional timeline, principles, beyond-tech sections.
Invokes: —
Depends On: framer-motion, react-icons/fa, next/image

## Route: `/projects`

Path: src/app/projects/page.tsx
Responsibility: Three project entries (Rooted Legacy, Reality Saving, The Motions) with alternating image/copy layout.
Invokes: src/components/MotionWrapper.tsx
Depends On: framer-motion, next/image

## Route: `/contact`

Path: src/app/contact/page.tsx
Responsibility: Services overview, Cal.com booking CTA, social channel list.
Invokes: External: cal.com, github.com, linkedin.com, medium.com, mailto
Depends On: framer-motion, react-icons/fa

## Notes

- No API handlers. No middleware. No CLI scripts, workers, cron, Kafka consumers, or Lambda handlers.
- Static assets served from `public/` by Next.js. Project images expected at `public/projects/*.jpg`.
