# Phase 3: Code

**Project location:** `web/` (React + Vite + TypeScript + Tailwind CSS v4)

## What was built

- Scaffolded via `npm create vite@latest web -- --template react-ts`
- Tailwind CSS v4 wired in through the official `@tailwindcss/vite` plugin (no separate PostCSS config needed)
- Theme tokens (navy/blue/teal/purple/cyan palette from the deck) defined in `src/index.css` via `@theme`, auto-generating utilities like `bg-navy`, `text-brand-blue`, `bg-brand-blue-pale`, etc.
- All copy centralized in `src/data/content.ts` (typed objects) — editing site text is a data change, not a component change
- Real assets extracted from the source `.pptx` and placed under `src/assets/` (logo, hero photo, 4 service icons, office/team photos, 5 client logos)
- Components split into `layout/` (Navbar, Footer), `sections/` (Hero, WhoWeAre, VisionMission, Values, Services, Office, Clients, Contact), and `ui/` (Container, SectionHeading)

## Pages/sections implemented (in order)

1. **Navbar** — sticky, transparent over hero → solid navy on scroll, mobile hamburger menu with slide-down panel
2. **Hero** — full-bleed navy hero image, headline, intro, two CTAs
3. **Who We Are** — text + team photo, two-column on desktop, stacked on mobile
4. **Vision & Mission** — two cards
5. **Our Values** — 3-column grid → stacks on mobile
6. **Our Services** — 4-card grid (4 cols desktop → 2 cols tablet → 1 col mobile), using each service's extracted icon
7. **Our Office** — office photo + address
8. **Our Clients** — logo wall (Tata ClassEdge, MBD Group, Navneet, Pearson, S. Chand), grayscale → color on hover
9. **Contact** — address/phone/email + a working contact form that opens a pre-filled `mailto:` (no backend required)
10. **Footer** — logo, quick links, contact snippet, copyright

## Mobile responsiveness

Verified with a headless Chrome pass (Playwright, driven against the machine's installed Chrome since no network access for browser download) at:
- **Desktop** 1440×900 — full page screenshot, all sections check out
- **Mobile** 390×844 (iPhone-sized) — hero, hamburger menu open/close, and full-page scroll all verified, sections stack correctly, no layout overflow, no console errors

All grids use Tailwind responsive breakpoints (`sm:`/`md:`/`lg:`) to collapse from multi-column to single-column on small screens; the nav collapses into a hamburger below `md`.

## Verified

- `npm run build` — TypeScript + Vite production build passes clean, no errors
- No console errors on desktop or mobile render

## Not yet wired up (flagged in Plan phase as open decisions)

- Contact form currently uses `mailto:` — no backend/email-service integration
- Using system font stack (no custom Google Font pulled in yet)
- No map embed for the office address

## How to run locally

```bash
cd web
npm install
npm run dev      # dev server
npm run build    # production build → web/dist
```

## Next Step
Proceed to **Phase 4: Commit** — initialize git (if not already) and commit the working site.
