# DATA_FLOW

System-level data movement.

## Static Page Render

Source: Browser request to `/`, `/about`, `/projects`, `/contact`
Transport: HTTP
Processor: Next.js App Router → RootLayout (src/app/layout.tsx) → route segment page component
Storage: None (no DB; content is in source + public/ assets)
Downstream Consumers: Browser DOM

All four routes are prerendered as static content at build time.

## Outbound Project Links

Source: Browser click on a project card (`/` or `/projects`)
Transport: HTTP (target="_blank", noopener noreferrer)
Processor: Browser navigation to external Vercel-hosted project sites
Storage: None
Downstream Consumers: Live project sites (rooted-legacy-phi.vercel.app, reality-saving.vercel.app, the-motions.vercel.app)

## Contact Actions

Source: Browser click on contact page
Transport: HTTP redirect / mailto handler / external link
Processor: None server-side
Storage: None
Downstream Consumers: Cal.com (scheduling), user's mail client, external social sites

## Notes

- No database, queue, cache, or object store integrations.
- No API routes, server actions, or streaming endpoints.
- All dynamic content is hardcoded in the page components.
