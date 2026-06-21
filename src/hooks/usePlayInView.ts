"use client";

import { useEffect, type RefObject } from "react";

/**
 * Plays a <video> when it scrolls into view and pauses it when it leaves —
 * each section's clip "runs when you scroll" to it (and stops decoding off-screen).
 *
 * Uses a rect check on scroll/resize (rAF-throttled) plus a low-frequency safety
 * interval, instead of IntersectionObserver — Lenis smooth-scroll can suppress IO
 * callback delivery, so a direct geometry check is the reliable path here.
 *
 * These clips are essential content (muted, looping), so they play even under
 * prefers-reduced-motion — the user's brief is "videos playing when they scroll".
 */
export function usePlayInView(
  ref: RefObject<HTMLVideoElement | null>,
  threshold = 0.3
) {
  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    let raf = 0;
    const check = () => {
      raf = 0;
      const r = v.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.height === 0) return;
      const visible = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      const ratio = visible / Math.min(r.height, vh);
      const inView = ratio >= threshold && r.bottom > 0 && r.top < vh;

      if (inView) {
        if (v.paused) v.play().catch(() => {});
      } else if (!v.paused) {
        v.pause();
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    v.addEventListener("loadeddata", check);
    // Safety net: Lenis may not emit native scroll events on window.
    const id = window.setInterval(check, 400);
    check();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      v.removeEventListener("loadeddata", check);
      window.clearInterval(id);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, threshold]);
}
