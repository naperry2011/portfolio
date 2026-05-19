# CODE_MAP

Feature-oriented index of the portfolio repo (Next.js 15 App Router, React 19, Tailwind, Framer Motion).

## Site Shell / Layout

Category: UI

Primary Files:
- src/app/layout.tsx
- src/components/Navbar.tsx
- src/components/Footer.tsx
- src/components/Frame.tsx

Supporting Files:
- src/app/globals.css
- src/components/MotionWrapper.tsx

External Integrations:
- next/font/google (Geist sans, Geist Mono, Fraunces serif)
- react-icons

Entry Points:
- RootLayout default export (wraps all route segments)

## Home Page

Category: UI

Primary Files:
- src/app/page.tsx

Supporting Files:
- src/components/MotionWrapper.tsx
- public/projects/{rooted-legacy,reality-saving,the-motions}.jpg (referenced; user supplies actual files)

External Integrations:
- framer-motion (via MotionDiv)
- react-icons/{fa,si}
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
- public/projects/{rooted-legacy,reality-saving,the-motions}.jpg

External Integrations:
- framer-motion
- next/image
- Outbound: three live project URLs (rooted-legacy-phi.vercel.app, reality-saving.vercel.app, the-motions.vercel.app)

Entry Points:
- Route: `/projects`

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

- No API routes, no database, no workers, no cron, no tests.
- Three font families loaded via next/font/google: Geist (sans), Geist Mono, Fraunces (serif).
- Design system tokens are CSS variables in `src/app/globals.css`, mirrored as Tailwind theme colors in `tailwind.config.ts`.
