# Jujhar.com

My personal website [https://jujhar.com](https://jujhar.com)

2026-04 - Migrated from Jekyll to [Eleventy (11ty)](https://www.11ty.dev/) — source in `src/`, build output in `_site/`.

## Local Development

```bash
npm install
npm run dev      # http://localhost:4000 with live reload
```

## Build

```bash
npm run build    # one-shot build into _site/
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The `_site/` directory can also be uploaded to any static host (S3, etc.) if you skip the GH Pages workflow.
