# FEATURE_BOUNDARIES

Responsibility boundaries between components.

## Root Layout (src/app/layout.tsx)

Owns:
- HTML document shell, `<body>` font class, metadata/OpenGraph/Twitter tags
- Mounting Navbar and Footer around every route
- Loading global CSS

Does NOT Own:
- Page content
- Navigation state (delegated to Navbar)
- Data fetching

Communicates With:
- src/components/Navbar.tsx, src/components/Footer.tsx (render)
- All route segments (via `{children}`)

Isolation Level: Strong

## Navbar (src/components/Navbar.tsx)

Owns:
- Top navigation bar, route highlighting (via `usePathname`)
- Mobile menu open/close state
- Hover state for nav links

Does NOT Own:
- Routing logic (delegated to next/link)
- Auth, user identity (none in app)

Communicates With:
- next/navigation (read-only pathname)

Isolation Level: Strong

## Footer (src/components/Footer.tsx)

Owns:
- Footer chrome, quick links, social icons, copyright line

Does NOT Own:
- Newsletter signup, analytics, contact form

Communicates With:
- next/link (internal nav), external social URLs

Isolation Level: Strong

## MotionWrapper (src/components/MotionWrapper.tsx)

Owns:
- Client-boundary re-export of `framer-motion`'s `motion.div` as `MotionDiv` so server components can use animated divs by reference.

Does NOT Own:
- Animation variants, transition configs (declared at call site)

Communicates With:
- framer-motion

Isolation Level: Strong

## Page Segments (home / about / projects / blog / contact)

Owns:
- Page-specific layout, copy, animations, image references
- Page-local React state (blog uses `useState`/`useEffect` for posts; contact/about/projects are presentation only)

Does NOT Own:
- Site chrome (provided by layout)
- API endpoints (blog calls `/api/medium-posts`, does not implement it)

Communicates With:
- `@/components/MotionWrapper` (home, projects, blog)
- `/api/medium-posts` over HTTP (blog only)
- External services via anchor links (contact)

Isolation Level: Strong (no page imports another page or another page's helpers)

## Medium Posts API (src/app/api/medium-posts/route.ts)

Owns:
- Medium RSS fetch, HTML stripping, excerpt generation, thumbnail extraction
- Error shape for the `/api/medium-posts` endpoint

Does NOT Own:
- Persistence, caching, auth
- UI rendering of posts (delegated to blog page)

Communicates With:
- Medium RSS endpoint (HTTPS)
- Blog page (HTTP response)

Isolation Level: Strong

## Build / Tooling

Owns:
- Compilation (next/tsc), styling pipeline (tailwind/postcss), lint rules

Does NOT Own:
- Runtime behavior

Communicates With:
- Source tree at build time only

Isolation Level: Strong
