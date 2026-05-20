# Homepage Depth - Design Document

**Date:** 2026-05-19
**Status:** Approved (brainstorm complete, ready for implementation planning)
**Builds on:** ADR-005 (Architect motif), ADR-006 (Expressive layer)

---

## Goal

Flesh out the homepage to communicate **depth and expertise** (how Nicholas thinks), not just **what he's shipped**. Add two new sections that signal active, opinionated, ongoing practice. The visual treatment pushes the existing Architect motif further into the language of real technical drafting (callouts, leader lines, drawing registers) so the additions feel like an evolution of the system, not a new layer pasted on top.

## Constraints

- Stay within the current visual system (Fraunces serif, Geist sans, Geist Mono, ink/muted/rule/accent tokens).
- Use only what's installed (framer-motion, lenis) plus inline SVG. No new dependencies.
- Both new frames must be responsive (collapse cleanly to a single column on mobile).
- Respect `prefers-reduced-motion` for any motion added.
- Numbered indexes need renumbering (current `02 / CAPABILITIES`, `03 / SELECTED WORK` shift).

## Information Architecture

New home flow:

```
001 / Title block strip
Hero (SplitText name + ReactiveText positioning + CTAs)
Marquee word strip
02 / APPROACH            ← NEW
03 / CAPABILITIES        (was 02)
04 / SELECTED WORK       (was 03)
05 / NOW                 ← NEW
Footer
```

Narrative arc: positioning → how I work → what I know → what I've shipped → where my head is right now. The voice-y sections (Hero, Approach, Now) bookend the catalog sections (Capabilities, Selected Work).

---

## Section 1 - `02 / APPROACH`

### Purpose

Articulate four engagement principles distinct from the engineering values in About's `05 / PRACTICE` block. Practice = engineering taste. Approach = operational rhythm of working with Nicholas.

### Content (initial draft - Nicholas can edit)

```
01  Shape before scope.
    A clear problem statement is the first deliverable. We don't agree
    on a deadline until we agree on what we're actually building.

02  Working surface by week one.
    You see something deployed and clickable within the first week of
    any engagement. No three-week silences before the first demo.

03  One channel, one source of truth.
    One Slack, Discord, or email thread per project. Decisions get
    written down where you can find them later, not buried in DMs.

04  The handoff is part of the engagement.
    When we wrap, you get the code, the docs, the operational runbook,
    and an exit walkthrough. No dependence on me to keep things running.
```

### Visual treatment - Architectural detail sheet

Frame metadata:
- Top-left: `02 / APPROACH`
- Top-right: `4 ITERATIONS`
- Bottom-left: `4 PRINCIPLES`
- Bottom-right: `ENGAGEMENT`

Each principle is a row inside the frame with a 12-col grid layout on desktop, single column on mobile:

| Cols | Content |
|---|---|
| 1-3 (margin block) | `FIG. N` mono label, short uppercase keyword ("DISCOVERY", "FIRST DEMO", "CHANNEL", "EXIT"), small left-edge tick marks |
| 4-11 (body block) | Giant ghosted Fraunces numeral behind body text (low opacity, e.g. `text-ink/[0.04]`), principle title in Fraunces, body in Geist sans muted |
| Top-right of row | `─ DETAIL A ─` mono annotation (A/B/C/D varies per row) |

Between rows: **dashed hairlines** in the rule color (not solid), evoking drafting-paper fold lines.

**The signature SVG move:** a hand-drawn-feeling **leader line** stroke that connects each margin annotation to the principle title. Implementation: one inline `<svg>` per principle with a single `<path>` describing a short angled or curved stroke (hairline width, accent color, e.g. `stroke-width="1"`). The path goes from the right edge of the margin block, curves up and over, and terminates at the principle title with a small terminal mark (a tick or dot, no arrowhead).

On scroll-into-view, the leader line draws itself in (using `stroke-dashoffset` animation). This rhymes with the scroll-draw frame hairlines already in T2.

### Margin keyword mapping

| # | Keyword | DETAIL tag |
|---|---|---|
| 01 | DISCOVERY | DETAIL A |
| 02 | FIRST DEMO | DETAIL B |
| 03 | CHANNEL | DETAIL C |
| 04 | EXIT | DETAIL D |

### Tick marks (scale rule)

