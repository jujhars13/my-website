# Jujhar.com

My website [https://jujhar.com](https://jujhar.com)

Built with [Eleventy (11ty)](https://www.11ty.dev/) — source in `src/`, build output in `_site/`.

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

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The `_site/` directory can also be uploaded to any static host (S3, etc.) if you skip the GH Pages workflow.

> **GitHub Pages config:** the repo's Pages source must be set to **GitHub Actions** (not "Deploy from a branch").
