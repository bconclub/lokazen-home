# Changelog

## 2026-06-22 · Consistent desktop text→clip spacing

- Portrait clips were centered in their column, floating far from the text while
  square/tall clips sat near it — inconsistent gaps. Now portrait clips align toward
  the text column on desktop (center on mobile). All sections share a 32px gap.

## 2026-06-22 · Fix §3 portrait overflow on mobile

- Portrait clip was 570px tall on mobile → content overflowed the pinned viewport,
  clipping the text and leaving awkward space. Cap portrait smaller on mobile
  (max-w 200px / portraitWide 220px; desktop unchanged 440px) + trim top padding
  (pt-20). §3 content now 653px, fits the ~700px pin area cleanly.

## 2026-06-22 · Mobile scrub much slower (was too fast)

- Mobile section 140vh → 230vh: pin travel 40vh → 130vh, so the clip scrubs over
  ~104vh of scroll (was ~32vh). A single swipe no longer blasts through the whole
  animation. Desktop unchanged (150vh).

## 2026-06-22 · Proper staggered fade-ins + per-device scroll length

- Real entrance animations: eyebrow → heading → sub → chips/line → button fade +
  rise in, staggered, via framer-motion, re-triggered each time a section scrolls/
  snaps into view (useInView, rect-based). Clip fades in too. (CSS transition delays
  were getting reset by re-renders — switched to framer-motion.)
- Scroll length per device: mobile 140vh (slower scrub — was too fast), desktop 150vh
  (shorter — was too long).

## 2026-06-22 · Reliable section snapping (CSS on mobile, JS on desktop)

- Mobile snap was unreliable: JS scroll-to fights touch momentum. Split by platform:
  mobile now uses native CSS scroll-snap (`scroll-snap-type: y proximity` +
  `scroll-snap-align: start` under `pointer: coarse`) which cooperates with momentum;
  desktop keeps the Lenis JS snap (verified advancing past the gap with a real scroll).
- Fixes the "too much space after a section" gap — sections lock in cleanly.

## 2026-06-22 · Device-specific scroll speed (desktop slower, mobile faster)

- Section height now responsive: mobile 120vh (pin travel 20vh → snappier), desktop
  185vh (travel 85vh → slower/more deliberate). Fixes "desktop too fast, mobile too
  slow." Scrub + snap scale with travel automatically. Tunable via the two heights.

## 2026-06-22 · Auto-snap to next section at 80% + bigger §3 portrait

- New ScrollSnap: once a pinned clip reaches 80%, auto-advances (smooth) to the next
  section so the next clip starts — skips the long scroll-out tail. Downward-only,
  one-shot per section, cooldown so it never fights the user. Lenis on desktop,
  native smooth scroll on mobile. COMPLETE_AT back to 0.8.
- §3 portrait clip enlarged (max-w 360 → 440) so it fills tighter, less empty space.

## 2026-06-22 · Tighten scroll pacing (less scroll per section)

- Section height 160vh → 130vh: pin travel halved (60vh → 30vh), so each clip plays
  over much less scroll.
- Clip completes at 85% of travel (COMPLETE_AT 1 → 0.85), then a short tail snaps to
  the next section. Two knobs to dial: section height (scroll amount) + completion %.

## 2026-06-22 · Swap §3/§4 clips

- §3 (For Property Owners) now uses the portrait-tower sequence; §4 (Location
  Intelligence) now uses the iso-city map sequence. Copy + alternating sides unchanged.

## 2026-06-22 · New §2 clip, snap-to-next on clip end, top padding, text fade-in

- §2 (For Brands) → new Section 2 clip (BFI/PFI cube), 49-frame WebP sequence.
- Clip now completes at 100% of pin travel (COMPLETE_AT=1) so the next section
  comes in right as the animation ends — no trailing dead scroll.
- Top padding on section content (pt-24/md:pt-20) so the heading clears the fixed
  logo header (was colliding with "Powered By AI").
- Text (eyebrow/H1/sub/CTA) fades + rises in on scroll-into-view via new FadeIn.

## 2026-06-22 · Mobile-smooth scrub: image-sequence canvas (Apple technique)

- Replaced video.currentTime scrubbing (janky on real phones) with a frame-sequence
  drawn to <canvas> — the Apple/Sony/Samsung approach. New `ScrollCanvas` preloads a
  clip's 49 WebP frames (lazy, as the section nears) and paints the scroll-mapped
  frame; no video decode/seek, so it scrubs smoothly on mobile hardware.
- Extracted 49-frame WebP sequences per clip (720px) → /public/frames/<clip>/.
- Removed video <video>/useScrollScrub/useIsMobile/-m variants; 80% completion kept.
- Frames are 720px for now (1080p later); the win is smoothness on real devices.


## 2026-06-22 · Scroll-scrub on mobile too (with light clip variants)

- Re-enabled scroll-scrub on mobile (was play-in-view) so the scroll effect runs on
  phones. To keep seeking smooth, serve downscaled all-keyframe `-m.mp4` clips
  (≤540px, ~0.5–1MB) on viewports <768px; desktop keeps the full clips.
- `useIsMobile` (mobile-first default so phones don't double-load the full clip).
- Removed `usePlayInView` / `useScrubEnabled` (single scrub path now).

## 2026-06-22 · Reorder sections — Karnataka "Decoded" leads

- New section order (each copy keeps its clip): §1 Powered by AI "Every brand.
  Every zone. Decoded." (Karnataka), §2 For Brands "Find the space…" (cube),
  §3 For Property Owners "List smarter. Lease faster." (iso-city), §4 Location
  Intelligence "Decide with data…" (portrait tower).
- Alternating layout preserved (S1 right, S2 left, S3 right, S4 left); §1 Karnataka
  keeps its edge-feather.

## 2026-06-22 · Mobile fix (play-in-view), 80% scrub completion, real logo

- **Mobile rework:** video scroll-scrubbing is desktop-only — on touch it stutters
  badly (seeking heavy all-keyframe clips). Mobile now uses **play-in-view**
  (autoplay-in-view, natural scroll), desktop keeps scroll-scrub. New
  `useScrubEnabled` (min-width 768 + fine pointer) gates the split; `usePlayInView`
  drives mobile playback.
- **Scrub completes at 80%** of the pin travel, then holds the last frame so you
  don't crawl through the final frames (`COMPLETE_AT` in `useScrollScrub`).
- **Real Lokazen logo** pulled from lokazen.in (`/brand/lokazen-logo.svg`) → fixed
  `BrandHeader` (orb mark + "Lokazen · Powered By AI"); also set as favicon.
- **Mobile robustness:** `100dvh` instead of `100vh` (URL-bar jumps); Lenis
  smooth-scroll disabled on touch (native momentum); explicit `viewport` meta.
- User-facing: mobile scrolls smoothly with clips playing instead of a broken/janky
  scrub; logo now visible; desktop scrub snappier (finishes at 80%).
