# Cyberlounge Portfolio

Personal portfolio site for Nicholas Perry — independent software and cloud development consulting.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3 with a custom minimal-dark-editorial design system
- **Type:** Fraunces (variable serif) + Geist (sans + mono) via `next/font/google`
- **Animation:** Framer Motion 12
- **Icons:** react-icons
- **Hosting:** Vercel

## Pages

- `/` — Hero, capabilities, featured projects
- `/about` — Bio, expertise, professional timeline
- `/projects` — Selected work (Rooted Legacy, Reality Saving, The Motions)
- `/contact` — Services + Cal.com booking + social channels

All routes are static (prerendered at build time). No API routes, no database.

## Getting Started

```bash
git clone https://github.com/naperry2011/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Start the dev server
- `npm run build` — Production build
- `npm start` — Run the production server
- `npm run lint` — ESLint (eslint-config-next)

## Design System

Tokens are defined in two places that must stay in sync:

- CSS variables in `src/app/globals.css` (`--background`, `--surface`, `--border`, `--foreground`, `--muted`, `--accent`)
- Tailwind theme tokens in `tailwind.config.ts` (which reference those CSS variables)

Utility classes: `.label`, `.label-ink`, `.rule`, `.hero-opsz`, `.link-accent` (defined in `globals.css`).

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── projects/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── MotionWrapper.tsx
public/
├── projects/  (screenshots — see docs/ai/tasks.md)
└── ...
```

## AI Context Docs

Structural indexes and AI-facing context live at the repo root and `docs/ai/`. See `llms.txt` for the full map.

## Deployment

Push to `main` — Vercel deploys automatically.

## License

MIT
