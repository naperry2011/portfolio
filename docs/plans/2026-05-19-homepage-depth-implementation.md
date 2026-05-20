# Homepage Depth Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add two new "depth" frames to the home page — `02 / APPROACH` (architectural detail sheet of four engagement principles) and `05 / NOW` (drawing-register style block of five current-state rows) — and renumber the existing Capabilities (02 → 03) and Selected Work (03 → 04) sections accordingly.

**Architecture:** Three new shared client components live in `src/components/` (`TickRule.tsx`, `DirectionalArrow.tsx`, `LeaderLine.tsx`). The two new sections are inlined directly in `src/app/page.tsx` to match the existing pattern (other pages also inline their sections). The home page becomes ~120 lines longer.

**Tech Stack:** Next.js 15.5.18 (App Router), React 19, TypeScript, Tailwind CSS 3, Framer Motion 12 (already installed), inline SVG. **No new dependencies.**

**Design source:** [docs/plans/2026-05-19-homepage-depth-design.md](2026-05-19-homepage-depth-design.md)

**Verification pattern at every task:**
1. Paste exact code from this plan
2. `npm run lint` — expect `✔ No ESLint warnings or errors`
3. `npm run build` — expect clean; all 4 app routes still prerender as static
4. If a task changes visible surfaces, also `npm run dev` and spot-check `/`
5. Commit with the provided message

**Branch convention:** Work on `main` (small solo repo, same workflow as Tier 1 and Tier 2 of the Architect redesign). Commit at every task. Do not batch.

---

## Task 1: Create `<TickRule />` component

**Files:**
- Create: `src/components/TickRule.tsx`

**Step 1: Write the file**

```tsx
import { CSSProperties } from 'react';

interface TickRuleProps {
  /** Spacing between ticks in pixels. Default 24. */
  step?: number;
  /** Tick mark color. Default 'var(--muted)'. */
  color?: string;
  /** Optional className for layout. */
  className?: string;
}

/**
 * Vertical scale-rule of tick marks - evokes the side of a drafting ruler.
 * Renders a 4px-wide column with repeating 1px horizontal ticks at `step`
 * interval. Used along the left edge of the Approach and Now frames to
 * extend the architectural-drawing metaphor.
 */
export default function TickRule({
  step = 24,
  color = 'var(--muted)',
  className = '',
}: TickRuleProps) {
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(to bottom, ${color} 0 1px, transparent 1px ${step}px)`,
    backgroundSize: `100% ${step}px`,
    backgroundRepeat: 'repeat-y',
  };
  return (
    <div
      aria-hidden
      className={`w-1 opacity-40 ${className}`}
      style={style}
    />
  );
}
```

**Step 2: Verify**
- `npm run lint` → clean
- `npm run build` → clean (component not imported anywhere yet)

**Step 3: Commit**

```bash
git add src/components/TickRule.tsx
git commit -m "feat(ui): add <TickRule /> scale-rule component

Vertical column of evenly-spaced tick marks rendered via a repeating
linear-gradient. Pure CSS, no SVG, no JS state. Used along the left
edge of the new Approach and Now frames to extend the
architectural-drawing motif.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Create `<DirectionalArrow />` component

**Files:**
- Create: `src/components/DirectionalArrow.tsx`

**Step 1: Write the file**

```tsx
interface DirectionalArrowProps {
  className?: string;
}

/**
 * Inline SVG "view direction" arrow (⟶) in the accent color.
 * Used as a row marker in the NOW frame. Crisp at any size, can carry
 * the accent color via currentColor, and avoids the rendering
 * inconsistencies of a unicode glyph across fonts.
 */
export default function DirectionalArrow({ className = '' }: DirectionalArrowProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 12"
      fill="none"
      className={`inline-block w-6 h-3 ${className}`}
      style={{ color: 'var(--accent)' }}
    >
      <path
        d="M0 6 H22 M16 1 L22 6 L16 11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
```

