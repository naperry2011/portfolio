# Dependencies

Inventory and assessment of the `portfolio` project's npm dependencies.

## Production dependencies

| Package | Constraint | Installed | Latest | Purpose |
|---|---|---|---|---|
| `next` | `^15.5.18` | 15.5.18 | 16.2.6 | App framework |
| `react` | `^19.0.0` | 19.0.0 | 19.2.6 | UI runtime |
| `react-dom` | `^19.0.0` | 19.0.0 | 19.2.6 | UI runtime (DOM) |
| `framer-motion` | `^12.4.3` | 12.4.3 | 12.39.0 | Animation library |
| `react-icons` | `^5.0.1` | 5.4.0 | 5.6.0 | Icon set |
| `lenis` | `^1.3.23` | 1.3.23 | 1.3.23 | Smooth scroll |

## Dev / test / build dependencies

| Package | Constraint | Installed | Latest | Purpose |
|---|---|---|---|---|
| `typescript` | `^5` | 5.7.3 | 6.0.3 | Type checking + transpile |
| `eslint` | `^9` | 9.39.4 | 10.4.0 | Linter |
| `eslint-config-next` | `^15.5.18` | 15.5.18 | 16.2.6 | Next.js lint preset |
| `@eslint/eslintrc` | `^3` | (resolved) | (current) | Legacy ESLint config compat |
| `tailwindcss` | `^3.4.1` | 3.4.17 | 4.3.0 | Utility CSS |
| `postcss` | `^8` | (resolved) | (current) | CSS pipeline |
| `@types/node` | `^20` | 20.17.17 | 25.9.1 | Node typings |
| `@types/react` | `^19` | 19.0.8 | 19.2.15 | React typings |
| `@types/react-dom` | `^19` | 19.0.3 | 19.2.3 | React DOM typings |

## Constraint quality

- All production dependencies are pinned with caret ranges (`^x.y.z`), which is acceptable for a small static site. No `*` / `any` / `latest` wildcards.
- No exact pins (no `=x.y.z`), which means `npm install` will pick up minor and patch updates on a fresh install. Acceptable for this project's risk profile.
- No pre-1.0 community packages.

## Outdated packages

Output of `npm outdated`:

| Package | Current | Drift |
|---|---|---|
| `next` | 15.5.18 | One major behind (16.x available, 15.5.18 is latest patched 15.x) |
| `eslint-config-next` | 15.5.18 | One major behind (paired with Next) |
| `tailwindcss` | 3.4.17 | One major behind (4.x is a significant rewrite) |
| `typescript` | 5.7.3 | One major behind (6.x available) |
| `eslint` | 9.39.4 | One major behind (10.x available) |
| `framer-motion` | 12.4.3 | Minor drift (12.39 available, same major) |
| `react` / `react-dom` | 19.0.0 | Minor drift (19.2.x available) |
| `react-icons` | 5.4.0 | Minor drift |
| `@types/node` | 20.x | Two majors behind (Node 20 typings while latest is Node 25 LTS typings) |

**Assessment.** No drift is urgent. The Next 15 → 16 and Tailwind 3 → 4 jumps are non-trivial. Tailwind 4 in particular is a substantial migration. None of these is a critical security bump.

## Vulnerability scan

`npm audit` (production only):

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 0 |
| Moderate | 2 |
| Low | 0 |

The two moderate findings are the same root cause: `postcss <8.5.10` has an XSS via unescaped `</style>` in its CSS stringify output (GHSA-qx2v-qp2m-jg93). The vulnerable `postcss` is a transitive dependency of `next`.

**Risk reasoning.** This vulnerability exploits CSS stringify when an attacker can inject hostile CSS that is then re-serialized. This project does not process user-generated CSS at any layer (all CSS is authored by Nicholas at build time). The vulnerability is not exploitable in this codebase.

`npm audit fix --force` proposes downgrading Next to 9.3.3, which would brick the entire app. This is incorrect remediation advice; the issue should be closed by a future Next.js patch that bumps its bundled postcss.

**Recommended action.** Document this as an accepted risk. Re-scan after each Next 15.x patch release; the issue will clear when Next bumps its transitive `postcss`.

## Notable absent dependencies

| Missing | Implication |
|---|---|
| Test framework (Jest, Vitest, Playwright) | No automated tests. Acceptable for a portfolio site but a regression risk as the site grows. |
| Error tracking (Sentry, Bugsnag, Rollbar) | No runtime error visibility. A client-side exception is invisible to the site owner. |
| Analytics (Vercel Analytics, Plausible, Posthog) | No traffic data. By design at present; flagged for awareness. |
| Crash reporter | Same as above. |
| Form / validation library | Acceptable - no forms are submitted (the contact page uses a `mailto:` link and a Cal.com link). |
| Authentication library | Acceptable - no auth surface. |

## Recommendations

1. **Leave the postcss vulnerability as accepted risk.** Document in `docs/ai/decisions.md`. Re-scan monthly.
2. **Skip the Next 15 → 16 and Tailwind 3 → 4 upgrades for now.** Both are significant migrations and the current stack works. Revisit when there is a feature reason.
3. **Consider Vercel Analytics** when the user wants traffic visibility. One-line install; respects privacy.
4. **Consider Sentry** if the user later adds dynamic features. Currently the site is static and zero-error by design.

---
generated_by: codebase-audit skill v1.0
generated_on: 2026-05-19
project: C:/Users/Perry/Dropbox/PC/Documents/GitHub/portfolio
project_type: node
verification: full
---