Down the left edge of the frame (outside or inside, designer's call during implementation), small horizontal ticks every 24px in `--muted` color. Implementation options:

1. Pure CSS: `background-image: linear-gradient(to bottom, var(--muted) 0 1px, transparent 1px 24px)` on a 4px-wide column.
2. Inline SVG with `<line>` repeats.

Either works. Pick whichever has fewer rendering artifacts at zoom.

---

## Section 2 - `05 / NOW`

### Purpose

A "Now page" section ([nownownow.com](https://nownownow.com) movement) refreshed quarterly. Communicates that the site (and Nicholas's practice) is alive, current, and selective. The "Open to / Not taking on" pair is the unique credibility move.

### Content (initial draft - Nicholas can edit)

| Label | Value |
|---|---|
| CURRENTLY SHIPPING | Cyberlounge.net redesign. The Architect design system + Expressive motion layer. |
| CURRENTLY LEARNING | Variable-font axes, View Transitions API, and where editorial systems meet product surfaces. |
| THINKING ABOUT | How design-engineering taste compounds across projects; the line between visible system and expressive layer. |
| OPEN TO | Independent engagements where craft is valued and shipping cadence matters. Audits, six-week builds, fractional engineering retainers. |
| NOT TAKING ON | Long fixed-bid projects without weekly checkpoints. "Rebuild our entire stack" jobs without a discovery phase first. |

### Visual treatment - Drawing register / title block

Frame metadata:
- Top-left: `05 / NOW`
- Top-right: `REV 2026.05`
- Bottom-left: `WHAT'S ALIVE`
- Bottom-right: `NEXT REFRESH 2026.08`

Each row is a 12-col grid:
- Cols 1-4: directional `⟶` glyph (inline SVG, accent color) + mono uppercase label
- Cols 5-12: content body in Geist sans

Between rows: **dotted hairlines** (one step finer than the dashed in Approach, to differentiate the two new frames). Tick marks down the left edge same as Approach.

The `⟶` arrow is a **shared inline SVG component**, not a unicode glyph, so it can carry the accent color, animate, and stay crisp at any size. A single `<DirectionalArrow />` component reused across both new frames.

### Refresh discipline

The "REV 2026.05" / "NEXT REFRESH 2026.08" labels bake an accountability cue into the design - Nicholas (or future-Nicholas) knows when the Now block is stale by visual inspection. Quarterly cadence.

---

## Shared components introduced

| Name | Purpose | Used by |
|---|---|---|
| `<LeaderLine />` | Inline SVG drawing a hand-feeling stroke from margin to body, with scroll-draw animation | Approach (4x) |
| `<DirectionalArrow />` | Inline SVG `⟶` glyph in accent | Now (5x), possibly future frames |
| `<TickRule />` | Vertical scale-rule of tick marks | Approach + Now (left edge) |

All three are simple presentational components, no props beyond optional `className`. Each ~10-25 LOC.

## Section ordering changes

The numbering on the existing frames shifts:

| Frame | Old number | New number |
|---|---|---|
| (NEW) APPROACH | - | 02 |
| CAPABILITIES | 02 | 03 |
| SELECTED WORK | 03 | 04 |
| (NEW) NOW | - | 05 |

The home page's title-block strip stays `001 / NICHOLAS PERRY`.

Other pages' numbering is independent (About is `002 / ABOUT...`, Projects is `003 / PROJECTS...`, Contact is `004 / CONTACT...`). No conflict.

---

## Motion budget

| Element | Motion |
|---|---|
| Frame hairlines (existing) | Already animate via T2's scroll-draw Frame |
| Leader line per principle | `stroke-dashoffset` from full to 0 over ~900ms when row enters viewport |
| Tick marks | Static (no motion) |
| Directional arrows in Now | Static (no motion; the row content itself fades in via existing motion patterns) |

All new motion respects `prefers-reduced-motion`.

---

## Risks + Mitigations

| Risk | Mitigation |
|---|---|
| Renumbering existing frames breaks deep links | No section anchors are used today; safe to renumber. |
| Two new frames push the home page longer | Already a long scroll; adding ~600-800px on desktop. Acceptable for a portfolio. |
| Leader-line SVG rendering quirks across browsers | Use vector-effect="non-scaling-stroke" on the path; test in Safari + Firefox after T2 transition curtain. |
| Now block goes stale | Visual reminder built in (REV + NEXT REFRESH labels). User commits to a quarterly check in their calendar. |
| Initial draft content is "Claude's voice" | Drafts are placeholders; Nicholas reviews + rewrites in his own voice before merge. |

## Success criteria

- New home reads as substantially more "active practice" than "showcase" within the first scroll.
- Architectural metaphor is visibly extended (not pasted-on) - leader lines, FIG/DETAIL annotations, tick marks all feel part of the same drawing language as the existing frames.
- Build remains clean (lint + build, all 4 routes still prerender static).
- All effects degrade cleanly under `prefers-reduced-motion` and on touch.

## Out of scope

- Adding a Services or Pricing section (different goal, deferred).
- Adding testimonials (different goal, deferred).
- Rewriting About's `05 / PRACTICE` block (still distinct from home's new APPROACH).
- An MDX blog (a separate roadmap item).
