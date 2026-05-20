# Findings Register

Severity-ranked findings from the audit. Use this as the working list for remediation.

Format: `F-NNN: Title (Severity / Dimension)` with bolded `**Evidence:**`, `**Impact:**`, `**Recommendation:**` blocks. Each finding tagged VERIFIED, STATIC-ONLY, or HYPOTHESIS.

---

## F-001: No automated CI gate before deploy (Medium / Operational Readiness)

**Verification:** VERIFIED

**Evidence.** `.github/workflows/` directory does not exist. The repo deploys via Vercel's GitHub integration on every push to `main`. There is no GitHub Actions workflow running `npm run lint` or `npm run build` as a status check.

**Impact.** A push that breaks lint or build will fail at Vercel's build step (deploy fails, prod stays on previous version), so production is protected. However, the developer only learns of the breakage after pushing. For a single-author project this is acceptable; if anyone else ever contributes, the lack of a PR-gated CI check becomes a problem.

**Recommendation.**
1. Add `.github/workflows/ci.yml` running `npm ci && npm run lint && npm run build` on pull requests to `main`.
2. Add branch protection on `main` requiring the workflow to pass before merge.

Low effort (15 minutes). High value if the project ever takes a contributor.

---

## F-002: Referenced OG cover image not present (Low / Code Quality)

**Verification:** VERIFIED

**Evidence.** `src/app/layout.tsx:20` and `:27` reference `/og-cover.jpg`. `public/og-cover.jpg` does not exist.

**Impact.** Social-share cards (Slack, X, LinkedIn, iMessage) fall back to a missing-image placeholder. Brand impression degraded on link previews.

**Recommendation.** Add `public/og-cover.jpg` at 1200x630. A wordmark + tagline composition matches the editorial system. Already tracked in `docs/ai/tasks.md`.

---

## F-003: Single author identity split across three emails (Low / Git Hygiene)

**Verification:** VERIFIED

**Evidence.** `git shortlog -sne --all` returns three rows for the same person.

**Impact.** Local git analytics misrepresent contributor count. GitHub's UI auto-merges by user, so the public-facing repo page is correct. No production impact.

**Recommendation.** Add a `.mailmap` at repo root. Optional. See `bugs.md#BUG-004` for the exact stanza.

---

## F-004: Inconsistent commit message quality (Low / Git Hygiene)

**Verification:** VERIFIED

