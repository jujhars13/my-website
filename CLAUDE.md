# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for jujhar.com — an [Eleventy (11ty)](https://www.11ty.dev/) static site deployed to GitHub Pages via GitHub Actions on every push to `master`.

## Local Development

```bash
npm install         # one-time
npm run dev         # serve at http://localhost:4000 with live reload
npm run build       # one-shot build into _site/
```

Requires Node (see `.nvmrc`). There is no test suite or linter — only the 11ty build.

## Architecture

- **`src/`** — site source root
  - `_layouts/default.html` — single layout wrapping all pages
  - `_includes/head.html`, `_includes/footer.html` — shared head and footer partials (footer hosts the GA tracking and the audio-player enhancement script)
  - `_posts/` — blog posts in `YYYY-MM-DD-slug.md` format
  - `_posts/_posts.11tydata.js` — directory data: applies `tags: post`, `layout: default`, the `/YYYY/MM/DD/slug/` permalink, and computes a Title-Cased title from the filename when frontmatter doesn't set one
  - `_data/jhsdHistory.yml` — data file for the JHSD history timeline (referenced as `jhsdHistory` in templates)
  - `css/custom.css` — site-specific styles (Bootstrap 5.3.6 via `bootstrap.min.css`)
  - `CNAME` — custom domain mapping to jujhar.com
  - `sitemap.liquid` — generates `/sitemap.xml` at build time
  - `jl/`, `tests/`, `blank/`, `efk/`, `404.html`, `googleb8e00ca3c029d7f6.html` — standalone HTML areas; `.eleventy.js` adds them to `ignores` so they are passthrough-copied without Liquid processing (the AngularJS app under `jl/Bikes/Site/` would otherwise collide with Liquid's `{{ }}` syntax)
- **`.eleventy.js`** — config: input `src/`, output `_site/`, Liquid as the template engine for `.html`/`.md`/`.liquid`, layout alias `default → default.html`, passthrough copy lists
- **`.github/workflows/deploy.yml`** — builds with Node and publishes via `actions/deploy-pages`
- **`_site/`** — build output, gitignored

## Key details

- The GitHub Pages source must be set to **GitHub Actions** in repo settings (not "Deploy from a branch")
- Posts use Liquid templating; `markdownTemplateEngine: 'liquid'` lets `.md` files use `{% %}` and `{{ }}` tags
- New blog posts go in `src/_posts/` following the existing naming convention; titles are auto-derived from the filename slug unless `title:` is set in frontmatter
- The `section: music` frontmatter flag puts a post in the Music list on the homepage
