# IMPORT_GRAPH_SUMMARY

High-level coupling overview. Repo is small; graph is shallow and tree-shaped.

## Core Dependency Nodes

- src/app/layout.tsx — wraps every route segment; imports Navbar, Footer, globals.css
- src/components/Navbar.tsx — imported by layout; depends on next/link, next/navigation, react, react-icons
- src/components/Footer.tsx — imported by layout; depends on next/link, react-icons
- src/components/MotionWrapper.tsx — re-exports `motion.div` as `MotionDiv`; imported by home, projects, blog pages

## External Library Hubs

- framer-motion — used directly in about/projects/blog/contact pages and indirectly via MotionWrapper
- react-icons — used by every page and both layout components
- next/image, next/link — used across pages
- rss-parser — isolated to src/app/api/medium-posts/route.ts

## Cross-Module Edges

- Pages → `@/components/MotionWrapper` (home, projects, blog)
- Layout → `@/components/Navbar`, `@/components/Footer`
- Blog page → `/api/medium-posts` (runtime HTTP, not an import)
- No page imports another page.
- No component imports another component.

## Circular Dependencies

- None detected.

## Potential Refactor Risk Areas

- src/app/page.tsx (home) — large icon import surface from react-icons (fa/si/bs) plus inline content; size only, not coupling.
- framer-motion is imported both directly and via MotionWrapper; inconsistent pattern but low risk.
- `nodemailer` declared but unused → dead dependency.

## Notes

- Path alias `@/*` → `src/*` (per tsconfig.json) is the only non-relative import convention.
- No barrel files; imports point directly at source modules.
