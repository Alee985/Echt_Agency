# Phase 1: Explore

**Source document:** `Echt_Portfolio (1).pptx` (10 slides, 24 embedded media assets)
**Client:** Echtian Contents Pvt. Ltd. ("Echt")
**Goal:** Build a Single Page Application (SPA) from this portfolio deck.

---

## 1. Brand Identity

- **Name / Logo:** "Echt" wordmark — navy blue, rounded sans-serif, with a gray accent bar above the lettering.
- **Look & feel:** polished corporate EdTech — dark navy hero imagery, clean flat icons for services, professional stock photography for office/team.
- **Hero image:** businessman's hand with a glowing graduation-cap-and-book icon on a dark navy background.

### Theme Color Palette (extracted from `theme1.xml`)

| Swatch | Hex | Role |
|---|---|---|
| Navy | `#242852` | Primary / dark backgrounds |
| Blue | `#4A66AC` | Secondary |
| Blue | `#297FD5` | Accent |
| Light Blue | `#629DD1` | Accent |
| Pale Blue | `#ACCBF9` | Tint / backgrounds |
| Slate | `#7F8FA9` | Neutral / text-muted |
| Teal | `#5AA2AE` | Accent |
| Purple | `#9454C3` | Accent |
| Purple-gray | `#9D90A0` | Accent |
| Cyan | `#3EBBF0` | Accent |

---

## 2. Content Inventory (by slide)

### Slide 1 — Hero
"Learning Solution" — Echtian Contents Pvt. Ltd. (Echt) leading the way with content development. Content Development, K-12 Educational, Corporate Courses, E-commerce and Entertainment Content, Multimedia Development, Storyline, Canva, Translation Services and Data collection & tagging Services.

### Slide 2 — Who We Are
Echtian Contents (Echt) is a leading developer of educational content and Computer-Based Learning (CBL) Courses. Helps clients create bespoke courseware — well-structured, user-friendly, affordable, and accessible. Leverages technology for customized learning solutions. Also provides translation and other content development services to top names in the industry.

### Slide 3 — Vision & Mission
- **Vision:** Achieve community engagement and inclusive learning environments through emerging technologies.
- **Mission:** Serve clients through training, research, and flexible support services; provide a coherent environment for growth in teaching and learning for clients, faculty, and learners.

### Slide 4 — Our Values
1. **Genuine and Quality Content** — deliver genuine, quality content for clients.
2. **Technology Deployment** — stay ahead in the fast-changing learning industry via the right resources and technology.
3. **Budget-friendliness** — sustainable, budget-friendly learning projects.

### Slide 5 — Our Office
Echtian Contents Pvt. Ltd. — Mumbai, Maharashtra 400059 (office interior photos included).

### Slides 6–8 — Our Services (3 near-duplicate versions; slide 7 is the most refined copy)
Four core services, each with a custom flat icon:
1. **Translation Services** — Translation, subtitling, dubbing, voiceover across 10+ languages.
2. **Data Analytics** — Data-driven insights for informed business decisions.
3. **K-12 Educational Content** — End-to-end content development for all K-12 subjects.
4. **Corporate Business Content** — Animation, corporate storyboarding, Unity development, Storyline 360, Rise, and other multimedia solutions.

**Contact info (repeated on these slides):**
- Phone: +91 9967425410, +971 05825410
- Email: info@echtlearning.com, echtlearning@gmail.com, Shavetasardana@gmail.com
- CTA (slide 7): "Contact us for demos, pilots, or partnerships"

### Slide 9 — Our Clients
"Our clients include the leading names in education as well as teaching professional forums, master training companies, etc. Repeat orders from most of our clients are a testimonial of our value generation and our service quality."

**Client logos identified in media assets:**
- Tata ClassEdge ("better teachers make better students")
- MBD Group (Estd. 1956)
- Navneet ("Knowledge is wealth")
- Pearson
- S. Chand

### Slide 10 — Contact Us
"We strive to stay in communication with our clients. Have a question about our business, or want to see if we match your specific needs? Send us a message, or give us a call."

- **Address:** 406, B-Wing, Everest Chambers, Near Marol Metro Station, Sir Mathuradas Vasanji Rd, Marol, Andheri East, Mumbai, Maharashtra 400059
- **Phone:** +91 9967425410
- **Email:** info@echtlearning.com, echtlearning@gmail.com, Shavetasardana@gmail.com

---

## 3. Media Asset Inventory

Extracted from `ppt/media/` (24 files):

| Asset | Type | Content |
|---|---|---|
| image1.jpg / image14.png | Photo (color / grayscale) | Hero: hand with glowing graduation-cap icon |
| image2.png | Logo | "Echt" wordmark |
| image3.png | Icon | Audio/speaker icon |
| image4.bin (→ jpg) | Photo | Girl reading in library (K-12 content) |
| image5.bin, image6.bin (→ jpg) | Photo | Corporate team celebrating / office team |
| image7.jpeg | Photo | Office interior (workstations, waiting chairs) |
| image8.png | Icon | Translation services (globe + language bubbles) |
| image9.png | Icon | Data analytics (monitor with charts) |
| image10.png | Icon | K-12 content (open book + lightbulb) |
| image11.png | Icon | Corporate content (screen + pencil) |
| image15.bin (→ jpg) | Photo | Business team high-five (office/corporate) |
| image16.jpg | Logo | Tata ClassEdge |
| image17.png | Logo | Pearson |
| image18.png | Logo | S. Chand |
| image19.jpeg | Logo | MBD Group |
| image20.png | Logo | (secondary mark, small) |
| image21.jpeg | Photo | Call-center / translation services rep with headset |
| image11.png | Logo | Navneet |
| image12.svg, image13.svg, image22–24.svg | Decorative | Vector shapes/accents |
| media1.mp3 | Audio | Background/embedded audio (not needed for website) |

**Note:** Client logos (Tata ClassEdge, MBD Group, Navneet, Pearson, S. Chand) are third-party trademarks. They appear in the client's own portfolio deck, so using them in an "Our Clients" showcase should be fine, but flagging for awareness.

---

## 4. Observations for Planning

- Content across the 3 "Our Services" slide variants is redundant — slide 7's copy is the cleanest and should be the source of truth.
- Natural SPA section order: **Hero → Who We Are → Vision & Mission → Our Values → Services → Our Office → Our Clients → Contact**.
- No existing website/codebase in the project directory — this is a greenfield build.
- Deck provides enough real content and imagery to avoid placeholder/lorem-ipsum text.

---

## Next Step
Proceed to **Phase 2: Plan** — define SPA structure, tech stack, and section-by-section layout before writing code.
