# Architect Redesign — Design Document

**Date:** 2026-05-19
**Status:** Approved (brainstorm complete, ready for implementation planning)
**Supersedes:** `2026-05-19-minimal-dark-editorial` (the redesign landed earlier today)

---

## Positioning

Position Nicholas as a **digital architect with defined taste** — not a generic developer, not an agency, not a writer. The site should signal **systems thinking + curated point of view**: every spacing, type ratio, color, and interaction should feel deliberate, and that deliberateness should be visible.

The visitor's takeaway in five seconds should be: *"This person thinks in systems and has opinions about how they should feel."*

## Constraints

- IA stays at 4 pages: `/`, `/about`, `/projects`, `/contact`. No new content surfaces (no Principles page, no Stack page, no blog).
- The architect feeling must come from **visual + interactive signature**, not new written content.
- Use Cyberlounge brand name (kept from prior redesign).
- Three live projects are fixed: Rooted Legacy, Reality Saving, The Motions.
- Project imagery already in `public/projects/` stays.
- No new heavy deps (no GSAP, no Three.js, no cursor library). Use what's installed or web standards.

## References (engineer-as-craftsman with defined taste)

- Linear brand site / method pages
- Brad Frost (`bradfrost.com`) — design-engineer ethos
- Robin Rendle (`robinrendle.com`) — editorial restraint
- Rauno Freiberg (`rauno.me`) — micro-interactions
- Ben Holmes (`bholmes.dev`) — design + dev split
- Vercel design-engineer team pages

---

## 1. Visual System

### Palette

| Token | Value | Use |
|---|---|---|
| `--background` | `#0a0a0c` | Page background |
| `--ink` | `#f4f0e8` | Body & headings (paper-cream — warms the whole page; replaces pure white) |
| `--muted` | `#8a8a90` | Secondary text |
| `--rule` | `#1c1c20` | Hairlines, frame strokes |
| `--surface` | `#111114` | Elevated cards |
| `--accent` | `#b8966d` | Oxidized brass. Hover/active only. Used sparingly. |

Single chromatic accent. Everything else between near-black and paper-cream.

### Typography

| Role | Face | Notes |
|---|---|---|
| Display | **Fraunces** (variable, opsz axis) | Already loaded. Hero uses the full opsz range (scroll-driven). |
| Body / UI | **Geist Sans** | Already loaded. |
| Mono | **Geist Mono** | Already loaded. Metadata, eyebrow labels, frame title-blocks. |
| Numerals | `tabular-nums` everywhere a number renders | |

**Scale:** strict 1.250 (major third) ratio. No off-scale sizes.

### Title-block frame motif

Every meaningful surface (hero, each project, timeline entries, contact card) sits inside a **title-block frame** — modeled on architectural drawings.

```
01 / 04                                    PROJECT — 2025
─────────────────────────────────────────────────────────

                  ROOTED LEGACY

─────────────────────────────────────────────────────────
SCALE 1:1            INDEX C            REV 2026.05
```

