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

### Color — LOCKED (sampled from live lokazen.in)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0A0A0B` | page base, near-black (dark sections) |
| `--bg-elev` | `#141316` | elevated dark surfaces, nav, pills |
| `--bg-light` | `#FFFFFF` | light content sections (alternating) |
| `--fg` | `#FFFFFF` | text on dark |
| `--fg-dark` | `#0A0A0B` | text on light |
| `--muted` | `#9A9A9F` | secondary on dark |
| `--muted-dark` | `#6B6B70` | secondary on light |
| `--accent` | `#FF5A1E` | vermilion orange — primary |
| `--accent-2` | `#F01E1E` | red — gradient end |
| `--glow` | `rgba(255,90,30,0.22)` | warm hero radial glow |

- **Signature gradient:** `linear-gradient(95deg, #FF5A1E → #F01E1E)` — on key headline words ("Prime Properties"), CTAs, logo "Loka", badge dot. Helpers: `.text-gradient`, `.bg-gradient-brand`.
- **Rhythm:** dark hero/feature sections alternate with white content sections (mirrors the real site).

### Type
- **Display:** ultra-bold grotesk, very tight leading (~0.98), tight tracking. Currently **Geist** Extrabold/Black (close match). Swap candidates if exact match wanted: General Sans / Clash Display / Satoshi.
- **Body:** Geist Sans. Labels: uppercase, tracking ~0.08em, small.
- Headlines are HUGE (hero ~8xl/128px desktop), centered.

### Layout
- Centered hero composition (not lower-third) — matches real site.
- Floating rounded nav bar, blurred, pinned top.
- Max content width ~1280px; 3D canvas / clip full-bleed behind.

---

## 4. The Four Sections — LOCKED (from user reference image)

> 4 scrollable, borderless sections. Each: LOKAZEN wordmark + left details + right visual, the clip's black bg bleeding seamlessly into the page (no card/border). Desktop split → stacks on mobile.

1. **Location Intelligence 2026** — building/BFI-PFI clip (`section1.mp4`). ✅ built
2. **Dual AI Scoring System** — "Two indexes. One perfect match." ⏳ awaiting clip (placeholder)
3. **Map / Location Match Overlay** — full-bleed map clip (`section2.mp4`). ✅ built
4. **Global Reach. Local Precision.** — stats (50+ Markets · 1.2M+ Properties · 99% Match Accuracy) + "See How It Works". ⏳ awaiting clip (placeholder)

> Videos play (autoplay+loop, muted), borderless. NOT scroll-scrubbed (changed per user: "video running"). Mobile gets dedicated clip versions later.

### (archived) earlier proposal — condensed from live site

> Real lokazen.in has ~9 blocks. For the 3D landing we condense to **4**. Build one at a time, in order, until done. Each gets a Higgs Field scroll-scrubbed clip + a vector.

1. **Section 1 — Hero** ✅ *built (placeholder vector)*
   - Copy: badge "Commercial Real Estate · Bangalore" → "Connecting Brands & **Prime Properties**" → "India's First AI Powered Commercial Real Estate Platform" → CTAs Find Space / List Property.
   - Vector: hero centerpiece. `[x] copy  [ ] Higgs clip  [ ] vector  [x] built(placeholder)`
2. **Section 2 — How It Works / AI Matching** (the engine)
   - Condenses "How It Works" 4 steps + "Dual AI Scoring (BFI/PFI)". Sign Up → AI Analyzes → Top 5 Matches → Close Deal.
   - Vector: an AI/data-flow or scoring object. `[ ] copy  [ ] clip  [ ] vector  [ ] built`
3. **Section 3 — Location Intelligence / Brand Map** (the proof)
   - Condenses "Brand Placements map" + "Brand Intelligence / zones" + "Powered by Location Intelligence" (footfall, demographics, competitor, accessibility). Bangalore 20+ micro-markets.
   - Vector: a 3D map / globe / city object. `[ ] copy  [ ] clip  [ ] vector  [ ] built`
4. **Section 4 — Stats + CTA + Footer** (the close)
   - "500+ Properties · 100+ Brands · Instant · 20+ Areas" → "Ready to Find Your Perfect Match?" CTA → footer (contact, links).
   - Vector: closing hero object. `[ ] copy  [ ] clip  [ ] vector  [ ] built`

> ⚠️ This 4-section split is MY proposal from the live site. Confirm or re-cut before Section 2.

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
