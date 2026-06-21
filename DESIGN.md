# Lokazen Landing — Design System & Build Spec

> Living doc. Updated as screens + 3D vectors come in. Source of truth for the build.

---

## 1. Brand

- **Name:** Lokazen
- **Domain:** lokazen.in
- **Essence:** Commercial Real Estate **Matching** for **Bangalore**.
- **Positioning:** Tech-led matchmaker connecting commercial property (offices, retail, warehouses) with the right occupiers/investors. Precision, trust, local intelligence.
- **Tone:** Premium, calm, confident. Not loud. "Zen" = clarity, balance, ease. "Loka" = place/world (Sanskrit). → *Finding the right place, effortlessly.*

---

## 2. Art Direction — Fully 3D

Whole page is built around **animated 3D vectors** (user-supplied). Every section anchored by a hero 3D object that reacts to scroll.

### Render approach — LOCKED: Higgs Field video, scroll-scrubbed
- **Primary path:** vectors animated as cinematic clips generated via **Higgs Field MCP** (`https://mcp.higgsfield.ai/mcp`), exported to `/public/video/*.webm|*.mp4`.
- **Playback:** clips are **scroll-scrubbed**, not autoplayed. The `ScrollVideo` component pins the clip (sticky) across the section's scroll height and maps scroll progress 0→1 onto `video.currentTime`. Scrolling = scrubbing the footage frame-by-frame.
- **Encoding:** keyframe-dense (`-g 1` h264, or VP9) so seeking is smooth; ship a **poster frame** per clip for instant first paint.
- **R3F fallback:** the `three`/R3F stack stays installed for any interactive/abstract object that's better live than baked. Section 1 currently uses an R3F placeholder until its Higgs clip exists.
- **Reduced motion:** clip holds on poster/first frame, no scrub.

#### Per-section clip pipeline
1. Generate clip in Higgs Field (from the section's vector + screen direction).
2. Drop export → `/public/video/sectionN.webm` (+ `sectionN-poster.jpg`).
3. `<ScrollVideo src="/video/sectionN.webm" poster="/video/sectionN-poster.jpg">` with the section's overlay copy as children.

### Motion language
- **Scroll = camera.** Page scroll drives a single continuous 3D camera path; sections are "stops."
- Smooth scroll via **Lenis**.
- Object idle motion: slow float / rotate (never static).
- Section transitions: parallax depth + opacity, `framer-motion`.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out). Durations 0.6–1.2s.
- Respect `prefers-reduced-motion` → freeze to a clean static frame.

---

## 3. Visual System  *(provisional — locks when screens arrive)*

### Color  *(dark, premium, "zen" — placeholder until screens)*
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0A0A0B` | page base, near-black |
| `--bg-elev` | `#141417` | elevated surfaces |
| `--fg` | `#F5F5F2` | primary text, warm white |
| `--muted` | `#8A8A85` | secondary text |
| `--accent` | `#C9A86A` | gold — CTAs, highlights (premium RE) |
| `--accent-2` | `#3B6E6A` | deep teal — zen secondary |
| `--line` | `rgba(245,245,242,0.08)` | hairlines |

### Type  *(provisional)*
- **Display:** a tight grotesk / serif-display — TBD from screens (candidates: Geist, Satoshi, or an editorial serif).
- **Body:** clean sans (Geist Sans / Inter).
- Big editorial headings, generous tracking on labels (uppercase, letter-spacing 0.08em).

### Layout
- 12-col, max-width ~1280px content, but 3D canvas is full-bleed behind.
- Generous whitespace. Content sits in lower-third / side gutters so 3D breathes.

---

## 4. The Four Sections  *(structure TBD from screens)*

> Placeholder skeleton — fill exact copy + assigned 3D vector as each screen is shared. We build **one section at a time, in order, until done.**

1. **Section 1 — Hero.** Brand statement + primary 3D vector + CTA. `[ ] screen  [ ] vector  [ ] built`
2. **Section 2 — ?**  `[ ] screen  [ ] vector  [ ] built`
3. **Section 3 — ?**  `[ ] screen  [ ] vector  [ ] built`
4. **Section 4 — ?**  `[ ] screen  [ ] vector  [ ] built`

---

## 5. Tech Stack

- **Framework:** Next.js 16 (App Router, TS, `src/`)
- **Styling:** Tailwind v4
- **3D:** `three` + `@react-three/fiber` + `@react-three/drei` + `@react-three/postprocessing`
- **Motion:** `framer-motion`
- **Smooth scroll:** `lenis`
- **Deploy:** Vercel
- **Assets:** 3D vectors in `/public/models/*.glb`; video loops (if any) in `/public/video/*.webm`.

### Performance budget
- Lazy-load canvas; suspense fallback. DPR cap 2. Single canvas, multiple section scenes where possible.
- Models: Draco/Meshopt compressed. Target < 2MB per model.
- LCP < 2.5s; ship a poster frame so first paint isn't blocked on WebGL.

---

## 6. Open Decisions (need user input)
- [ ] **Screens** for all 4 sections (visual reference).
- [ ] **3D vectors** — the specific files/shapes, and per-section assignment.
- [ ] **Render path per section** — R3F live vs Higgs Field video.
- [ ] Final **palette + fonts** (confirm against screens).
- [ ] Copy for each section.
