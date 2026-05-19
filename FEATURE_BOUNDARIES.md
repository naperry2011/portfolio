# FEATURE_BOUNDARIES

Responsibility boundaries between components.

## Root Layout (src/app/layout.tsx)

Owns:
- HTML document shell, `<body>` class, metadata/OpenGraph/Twitter tags
- Mounting Navbar and Footer around every route
- Loading global CSS and font variables (Geist sans/mono, Fraunces serif)

Does NOT Own:
- Page content, routing, data fetching

Communicates With:
- src/components/Navbar.tsx, src/components/Footer.tsx (render)
- All route segments (via `{children}`)

Isolation Level: Strong

## Navbar (src/components/Navbar.tsx)

Owns:
- Top navigation bar, active-route underline (via `usePathname`)
- Mobile menu open/close state
- Cyberlounge wordmark (serif treatment)

Does NOT Own:
- Routing logic (delegated to next/link)

Communicates With:
- next/navigation (read-only pathname)

Isolation Level: Strong

## Footer (src/components/Footer.tsx)

Owns:
- Footer chrome, navigation quick links, social icons, copyright

Does NOT Own:
- Newsletter signup, analytics, contact form

Communicates With:
- next/link (internal nav), external social URLs

Isolation Level: Strong

## MotionWrapper (src/components/MotionWrapper.tsx)

Owns:
- Client-boundary re-export of `framer-motion`'s `motion.div` as `MotionDiv`

Does NOT Own:
- Animation variants, transition configs (declared at call site)

Communicates With:
- framer-motion

Isolation Level: Strong

## Page Segments (home / about / projects / contact)

Owns:
- Page-specific layout, copy, animations, image references
- Page-local React state where applicable (none currently — all data is static)

Does NOT Own:
- Site chrome (provided by layout)
- API endpoints (none exist)

Communicates With:
- `@/components/MotionWrapper` (home, projects)
- External services via anchor links (contact, projects)

Isolation Level: Strong (no page imports another page or another page's helpers)

## Build / Tooling

Owns:
- Compilation (next/tsc), styling pipeline (tailwind/postcss), lint rules

Does NOT Own:
- Runtime behavior

Communicates With:
- Source tree at build time only

Isolation Level: Strong
