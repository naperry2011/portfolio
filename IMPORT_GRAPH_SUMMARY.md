# IMPORT_GRAPH_SUMMARY

High-level coupling overview. Repo is small; graph is shallow and tree-shaped.

## Core Dependency Nodes

- src/app/layout.tsx — wraps every route segment; imports Navbar, Footer, globals.css; loads three font families
- src/components/Navbar.tsx — imported by layout; depends on next/link, next/navigation, react, react-icons
- src/components/Footer.tsx — imported by layout; depends on next/link, react-icons
- src/components/MotionWrapper.tsx — re-exports `motion.div` as `MotionDiv`; imported by home and projects pages

## External Library Hubs

- framer-motion — used directly in about/projects/contact pages and indirectly via MotionWrapper
- react-icons — used by every page and both layout components
- next/image, next/link — used across pages
- next/font/google — used in layout.tsx for Geist, Geist Mono, Fraunces

## Cross-Module Edges

- Pages → `@/components/MotionWrapper` (home, projects)
- Layout → `@/components/Navbar`, `@/components/Footer`
- No page imports another page.
- No component imports another component.

## Circular Dependencies

- None detected.

## Potential Refactor Risk Areas

- framer-motion is imported both directly (about, contact, projects use `motion.X`) and via `MotionDiv` wrapper (home, projects). Inconsistent pattern but low risk — `MotionDiv` is the server-component-safe path.
- Project image paths (`public/projects/*.jpg`) are referenced but the files themselves are user-supplied — broken images until added.

## Notes

- Path alias `@/*` → `src/*` (per tsconfig.json) is the only non-relative import convention.
- No barrel files; imports point directly at source modules.
- Tailwind theme tokens (`background`, `surface`, `border`, `foreground`, `muted`, `accent`) map to CSS variables defined in `src/app/globals.css` — both files must change together when adjusting the palette.
