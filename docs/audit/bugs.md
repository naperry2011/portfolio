# Bugs

Reproducible defects observed in the codebase. Each entry includes severity, repro, evidence, and remediation status.

Bug IDs are independent from finding IDs (F-NNN). Where a bug is also a finding, both are cross-referenced.

---

## BUG-001: Project images squashed in `RevealImage` (Resolved)

**Severity:** Medium (visual defect on every project card; reported by user)
**Status:** RESOLVED at commit `48fa69d`
**Cross-reference:** F-006

**Repro (pre-fix).** Open `/projects` or scroll to the Selected Work section on `/`. The Reality Saving founder portrait (a 4:5 portrait image at 1772x2216) renders stretched horizontally to fit the 5:4 landscape container, distorting the subject's proportions.

**Evidence.** Pre-fix `src/components/RevealImage.tsx` destructured `className` from props and applied it to the wrapping `motion.div` instead of passing it through to `<Image>`. The `next/image` element with the `fill` prop fell back to `object-fit: fill` (the CSS default), stretching the asset to match the container exactly.

**Root cause.** Two bugs in one component:
1. `className` was consumed by the wrapper, not forwarded.
2. The plan assumed `object-cover` on the className would work even without the forward, but `next/image` does not inject a default `object-fit`.

**Fix applied.** `RevealImage` now takes a `fit?: "cover" | "contain"` prop and applies it via inline `style={{ objectFit: fit }}` on the `<Image>`. Default is `contain` so all three project assets (1:1 logo, 4:5 portrait, 5:4 landscape) render at native aspect ratio with the dark surface acting as a frame.

**Files:** `src/components/RevealImage.tsx:7-26`, `src/app/page.tsx:189-196`, `src/app/projects/page.tsx:113-120`.

---

## BUG-002: Hero subtext words jammed together (Resolved)

**Severity:** Medium (legibility-critical on the home hero; reported by user)
**Status:** RESOLVED at commit `d1972c0`
**Cross-reference:** F-007

**Repro (pre-fix).** Load `/`. The positioning paragraph below the hero rendered as `"Independentsoftware&clouddevelopment.Ibuildproduction-ready..."` with all spaces collapsed.

**Evidence.** Pre-fix `src/components/ReactiveText.tsx` wrapped each word in a `<span className="inline-block ...">`. CSS `display: inline-block` collapses trailing whitespace inside the box. The space character that was appended after each word (`{w}{i < words.length - 1 ? ' ' : ''}`) was inside the inline-block and got dropped.

**Root cause.** The component author followed the same pattern as `SplitText` but forgot to set `style={{ whiteSpace: 'pre' }}`, which is the standard fix for preserving whitespace inside inline-block elements.

**Fix applied.** Added `style={{ whiteSpace: 'pre' }}` to each word span. Matches the working pattern already in use in `SplitText`.

**File:** `src/components/ReactiveText.tsx:63-69`.

---

## BUG-003: OG cover image referenced but not present (Open)

**Severity:** Low (degraded social sharing experience; not blocking)
**Status:** OPEN
**Cross-reference:** F-002

**Repro.** Share any page URL on a platform that fetches OpenGraph metadata (Slack, X, LinkedIn, iMessage). The card will fail to load the image at `https://cyberlounge.net/og-cover.jpg` because the file does not exist in `public/`.

**Evidence.** `src/app/layout.tsx:20` references `images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: ... }]` for OpenGraph; `:27` references the same path for Twitter. The file is not present in `public/`.

**Impact.** OG cards fall back to a missing-image state or no image. The site itself works fine.

**Recommended fix.** Add `public/og-cover.jpg` (1200x630 PNG or JPEG). A simple wordmark + accent line on a dark or light background matches the design system. Already tracked in `docs/ai/tasks.md`.

---

## BUG-004: Two contributor email identities (Cosmetic)

**Severity:** Low (statistics inconsistency, not user-facing)
**Status:** OPEN
**Cross-reference:** F-008

**Repro.** `git shortlog -sne --all` shows three rows for one person: `perry.ai2011@gmail.com`, `nuperry2011@gmail.com`, `122832986+naperry2011@users.noreply.github.com`.

**Impact.** Contributor count on GitHub appears as 1 (de-duplicated by GitHub) but local `git log` analysis splits the author. No functional impact.

**Recommended fix.** Add a `.mailmap` at repo root:

```
Nicholas Perry <perry.ai2011@gmail.com> <nuperry2011@gmail.com>
Nicholas Perry <perry.ai2011@gmail.com> <122832986+naperry2011@users.noreply.github.com>
```

Optional. No urgency.

---

## No other reproducible bugs observed

The remaining audit findings (F-001 through F-005, F-008 onward) are not bugs in the sense of reproducible defects; they are quality, security, or operational observations. Those are in `findings.md`.

---
generated_by: codebase-audit skill v1.0
generated_on: 2026-05-19
project: C:/Users/Perry/Dropbox/PC/Documents/GitHub/portfolio
project_type: node
verification: full
---
