# CODE_MAP

Feature-oriented index of the portfolio repo (Next.js 15 App Router, React 19, Tailwind, Framer Motion).

## Site Shell / Layout

Category: UI

Primary Files:
- src/app/layout.tsx
- src/components/Navbar.tsx
- src/components/Footer.tsx

Supporting Files:
- src/app/globals.css
- src/components/MotionWrapper.tsx
- public/ (static assets, favicon, profile/project images)

External Integrations:
- next/font/google (Geist)
- react-icons

Entry Points:
- RootLayout default export (wraps all route segments)

## Home Page

Category: UI

Primary Files:
- src/app/page.tsx

Supporting Files:
- src/components/MotionWrapper.tsx
- public/cyberpunk-profile.jpg, public/profile-cyber.jpg

External Integrations:
- framer-motion (via MotionDiv)
- react-icons/{fa,si,bs}
- next/image, next/link

Entry Points:
- Route: `/`

## About Page

Category: UI

Primary Files:
- src/app/about/page.tsx

External Integrations:
- framer-motion
- react-icons/fa
- next/image

Entry Points:
- Route: `/about`

## Projects Page

Category: UI

Primary Files:
- src/app/projects/page.tsx

Supporting Files:
- src/components/MotionWrapper.tsx
- public/{fit-hero,gaming-leaderboard,pantry-chef,restaurant-analytics,jiive}.jpg

External Integrations:
- framer-motion
- react-icons/fa
- next/image

Entry Points:
- Route: `/projects`

## Blog Page

Category: UI

Primary Files:
- src/app/blog/page.tsx

Supporting Files:
- src/components/MotionWrapper.tsx

External Integrations:
- framer-motion
- react-icons/fa
- next/image
- Internal API: `/api/medium-posts` (client fetch)

Entry Points:
- Route: `/blog`

## Contact Page

Category: UI

Primary Files:
- src/app/contact/page.tsx

External Integrations:
- framer-motion
- react-icons/fa
- External link: cal.com/cybercap2011 (scheduling)
- mailto: link (no server email path)

Entry Points:
- Route: `/contact`

## Medium Posts API

Category: API

Primary Files:
- src/app/api/medium-posts/route.ts

External Integrations:
- rss-parser
- Medium RSS feed: `https://medium.com/feed/@naperry2011`
- next/server (NextResponse)

Entry Points:
- HTTP: `GET /api/medium-posts`

## Build / Tooling

Category: Infra

Primary Files:
- package.json
- next.config.ts
- tsconfig.json
- tailwind.config.ts
- postcss.config.mjs
- eslint.config.mjs
- .eslintrc.json

External Integrations:
- Next.js build/dev server
- Tailwind + PostCSS
- ESLint (eslint-config-next)

Entry Points:
- npm scripts: `dev`, `build`, `start`, `lint`

## Notes

- `nodemailer` and `@types/nodemailer` are declared in package.json but not imported anywhere in `src/`. Treat as unused dependency for index purposes.
- No tests, no workers, no cron, no lambdas defined in repo.
