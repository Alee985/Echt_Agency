import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo at a subpath (alee985.github.io/Echt_Agency/),
  // but Netlify serves from the root of its own domain — Netlify sets the
  // NETLIFY env var during builds, so use that to pick the right base.
  base: process.env.NETLIFY ? '/' : '/Echt_Agency/',
  plugins: [react(), tailwindcss()],
})
