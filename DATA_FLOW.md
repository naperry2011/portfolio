# DATA_FLOW

System-level data movement.

## Static / SSR Page Render

Source: Browser request to `/`, `/about`, `/projects`, `/contact`
Transport: HTTP
Processor: Next.js App Router → RootLayout (src/app/layout.tsx) → route segment page component
Storage: None (no DB; content is in source + public/ assets)
Downstream Consumers: Browser DOM

## Blog Page Load (with Medium Posts)

Source: Browser request to `/blog`
Transport: HTTP
Processor: Next.js renders src/app/blog/page.tsx (client component) → `useEffect` triggers `fetch('/api/medium-posts')`
Storage: React component state (in-memory, client-side)
Downstream Consumers: Blog UI render

## Medium Posts API

Source: Client `fetch('/api/medium-posts')` from blog page
Transport: HTTP (internal, same-origin)
Processor: src/app/api/medium-posts/route.ts → rss-parser
Storage: None (no caching layer in code)
Downstream Consumers: Blog page client component

## Medium RSS Fetch (external)

Source: medium-posts route handler
Transport: HTTPS GET to `https://medium.com/feed/@naperry2011`
Processor: rss-parser → strip HTML, normalize items, extract first `<img>` as thumbnail
Storage: None
Downstream Consumers: NextResponse JSON → client

## Contact Actions

Source: Browser click on contact page
Transport: HTTP redirect / mailto handler / external link
Processor: None server-side (no form submission, no Nodemailer wiring)
Storage: None
Downstream Consumers: Cal.com (scheduling), user's mail client, external social sites

## Notes

- No database, queue, cache, or object store integrations.
- No server actions defined.
- No streaming/SSE endpoints.
