# Phase 2: Plan

**Stack:** React + Vite, styled with **Tailwind CSS** (fast to build, utility-first, pairs well with the navy/blue palette and small team maintenance), plain client-side anchor-link navigation (no React Router needed — it's a single page).

---

## 1. Tech Stack

| Concern | Choice | Why |
|---|---|---|
| Build tool | Vite (React + TS template) | Fast dev server, minimal config |
| Language | TypeScript | Catch content/prop mistakes early, self-documenting section data |
| Styling | Tailwind CSS | Rapid utility styling, easy to theme with the extracted navy/blue palette |
| Icons | Inline SVG / extracted PNG icons from deck | Reuse client's existing visual language instead of a generic icon library |
| Animation (optional, light) | CSS transitions + `IntersectionObserver` for fade/slide-in on scroll | No heavy dependency needed for a marketing single-pager |
| Forms | Native HTML form → `mailto:` link or simple POST to a form endpoint (e.g. Formspree) — **TBD in Code phase**, needs a decision on whether a backend is in scope | |
| Fonts | System font stack initially, or a Google Font close to the deck's sans-serif — **TBD**, can refine in Code phase | |

---

## 2. Project Structure

```
learning-platform/
├── public/
│   └── favicon (Echt logo mark)
├── src/
│   ├── assets/
│   │   ├── logo/echt-logo.png
│   │   ├── hero/hero-graduation.jpg
│   │   ├── icons/ (translation, data-analytics, k12, corporate)
│   │   ├── photos/ (office interior, team, k12-reading, call-center)
│   │   └── clients/ (tata-classedge, mbd-group, navneet, pearson, s-chand)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── WhoWeAre.tsx
│   │   │   ├── VisionMission.tsx
│   │   │   ├── Values.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Office.tsx
│   │   │   ├── Clients.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       ├── Card.tsx
│   │       └── Container.tsx
│   ├── data/
│   │   └── content.ts        # all copy + client/service data, typed
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # Tailwind directives + theme tokens
├── docs/                     # phase docs (this file, explore, etc.)
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

Content (headings, paragraphs, service/client lists, contact details) lives in `src/data/content.ts` as typed objects rather than hardcoded in JSX — makes future copy edits a data change, not a component change.

---

## 3. Design Tokens (Tailwind theme extension)

```ts
colors: {
  navy:   '#242852',  // primary / dark backgrounds, nav, footer
  blue:   { DEFAULT: '#297FD5', soft: '#629DD1', pale: '#ACCBF9', deep: '#4A66AC' },
  slate:  '#7F8FA9',  // muted text
  teal:   '#5AA2AE',
  purple: '#9454C3',
  cyan:   '#3EBBF0',
}
```
- Dark navy used for hero + footer + nav-on-scroll.
- White/pale-blue backgrounds alternate per section for visual rhythm.
- Accent colors (teal/purple/cyan) rotate across the 4 service cards for differentiation, echoing the deck.

---

## 4. Section-by-Section Plan

### Navbar (sticky)
- Logo (left) + anchor links: Who We Are, Services, Clients, Contact
- Transparent over hero, solid navy on scroll
- Mobile: hamburger → slide-down menu

### 1. Hero
- Full-bleed navy background image (`image1.jpg`, hand + graduation icon)
- Headline: "Learning Solutions" + Echt intro line
- Subtext: content categories (K-12, Corporate, E-commerce, Translation, Data services)
- Primary CTA button → scrolls to Contact
- Secondary CTA → scrolls to Services

### 2. Who We Are
- Two-column: company description text (left) + supporting photo (right, team or office)

### 3. Vision & Mission
- Two-card side-by-side layout, icon + heading + paragraph each

### 4. Our Values
- 3-column grid (stacks on mobile): Genuine & Quality Content / Technology Deployment / Budget-friendliness, each with a short icon + heading + description

### 5. Our Services
- 4-card grid (2×2 on tablet, 1-col on mobile), using slide 7's refined copy as source of truth:
  - Translation Services
  - Data Analytics
  - K-12 Educational Content
  - Corporate Business Content
- Each card: extracted flat icon, title, description, subtle hover lift

### 6. Our Office
- Address + short blurb, paired with office interior photo(s)

### 7. Our Clients
- Logo strip/grid: Tata ClassEdge, MBD Group, Navneet, Pearson, S. Chand
- Grayscale-by-default logos that go full-color on hover (common trust-badge pattern)
- Supporting line about repeat orders / testimonial of quality

### 8. Contact
- Left: address, phone numbers, email addresses (as `tel:` / `mailto:` links), maybe an embedded Google Map iframe for the Andheri East address
- Right: simple contact form (Name, Email, Message) — submission mechanism TBD

### Footer
- Logo, short tagline, quick links, contact snippet, copyright

---

## 5. Responsive & Accessibility Notes

- Mobile-first Tailwind breakpoints (`sm/md/lg`)
- Semantic HTML (`nav`, `main`, `section`, `footer`), one `h1` (hero), `h2` per section
- All images get descriptive `alt` text; client logos get `alt="<Client> logo"`
- Color contrast checked against navy backgrounds for text (white/pale-blue text on navy, dark navy text on light backgrounds)
- Keyboard-navigable nav + form

---

## 6. Open Decisions for Code Phase

1. **Contact form backend** — static `mailto:` vs. a form service (Formspree/EmailJS) vs. no backend at all for now.
2. **Font pairing** — keep system font stack or pull a Google Font.
3. **Map embed** — include a Google Maps iframe for the office address or skip it.
4. **Deployment target** (relevant later in Phase 5) — Vercel/Netlify/GitHub Pages — doesn't block coding now.

These won't block starting the build; sensible defaults will be used and flagged for review.

---

## Next Step
Proceed to **Phase 3: Code** — scaffold the Vite + React + TypeScript + Tailwind project, extract and place the needed media assets, and build out components section by section.
