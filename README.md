# Echt Learning Solutions

Marketing single-page site for **Echtian Contents Pvt. Ltd. (Echt)** — built with React, Vite, TypeScript, and Tailwind CSS.

**Live site:** https://alee985.github.io/Echt_Agency/

## Project structure

```
web/     the Vite + React + TypeScript + Tailwind app (source of the deployed site)
docs/    phase-by-phase build notes (explore → plan → code)
```

## Local development

```bash
cd web
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → web/dist
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app in `web/` and publishes `web/dist` to GitHub Pages.

One-time setup in the GitHub repo: **Settings → Pages → Source: GitHub Actions**.