**Step 2: Verify**
- `npm run lint` → clean
- `npm run build` → clean

**Step 3: Commit**

```bash
git add src/components/DirectionalArrow.tsx
git commit -m "feat(ui): add <DirectionalArrow /> inline-SVG marker

A small horizontal arrow rendered as inline SVG in the accent color.
Used as the view-direction marker before each row in the NOW frame.
Crisper than a unicode glyph and carries the accent color reliably
across fonts.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Create `<LeaderLine />` component

**Files:**
- Create: `src/components/LeaderLine.tsx`

**Step 1: Write the file**

```tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface LeaderLineProps {
  /** Optional className for absolute positioning by the parent. */
  className?: string;
}

/**
 * Hand-drawn-feeling leader line that connects a margin annotation to
 * a principle title. Inline SVG with a single path; on scroll-into-view
 * the path draws itself in via stroke-dashoffset animation.
 *
 * Positioned absolutely by the parent. The SVG is 120x80 and the path
 * starts on the left edge and curves up-and-right to terminate near the
 * top-right, ending in a small tick mark.
 *
 * Respects prefers-reduced-motion by skipping the draw-in animation
 * (the line still renders, just appears instantly).
 */
export default function LeaderLine({ className = '' }: LeaderLineProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Path length is the explicit value used for dasharray; chosen empirically
  // to comfortably exceed the actual stroke length of the curve below.
  const PATH_LENGTH = 220;

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 120 80"
      fill="none"
      className={`pointer-events-none ${className}`}
      style={{ color: 'var(--accent)' }}
    >
      <motion.path
        d="M0 70 Q 40 70, 60 40 T 110 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray={PATH_LENGTH}
        initial={{ strokeDashoffset: reduced ? 0 : PATH_LENGTH }}
        animate={{ strokeDashoffset: inView ? 0 : PATH_LENGTH }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Terminal tick mark at the end of the curve */}
      <motion.line
        x1="106"
        y1="6"
        x2="114"
        y2="14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
    </svg>
  );
}
```

**Step 2: Verify**
- `npm run lint` → clean
- `npm run build` → clean (component not imported anywhere yet)

**Step 3: Commit**

```bash
git add src/components/LeaderLine.tsx
git commit -m "feat(ui): add <LeaderLine /> scroll-draw SVG component

Hand-drawn-feeling leader line (single SVG path with a quadratic
curve) that connects a margin annotation to a principle title. Uses
framer-motion useInView + stroke-dashoffset to animate the stroke in
when the parent scrolls into view. A small terminal tick fades in
after the curve completes. Respects prefers-reduced-motion.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Insert `02 / APPROACH` section + renumber Capabilities

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Read current home structure**

Open `src/app/page.tsx`. Locate the existing `{/* Marquee */}` line (around line 125) and the `{/* Capabilities */}` line (around line 128). The Approach section gets inserted BETWEEN them.

Also locate the Capabilities `<Frame ...>` opening tag (currently `topLeft="02 / CAPABILITIES"`) and change it to `topLeft="03 / CAPABILITIES"`.

**Step 2: Add imports**

In the imports block at the top of `src/app/page.tsx`, add:

```tsx
import LeaderLine from "@/components/LeaderLine";
import TickRule from "@/components/TickRule";
```

**Step 3: Define the approach data near the other data arrays**

After the existing `platforms` array (around line 79), add:

