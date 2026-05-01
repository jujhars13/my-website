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

## License

Copyright (C) 2026 Jujhar Singh. Dual-licensed:

- **Source code** (templates, JavaScript, CSS, build config) — [GPL-3.0-or-later](LICENSE-CODE)
- **Content** (blog posts, prose, images, audio) — [CC BY-SA 4.0](LICENSE-CONTENT)

See [LICENSE](LICENSE) for the full breakdown. Both licenses are strong copyleft: derivative works must ship under the same license. Provided without warranty or indemnity.
