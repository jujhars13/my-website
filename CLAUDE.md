# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for jujhar.com — a Jekyll static site deployed via GitHub Pages from the `docs/` directory on the `master` branch. Pushes to `master` trigger automatic deployment.

## Local Development

```bash
# Serve locally at localhost:4000 with live rebuild
docker run -it --rm \
  -v ${PWD}/docs:/srv/jekyll \
  -p 4000:4000 \
  jekyll/jekyll \
  jekyll serve --watch
```

There is no test suite, linter, or build step beyond Jekyll's own build.

## Architecture

- **`docs/`** — Jekyll source root (GitHub Pages serves from this directory)
  - `_config.yaml` — Jekyll config (kramdown markdown, rouge highlighting, permalink: pretty)
  - `_layouts/default.html` — single layout wrapping all pages
  - `_includes/head.html`, `_includes/footer.html` — shared HTML head and footer partials
  - `_posts/` — blog posts in `YYYY-MM-DD-slug.md` format with YAML front matter
  - `_drafts/` — unpublished drafts
  - `_data/jhsd-history.yml` — data file for the JHSD history timeline
  - `css/custom.css` — site-specific styles (Bootstrap 3 is used via `bootstrap.min.css`)
  - `CNAME` — custom domain mapping to jujhar.com
- **Root** — only contains this file, README.md, and .gitignore

## Key Details

- Uses Bootstrap 3 for styling and jQuery 3.7.1
- Google Analytics tracking is in `docs/_includes/footer.html`
- New blog posts go in `docs/_posts/` following the existing naming convention
- The `docs/_site/` directory is the built output and is gitignored
