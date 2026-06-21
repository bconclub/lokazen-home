"use client";

import { useEffect, type RefObject } from "react";

/**
 * Mobile playback: autoplay a (muted, looping) <video> when it scrolls into view
 * and pause it when it leaves. Used instead of scroll-scrub on touch devices —
 * scrubbing video.currentTime stutters badly on mobile, plain playback is smooth.
 * Driven by scroll/resize + interval so it survives Lenis / throttled rAF.
 */
export function usePlayInView(
  ref: RefObject<HTMLVideoElement | null>,
  enabled: boolean,
  threshold = 0.25
) {
  useEffect(() => {
    if (!enabled) return;
    const v = ref.current;
    if (!v) return;

    let raf = 0;
    const check = () => {
      raf = 0;
      const r = v.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.height === 0) return;
      const visible = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      const inView =
        visible / Math.min(r.height, vh) >= threshold &&
        r.bottom > 0 &&
        r.top < vh;
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
    const id = window.setInterval(check, 300);
    check();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearInterval(id);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, enabled, threshold]);
}