**Evidence.** The recent (this audit's session) commits follow Conventional Commits with scoped messages and bodies. Earlier commits include `updates`, `udates`, `Portfolio updat`, `ui/ux change`. Roughly 13 of 53 commits carry single-word messages.

**Impact.** History is harder to navigate. Bisecting through the noise-message era requires reading diffs. For a solo project this is annoying but not blocking.

**Recommendation.** Going forward, keep the Conventional Commits convention already adopted in the recent burst. No need to rewrite history.

---

## F-005: Two moderate npm vulnerabilities not directly fixable (Low / Security)

**Verification:** VERIFIED (via `npm audit`)

**Evidence.** `postcss <8.5.10` (transitive dependency of `next`) carries GHSA-qx2v-qp2m-jg93, an XSS via unescaped `</style>` in CSS Stringify Output. Two moderate findings, same root cause. `npm audit fix --force` proposes downgrading Next to 9.3.3 (wrong remediation - would brick the app).

**Impact.** The vulnerability exploits a path where the attacker supplies hostile CSS that is then re-serialized. This project authors all CSS at build time and accepts no user CSS at any layer. The vulnerability is not reachable from any code path in this codebase.

**Recommendation.**
1. Document as accepted risk in `docs/ai/decisions.md` as a new ADR.
2. Re-run `npm audit` on every Next 15.x patch release. The finding will clear when Next bumps its bundled `postcss`.
3. Do not run `npm audit fix --force` for this advisory.

---

## F-006: BUG-001 (Resolved) - Image squashing in RevealImage (Medium / Code Quality)

**Verification:** VERIFIED (reproduced, fixed, re-verified)

**Evidence.** See `bugs.md#BUG-001`. Resolved at `48fa69d`.

**Impact.** Pre-fix: every project image visibly stretched, especially the Reality Saving founder portrait. Brand impression degraded.

**Recommendation.** Closed. The component now applies `objectFit` via inline style, guaranteed to take effect. A regression test would be useful but is not justified for a static site of this size.

---

## F-007: BUG-002 (Resolved) - ReactiveText word spacing (Medium / Code Quality)

**Verification:** VERIFIED (reproduced, fixed, re-verified)

**Evidence.** See `bugs.md#BUG-002`. Resolved at `d1972c0`.

**Impact.** Pre-fix: hero subtext on `/` was unreadable.

**Recommendation.** Closed. The fix mirrors the working pattern in `SplitText`. A linter rule or shared helper for word-splitting + whitespace handling would prevent this category of regression but is overkill for the current surface area.

---

## F-008: Hardcoded social and scheduling URLs scattered across components (Low / Code Quality)

**Verification:** STATIC-ONLY

**Evidence.**
- `src/app/contact/page.tsx:7-10`: Four hardcoded social/handle URLs.
- `src/app/contact/page.tsx:69`: Hardcoded `https://cal.com/cybercap2011`.
- `src/components/Footer.tsx:38, 41, 44`: Same social URLs duplicated.

**Impact.** Changing the Cal.com booking link or any social handle requires editing multiple files. No correctness impact today but a foot-gun if the user rebrands.

**Recommendation.** Extract a `src/lib/contact.ts` or similar module:

```ts
export const CONTACT = {
  github: "https://github.com/naperry2011",
  linkedin: "https://www.linkedin.com/in/naperry2011/",
  medium: "https://medium.com/@naperry2011",
  email: "perry.ai2011@gmail.com",
  cal: "https://cal.com/cybercap2011",
} as const;
```

Import from contact page and footer. Single source of truth. Low effort (15 minutes).

---

## F-009: No client-side error tracking (Low / Operational Readiness)

**Verification:** VERIFIED (no Sentry, Bugsnag, Rollbar, or analytics SDK in `package.json`)

**Evidence.** `package.json` shows no error-tracking dependency.

**Impact.** Client-side exceptions (e.g., framer-motion edge case, missing image, hydration error) are invisible to the site owner. The user only learns of issues if a visitor reports them. For a static portfolio with low traffic this is acceptable; for a lead-gen surface (which this site is) it is a small business risk.

**Recommendation.** When the user adds dynamic features or starts driving traffic to the site (e.g., paid ads, outbound), install Sentry's free tier. One-line install via the Next.js Sentry SDK. Optional for now.

---

## F-010: No traffic analytics (Low / Operational Readiness)

**Verification:** VERIFIED (no analytics SDK in `package.json`)

**Evidence.** No Vercel Analytics, Plausible, or other analytics installed.

**Impact.** The user has no signal on traffic, conversion (clicks on Cal.com link), or referrer sources. Currently by design.

**Recommendation.** Decide intentionally whether analytics is wanted. If yes: Vercel Analytics is the lowest-friction option (one-line install, privacy-respecting, no cookie banner needed). If no: leave alone.

---

## F-011: No tests at any layer (Low / Code Quality)

**Verification:** VERIFIED

**Evidence.** No `__tests__/`, `*.test.tsx`, `*.spec.tsx` files. No Jest, Vitest, Playwright, or Testing Library in `package.json`.

**Impact.** Visual regressions and component behavior regressions are caught only by manual review on Vercel after deploy. For a single-author static site the cost-benefit currently disfavors adding tests. If the site grows to include a contact form, payment integration, or any dynamic surface, this becomes a real risk.

**Recommendation.** Defer until a feature warrants the investment. Document the position in `docs/ai/decisions.md` so future-Nicholas does not feel guilty about it.

---

## F-012: Two distinct framer-motion import patterns (Low / Code Quality)

**Verification:** STATIC-ONLY

**Evidence.** `src/app/page.tsx` uses `MotionDiv` from `@/components/MotionWrapper`. `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/contact/page.tsx` import `motion` directly from `framer-motion`. The wrapper exists because `motion.div` cannot be used in a server component (it needs a `'use client'` boundary); pages that are already `'use client'` import directly.

**Impact.** Pattern inconsistency. New code may pick either path. Already documented in `docs/ai/decisions.md` (ADR-002).

**Recommendation.** Accept as a deliberate trade-off. The wrapper is needed for server-rendered home, the direct import is fine for already-client pages.

---

## F-013: Hardcoded REV labels on every page (Informational / Code Quality)

**Verification:** STATIC-ONLY

**Evidence.** Each page renders `<span className="label">REV 2026.05</span>` as a hardcoded string. To update the displayed revision month, four files need editing.

**Impact.** Cosmetic. The label is decorative (it does not drive any logic) and the user is aware of the duplication.

**Recommendation.** Extract a single constant `SITE_REV = "2026.05"` in a shared file if the user wants to update the label monthly. Otherwise leave alone (the label may be intentionally static as a design element).

---

## F-014: Two production deps drifted within minor band (Low / Operational Readiness)

**Verification:** VERIFIED

**Evidence.** `framer-motion ^12.4.3` resolved to 12.4.3 but 12.39.0 is available. `react ^19.0.0` resolved to 19.0.0 but 19.2.6 is available.

**Impact.** Missing bug fixes and perf improvements from the upstream minor versions. No known security implication.

**Recommendation.** Run `npm update` periodically (monthly). Will pick up minor + patch versions within the caret ranges already defined.

---

## Findings not raised

Areas reviewed and intentionally not flagged:

- **Auth / session model.** No auth surface exists. The site is fully public. No finding.
- **Persistence.** No localStorage, no cookies, no database writes. No PII handling. No finding.
- **Network leak surface.** No outbound fetch from client code. No tokens. No finding.
- **Console logging in production.** Zero `console.log` / `console.error` / `console.warn` in `src/`. Clean.
- **Secret hygiene.** Zero secret-pattern hits across full git history. Zero `.env` or credential files ever added. `.gitignore` correctly excludes `.env*` and `*.pem`. Clean.
- **Permissions / over-scoping.** N/A (web, no native).
- **IaC / cloud config.** N/A (Vercel-managed deploy; no Terraform, CDK, Serverless Framework, or Kubernetes).

---
generated_by: codebase-audit skill v1.0
generated_on: 2026-05-19
project: C:/Users/Perry/Dropbox/PC/Documents/GitHub/portfolio
project_type: node
verification: full
---
