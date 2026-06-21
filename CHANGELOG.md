# Changelog

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