```tsx
interface ApproachPrinciple {
  n: string;
  keyword: string;
  detail: string;
  title: string;
  body: string;
}

const approach: ApproachPrinciple[] = [
  {
    n: "01",
    keyword: "DISCOVERY",
    detail: "DETAIL A",
    title: "Shape before scope.",
    body: "A clear problem statement is the first deliverable. We don't agree on a deadline until we agree on what we're actually building.",
  },
  {
    n: "02",
    keyword: "FIRST DEMO",
    detail: "DETAIL B",
    title: "Working surface by week one.",
    body: "You see something deployed and clickable within the first week of any engagement. No three-week silences before the first demo.",
  },
  {
    n: "03",
    keyword: "CHANNEL",
    detail: "DETAIL C",
    title: "One channel, one source of truth.",
    body: "One Slack, Discord, or email thread per project. Decisions get written down where you can find them later, not buried in DMs.",
  },
  {
    n: "04",
    keyword: "EXIT",
    detail: "DETAIL D",
    title: "The handoff is part of the engagement.",
    body: "When we wrap, you get the code, the docs, the operational runbook, and an exit walkthrough. No dependence on me to keep things running.",
  },
];
```

**Step 4: Insert the APPROACH frame between Marquee and Capabilities**

Replace this existing line (around line 126):

```tsx
{/* Marquee */}
<Marquee items={['INDEPENDENT', 'SHIP', 'CRAFT', 'SYSTEMS']} className="my-16" />

{/* Capabilities */}
<Frame
  as="section"
  topLeft="02 / CAPABILITIES"
  topRight="STACK"
  bottomLeft="REV 2026.05"
  bottomRight="INDEX C"
>
```

With:

```tsx
{/* Marquee */}
<Marquee items={['INDEPENDENT', 'SHIP', 'CRAFT', 'SYSTEMS']} className="my-16" />

{/* Approach */}
<Frame
  as="section"
  topLeft="02 / APPROACH"
  topRight="4 ITERATIONS"
  bottomLeft="4 PRINCIPLES"
  bottomRight="ENGAGEMENT"
>
  <div className="relative">
    {/* Scale-rule tick marks down the left edge */}
    <TickRule className="absolute left-0 top-0 h-full hidden sm:block" />

    <div className="sm:pl-8 space-y-12">
      {approach.map((p, i) => (
        <div
          key={p.n}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-12 last:pb-0 border-b border-dashed border-rule last:border-0"
        >
          {/* Margin annotation block */}
          <div className="lg:col-span-3 space-y-2">
            <span className="label label-ink">FIG. {i + 1}</span>
            <p className="label">{p.keyword}</p>
          </div>

          {/* Body block */}
          <div className="lg:col-span-9 relative">
            {/* DETAIL annotation top-right */}
            <span className="label absolute top-0 right-0 hidden sm:inline">
              ─ {p.detail} ─
            </span>

            {/* Ghosted huge numeral */}
            <span
              aria-hidden
              className="absolute -top-4 -left-2 font-serif text-8xl sm:text-9xl text-ink/[0.05] leading-none select-none pointer-events-none"
            >
              {p.n}
            </span>

            {/* Leader line from margin to title (desktop only) */}
            <LeaderLine className="absolute -top-2 -left-32 w-32 h-20 hidden lg:block" />

            <h3 className="relative font-serif text-2xl sm:text-3xl text-ink leading-tight mb-4 mt-8 sm:mt-4">
              {p.title}
            </h3>
            <p className="relative text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
              {p.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</Frame>

{/* Capabilities */}
<Frame
  as="section"
  topLeft="03 / CAPABILITIES"
  topRight="STACK"
  bottomLeft="REV 2026.05"
  bottomRight="INDEX C"
  className="mt-16"
>
```

Note three things:
1. The new Approach frame is added.
2. The existing Capabilities `topLeft` changes from `"02 / CAPABILITIES"` to `"03 / CAPABILITIES"`.
3. Capabilities gets a new `className="mt-16"` for spacing between frames.

**Step 5: Verify**
- `npm run lint` → clean
- `npm run build` → clean, all 4 routes still static, `/` size grows ~1-2 kB
- `npm run dev` → load `/`, scroll to the new Approach frame:
  - 4 principles visible, each with margin block (FIG. N + keyword) on the left and body on the right
  - DETAIL A/B/C/D annotations in top-right of each row
  - Ghosted numeral behind the title text
  - Dashed hairlines between rows
  - Tick marks on the left edge of the frame
  - On desktop scroll, the leader line for each principle draws itself in

**Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): add 02 / APPROACH frame, renumber Capabilities to 03

Four engagement principles laid out as an architectural detail sheet:
margin block (FIG. N + keyword) + body block (ghosted numeral + title
+ body) + DETAIL A/B/C/D annotation per row. Dashed hairlines between
rows. Tick-rule scale marks down the left edge of the frame. SVG
leader line per principle that draws itself in on scroll-into-view.

Capabilities frame renumbered 02 → 03; gets mt-16 spacing.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Append `05 / NOW` section + renumber Selected Work

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Add the DirectionalArrow import**

In the imports block, add:

```tsx
import DirectionalArrow from "@/components/DirectionalArrow";
```

(TickRule is already imported from Task 4.)

**Step 2: Define the `now` data near the other data arrays**

After the `approach` array (added in Task 4), add:

```tsx
interface NowRow {
  label: string;
  body: string;
}

const now: NowRow[] = [
  {
    label: "CURRENTLY SHIPPING",
    body: "Cyberlounge.net redesign. The Architect design system + Expressive motion layer.",
  },
  {
    label: "CURRENTLY LEARNING",
    body: "Variable-font axes, View Transitions API, and where editorial systems meet product surfaces.",
  },
  {
    label: "THINKING ABOUT",
    body: "How design-engineering taste compounds across projects; the line between visible system and expressive layer.",
  },
  {
    label: "OPEN TO",
    body: "Independent engagements where craft is valued and shipping cadence matters. Audits, six-week builds, fractional engineering retainers.",
  },
  {
    label: "NOT TAKING ON",
    body: "Long fixed-bid projects without weekly checkpoints. \"Rebuild our entire stack\" jobs without a discovery phase first.",
  },
];
```

**Step 3: Renumber Selected Work frame's `topLeft`**

Find the existing Selected Work `<Frame ...>` opening tag (currently `topLeft="03 / SELECTED WORK"`) and change it to `topLeft="04 / SELECTED WORK"`.

**Step 4: Append the NOW frame after Selected Work**

After the closing tag of the Selected Work `</Frame>` (right before the final `<div className="h-32" />`), add:

```tsx
{/* Now */}
<Frame
  as="section"
  topLeft="05 / NOW"
  topRight="REV 2026.05"
  bottomLeft="WHAT'S ALIVE"
  bottomRight="NEXT REFRESH 2026.08"
  className="mt-16"
>
  <div className="relative">
    {/* Scale-rule tick marks down the left edge */}
    <TickRule className="absolute left-0 top-0 h-full hidden sm:block" />

    <div className="sm:pl-8 space-y-6">
      {now.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pb-6 last:pb-0 border-b border-dotted border-rule last:border-0"
        >
          <div className="lg:col-span-4 flex items-center gap-3">
            <DirectionalArrow />
            <span className="label label-ink">{row.label}</span>
          </div>
          <p className="lg:col-span-8 text-sm sm:text-base text-ink leading-relaxed">
            {row.body}
          </p>
        </div>
      ))}
    </div>
  </div>
</Frame>
```

**Step 5: Verify**
- `npm run lint` → clean
- `npm run build` → clean, `/` size grows ~1 kB more
- `npm run dev` → load `/`, scroll to the bottom of the page:
  - Selected Work shows `04 / SELECTED WORK` (was 03)
  - The new Now frame is below it
  - 5 rows with `⟶` arrow in accent color + mono label on the left, body on the right
  - Dotted hairlines between rows
  - Tick marks on left edge of the frame
  - `REV 2026.05` and `NEXT REFRESH 2026.08` corner labels visible

**Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): add 05 / NOW frame, renumber Selected Work to 04

A drawing-register-style block of five label-value rows: Currently
Shipping, Currently Learning, Thinking About, Open To, Not Taking On.
Each row has a SVG directional arrow (accent color) + mono label on
the left, body on the right. Dotted hairlines between rows. Tick-rule
scale marks down the left edge. REV / NEXT REFRESH labels bake
quarterly-refresh accountability into the visual.

