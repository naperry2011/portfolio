# Git Analysis

Analysis of the `portfolio` repository's commit history, contributor pattern, and hygiene.

## Topline

- **Total commits:** 53 across all branches
- **Active branches:** `main` only (no feature branches, no release branches)
- **Tags:** none
- **Repo size:** 8.7 MB `.git`, 643 KB `public/` static assets
- **Large blobs of concern:** none. The largest tracked files are JPEG / WebP images under 500 KB.

## Contributors

Single human contributor across three email identities (same person).

| Author | Email | Commits | Notes |
|---|---|---|---|
| Nicholas Perry | `perry.ai2011@gmail.com` | 35 | Primary identity, recent work |
| Nicholas Perry | `nuperry2011@gmail.com` | 15 | Earlier identity (2025 initial build) |
| Nicholas Perry | `122832986+naperry2011@users.noreply.github.com` | 3 | GitHub web edits |

**Observation.** Two distinct email identities for the same author is a minor hygiene issue (statistics about contributor activity look split). Easily resolved with `.mailmap` if the user cares about clean attribution.

## Cadence

| Period | Commits | Notes |
|---|---|---|
| 2025-02 | 18 | Initial cyberpunk portfolio build, single short burst |
| 2026-05 | 35 | Full redesign session (this audit covers this period) |
| (between) | 0 | 15-month gap, no work on the repo |

Pattern: short, dense bursts of activity separated by long quiet periods. Consistent with a personal portfolio worked on opportunistically rather than a product with sustained engineering investment.

## Commit message quality

Recent work (last 30 commits) follows Conventional Commits with scoped messages and explanatory bodies. Quality is high.

Sample from the recent burst:
- `feat(theme): switch to light mode + fix ReactiveText word spacing`
- `feat(t2): page transition curtain via View Transitions API`
- `fix(t2): stop squashing project images in RevealImage`
- `docs: record Tier 1 Architect redesign`

Earlier commits (the 2025-02 burst and a handful of 2026-05 edits made directly through the GitHub web UI) are sloppy:
- `updates`
- `udates` (typo)
- `Portfolio updat`
- `new_look`
- `photos adding`
- `ui/ux change`

**Distribution.** Approximately 40 of 53 commits carry meaningful messages; the remaining 13 are single-word or near-empty messages clustered in the initial build and in user-driven edits made outside the AI-assisted workflow.

## Branching, merges, force-push evidence

- No feature branches, no release branches, no PRs in history.
- One `Merge branch 'main' of github.com:naperry2011/portfolio` commit (`1507915`) indicating a multi-machine push conflict was resolved locally.
- No force-push markers (`--force` reflog evidence) visible from the standard log.
- All work lands directly on `main`. This pattern is appropriate for a solo personal site but would be inappropriate for a team project.

## Hygiene scorecard

| Dimension | Score | Notes |
|---|---|---|
| `.gitignore` quality | Good | Covers `/node_modules`, `/.next`, `/build`, `.env*`, `.vercel`, `*.pem`, `*.tsbuildinfo`, `.DS_Store` |
| Secret hygiene (git history) | Clean | Zero hits for AWS keys, bearer tokens, private keys, generic `api_key=` patterns. No `.env*`, `*.keystore`, `service-account.json`, or `credentials.json` ever added to history |
| Commit message hygiene | Mixed | Recent work is excellent; legacy commits are sloppy |
| Branching discipline | N/A | Solo project, no branching needed |
| Author identity | Minor | Two emails for same person (could be unified via `.mailmap`) |
| Tags / release tracking | None | No semantic versioning, no release tags |

## What we cannot see from git alone

- Whether the GitHub remote has branch protection on `main` (HYPOTHESIS: likely not, given the direct-push workflow).
- Whether previous force-pushes erased history (the reflog on this clone shows none, but a destructive force-push to the remote would not appear here).
- Vercel deploy history and rollback frequency.

---
generated_by: codebase-audit skill v1.0
generated_on: 2026-05-19
project: C:/Users/Perry/Dropbox/PC/Documents/GitHub/portfolio
project_type: node
verification: full
---
