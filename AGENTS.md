# c-cabrera Codex Instructions

Purpose:
- keep repository-specific guidance close to Carmen's personal website
- preserve the site's current structure and visual conventions
- make recurring maintenance tasks discoverable

Project scope:
- This repository contains Carmen Cabrera's personal Quarto website.
- The rendered site is committed under `docs/` for GitHub Pages.
- Source pages live in top-level Quarto sections such as `index.qmd`,
  `publication/`, `courses/`, `project/`, `posts/`, and `recent/`.

Before substantial work:
- Check `git status --short` and avoid overwriting unrelated changes.
- Work on a branch, not directly on `main`, unless Carmen explicitly asks.
- Prefer existing Quarto, CSS, and content patterns over redesigning sections.

Navigation and content structure:
- Keep the main navigation simple: Home, Publications, Courses, Projects,
  Updates.
- Use `publication/` for scholarly outputs and citable publications.
- Use `courses/` for open teaching materials.
- Use `project/` for funded or research project descriptions.
- Use `posts/` for Updates.
- Keep section landing pages lightweight and list-based unless Carmen asks for
  a richer layout.

Updates:
- Updates index entries should be concise, list-based, and link to the full
  post.
- Individual update posts may be narrative, but should use the personal website
  style rather than copying another website's visual layout.
- Avoid author/category metadata on Updates unless Carmen explicitly asks.

Publications:
- The publications list is generated from Carmen's Google Scholar profile by
  `scripts/update_publications_from_scholar.R`.
- The generated source file is `publication/_scholar_publications.md`.
- For publication refreshes, run:

```bash
Rscript scripts/update_publications_from_scholar.R
quarto render publication/index.qmd --no-clean
```

- Google Scholar may rate-limit requests. If the update script fails because of
  rate limiting, keep the existing publication list and report the failure.

Rendering and validation:
- After content, navigation, or CSS changes, render the affected Quarto page.
- Render the full site only when needed, because it can create broad generated
  `docs/` diffs.
- If the task affects visible layout, preview locally and verify the relevant
  page in the browser.
- Quarto may emit existing SCSS variable warnings in this repo. Do not treat
  those warnings as new failures unless rendering stops.

Git workflow:
- Summarize changes and checks before committing.
- Do not commit until Carmen explicitly approves, unless she has already asked
  for a commit in the current task.
- Stage only relevant files.
- Use concise commit messages in the style: `Add updates section and debiasR launch post`.
