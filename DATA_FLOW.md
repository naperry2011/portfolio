# DATA_FLOW

System-level data movement.

## Static Page Render

Source: Browser request to `/`, `/projects`, `/about`, `/contact`
Transport: HTTP
Processor: Next.js App Router → RootLayout (src/app/layout.tsx) → route segment page component
Storage: None (no DB; content is in source + public/ assets)
Downstream Consumers: Browser DOM

All four routes are prerendered as static content at build time.

## Project Content

Source: src/data/projects.ts (`apps`, `sideStory`, `sites`) + images in public/projects/
Transport: TypeScript import at build time
Processor: Home (`/`) and Projects (`/projects`) map entries into QuestCard and QuestLogRow
Storage: Source code only
Downstream Consumers: Static HTML for `/` and `/projects`

Changing a project means editing that one file; both pages pick it up on the next build.

## Outbound Project Links

Source: Browser click on a project link (`/` or `/projects`)
Transport: HTTP (target="_blank", noopener noreferrer)
Processor: Browser navigation to the external URL in the project's `links`
Storage: None
Downstream Consumers: Live project sites (Vercel-hosted) and GitHub repos

## Contact Actions

Source: Browser click on BOOK A CALL (home, contact) or a contact option / footer link
Transport: External link / mailto handler
Processor: None server-side
Storage: None
Downstream Consumers: Cal.com (scheduling), the visitor's mail client, GitHub / LinkedIn / Medium

## Notes

- No database, queue, cache or object store integrations.
- No API routes, server actions or streaming endpoints.
- About and Contact content is inline in their page components; project content is centralized in src/data/projects.ts.