- Top & bottom hairlines (`--rule`)
- Corner slots: section number, kind/year, scale, index, rev
- Mono small caps for corner metadata
- Center content: Fraunces display
- Reusable `<Frame>` component with corner-slot props (`topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `children`)

This motif is THE thing that ties every page together.

## 2. Signature Interactive Moves

| # | Move | Purpose | Effort |
|---|---|---|---|
| 1 | **Spec view toggle** — bottom-right `[ SPEC ]` button (also keyboard `g s`) overlays the 12-col grid + baseline + spacing guides on the current page | THE signature moment — visible system on demand | ~50 LOC, T3 |
| 2 | **Custom cursor** — small `+` crosshair, scales to circle over interactive elements | Architect's pen tip. Hidden on touch + reduced-motion. | ~30 LOC, T2 |
| 3 | **Kinetic hero name** — scroll-driven `opsz` axis animation on the hero name | Letterforms refine as visitor commits | T2 |
| 4 | **Magnetic primary CTAs** — main buttons pull toward cursor on hover | Personality moment without going maximalist | T2 |
| 5 | **Page transitions** — Next.js 15 View Transitions API; slow cross-fade between routes | No flash; signals care | T2 |
| 6 | **Frame-on-hover** — project cards animate corner metadata in on hover | Reinforces title-block motif | T1 (subtle), T2 (refined) |

## 3. Page Treatments

### `/` — Home

- Top strip: `001 / NICHOLAS PERRY` (left) · `INDEX — HOME` (center) · `REV 2026.05` (right) · hairline rule
- **Hero**: massive Fraunces wordmark (your name OR "Cyberlounge"). Scroll-driven opsz animation. Below: smaller positioning line + magnetic CTAs (Projects / Contact).
- `02 / CAPABILITIES`: framed grids for Web Dev / Cloud / Database / Platforms & CRM (carries existing skill content)
- `03 / SELECTED WORK`: three project cards, each in its own title-block frame
- Footer: title-block with index links + copyright

### `/about` — About

- Top strip: `002 / ABOUT — NICHOLAS PERRY`
- **Hero**: portrait + dossier layout. Photo in a framed plate (corner metadata: name, location, role) on the left; bio body on the right reads like a dossier entry. *No huge serif headline — the architecture is the headline.*
- `02 / EXPERIENCE`: timeline rendered as architectural drawing entries. Each entry is a framed mini-card with the year in the corner.
- `03 / PRACTICE`: three short framed cards on how you work (Clarity / Quality / Ship) — tightened from existing copy.
- **Drop** the "Beyond Tech" gaming/anime/manga section. Doesn't fit the architect framing.

### `/projects` — Projects

- Top strip: `003 / PROJECTS — INDEX`
- Single vertical list (no left/right alternation). Each project is a **full-bleed framed plate**:
  - Top corners: `0n / 03` (left) · `KIND — YEAR` (right)
  - Image inside the frame (alternates side per project)
  - Center: title in Fraunces, tagline, description body
  - Bottom corners: stack list (left) · `[ VISIT SITE → ]` accent link (right)
- Hover on the frame: corner metadata highlights, title shifts up slightly

### `/contact` — Contact

- Top strip: `004 / CONTACT — START A CONVERSATION`
- Single framed contact card centered:
  - Left half: serif "Let's talk" headline, short body, magnetic "Book a call" CTA (Cal.com)
  - Right half: channel list (GitHub, LinkedIn, Medium, Email), each row with corner metadata
- **Drop** the existing three-card "What I help with" services section — redundant with home capabilities

## 4. Tech Approach

| Concern | Choice |
|---|---|
| Fonts | Already loaded (Fraunces opsz, Geist sans/mono). Add a small client hook for scroll-driven opsz on hero. |
| Motion | `framer-motion` (installed) — fade-ups, magnetic CTAs |
| Page transitions | Next.js 15 View Transitions API (no dep) |
| Custom cursor | Hand-rolled client component (~30 LOC) |
| Spec view overlay | Hand-rolled client component (~50 LOC) — fixed overlay, grid + baseline + spacing guides |
| Title-block frames | Pure CSS — reusable `<Frame>` component with corner-slot props |
| Tailwind config | Extend with new palette tokens + precise 1.250 text scale |
| New deps | **None.** |

## 5. Sequencing

**Tier 1 — Foundation (must ship together):**
- New palette + typography scale in `globals.css` + `tailwind.config.ts`
- `<Frame>` component
- Page rewrites: Home / About / Projects / Contact with new IA + title-block frames
- Subtle frame-on-hover (CSS transitions only)
- All existing content preserved
- Build + lint pass

**Tier 2 — Signature interactions:**
- Kinetic hero name (scroll-driven opsz)
- Custom cursor
- Magnetic primary CTAs
- Page transitions via View Transitions API
- Refined frame-on-hover (corner metadata reveal)

**Tier 3 — Spec view:**
- Bottom-right `[ SPEC ]` toggle + keyboard `g s` shortcut
- Overlay component: 12-col grid + baseline + spacing tokens
- Documented in code as the "architect's signature"

Ship T1 first as a complete release. T2 follows. T3 is the polish lap.

## 6. Risks + Mitigations

| Risk | Mitigation |
|---|---|
| Custom cursor accessibility | Hide on touch (`@media (pointer: coarse)`), respect `prefers-reduced-motion`, never hide native cursor on `:focus-visible` |
| View Transitions browser support | Progressive enhancement — site works fine without |
| Scroll-driven opsz perf | `useScroll` from framer-motion + CSS custom property, throttle if needed |
| Visual regression on About if "Beyond Tech" removed | Confirm with user before deleting (already confirmed) |
| Bundle size growth | Tier-1 adds zero deps; Tier-2 only uses already-installed framer-motion + web platform |

## 7. Success Criteria

- A visitor scrolling the homepage for 5 seconds can articulate: "This person designs systems, not just code."
- Every page carries the title-block motif consistently.
- `npm run lint` + `npm run build` clean on every tier.
- Lighthouse Performance ≥ 90 on `/` after Tier 2.
- Site remains fully static (no API routes introduced).

## 8. Out of Scope

- New content surfaces (Principles, Stack, Blog) — confirmed by user
- Light mode toggle — not requested
- 3D / WebGL — not aligned with architect ethos
- New CMS or build tooling
- Mobile app version
