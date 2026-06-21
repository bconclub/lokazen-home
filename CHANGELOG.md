# Changelog

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
