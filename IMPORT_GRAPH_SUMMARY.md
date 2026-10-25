# IMPORT_GRAPH_SUMMARY

High-level coupling overview. Repo is small; graph is shallow and tree-shaped.

## Core Dependency Nodes

- src/app/layout.tsx: wraps every route segment; imports SmoothScroll, Navbar, Footer, globals.css; loads three font families
- src/data/projects.ts: leaf module (no imports); imported by the Home and Projects pages and by QuestCard, QuestLogRow, StatusTag (types)
- src/components/Panel.tsx: imported by QuestCard, Home, About
- src/components/StatusTag.tsx: imported by QuestCard, QuestLogRow, Home
- src/components/SectionHeading.tsx: imported by Home, Projects, About
- src/components/QuestCard.tsx, src/components/QuestLogRow.tsx: imported by Home and Projects

## External Library Hubs

- next/image: QuestCard, QuestLogRow, Home, About
- next/link: Navbar, Footer, Home
- next/navigation: Navbar
- next/font/google: layout.tsx (Dela Gothic One, DotGothic16, Zen Kaku Gothic New)
- lenis: SmoothScroll only

## Cross-Module Edges

- Layout → SmoothScroll, Navbar, Footer
- Home → data, Panel, QuestCard, QuestLogRow, SectionHeading, StatusTag
- Projects → data, QuestCard, QuestLogRow, SectionHeading
- About → Panel, SectionHeading
- Contact → none (self-contained)
- QuestCard → Panel, StatusTag, data (types); QuestLogRow → StatusTag, data (types); StatusTag → data (types)
- No page imports another page.

## Client Boundaries

- `'use client'`: Navbar, SmoothScroll, src/app/template.tsx
- Everything else, including all pages and shared UI components, is a server component.

## Circular Dependencies

- None detected.

## Potential Refactor Risk Areas

- `src/data/projects.ts` is the one shared content hub; renaming fields there touches QuestCard, QuestLogRow and both pages.
- Tailwind theme colors map to CSS variables in `src/app/globals.css`; both files must change together when adjusting the palette.

## Notes

- Path alias `@/*` → `src/*` (per tsconfig.json). Shared components import each other with relative `./` paths.
- No barrel files; imports point directly at source modules.