Selected Work frame renumbered 03 → 04.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Final verification + docs refresh

**Files:**
- Modify: `docs/ai/memory.md`, `docs/ai/tasks.md`, `CODE_MAP.md`

**Step 1: Final lint + build**

- `npm run lint` → expect `✔ No ESLint warnings or errors`
- `npm run build` → expect all 4 app routes (`/`, `/about`, `/contact`, `/projects`) prerender as static, no warnings

**Step 2: Visual smoke test on `npm run dev`**

Walk `/` end-to-end:
1. Hero (Nicholas Perry serif name, ReactiveText positioning, two CTAs)
2. Marquee strip
3. **`02 / APPROACH`** (new) — 4 principles, leader lines draw in on scroll, ghosted numerals visible
4. **`03 / CAPABILITIES`** (renumbered) — 4 skill groups including Platforms & CRM / GoHighLevel
5. **`04 / SELECTED WORK`** (renumbered) — 3 project cards with tilt + color-flood
6. **`05 / NOW`** (new) — 5 rows with directional arrows, dotted hairlines, REV/REFRESH labels
7. Footer

On mobile (375px width):
- Approach: margin block + body block collapse to single column
- Now: label column + body column collapse to single column
- Tick rules hidden on mobile (we added `hidden sm:block`)
- Leader lines hidden on mobile (we added `hidden lg:block`)

**Step 3: Update docs**

Append to `docs/ai/memory.md` under Implementation History:

```markdown
### 2026-05-19 — Homepage depth additions
**What was built:** Two new home-page frames pushing the Architect motif further into actual technical-drafting language: `02 / APPROACH` (architectural detail sheet with four engagement principles, FIG/DETAIL annotations, ghosted numerals, dashed hairlines, SVG leader lines that scroll-draw in) and `05 / NOW` (drawing-register-style block with five label-value rows, SVG directional arrows, dotted hairlines, REV / NEXT REFRESH metadata). Renumbered Capabilities (02 → 03) and Selected Work (03 → 04). Three new shared components: TickRule, DirectionalArrow, LeaderLine.
**Why:** User requested the home read as more "active practice" than "showcase" — depth over breadth.
**Files affected:** new `src/components/{TickRule,DirectionalArrow,LeaderLine}.tsx`; modified `src/app/page.tsx`. No new dependencies.
```

Update `docs/ai/tasks.md`: move the homepage-depth item from Up Next (if present) to Recently Completed; append:

```markdown
- [x] Homepage depth: APPROACH + NOW frames, three new shared components — 2026-05-19
```

Update `CODE_MAP.md` Site Shell / Layout Primary Files list to include:

```
- src/components/TickRule.tsx
- src/components/DirectionalArrow.tsx
- src/components/LeaderLine.tsx
```

**Step 4: Commit**

```bash
git add docs/ai/memory.md docs/ai/tasks.md CODE_MAP.md
git commit -m "docs: record homepage depth additions

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Out of Scope

- A Services / Pricing section (different goal, deferred per design doc).
- Testimonials (different goal, deferred).
- Rewriting About's `05 / PRACTICE` block (still distinct from home's new APPROACH).
- An MDX local blog (separate roadmap item).
- Updating `architecture.md`, `decisions.md`, or `llms.txt` (these were last touched after T2; another consolidated doc-sync pass is fine, but not blocking).

---

## Plan Complete

**6 tasks.** Each scoped to 2–10 minutes of edit + verify + commit. Zero new dependencies. Single home page modified plus three new ~20-LOC presentational components.

**Recommended sequencing:** Land Tasks 1–3 first (the components compile cleanly without being used; safe stepping stones). Then Task 4 (Approach + Capabilities renumber). Then Task 5 (Now + Selected Work renumber). Then Task 6 (docs).
