"use client";

import { useEffect, type RefObject } from "react";

/**
 * Scroll-scrubs a <video>: while `sectionRef` is pinned, scroll progress
 * (0 → 1) maps onto video.currentTime, so scrolling scrubs the clip frame by
 * frame. The video stays PAUSED (we only seek) — no time-based playback.
 *
 * Driven by scroll/resize events + rAF + a low-freq interval, so it works under
 * Lenis smooth-scroll and in environments where rAF is throttled. Encode clips
 * all-keyframe so each seek decodes one independent frame.
 */
// Clip reaches its final frame at this fraction of the pin travel; the last
// stretch is free scroll so you don't crawl through the final frames.
const COMPLETE_AT = 0.8;

export function useScrollScrub(
  sectionRef: RefObject<HTMLElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return;
    const section = sectionRef.current;
    const v = videoRef.current;
    if (!section || !v) return;

    v.pause();
    let duration = Number.isFinite(v.duration) ? v.duration : 0;
    let applied = -1;
    let raf = 0;

    const onMeta = () => {
      duration = Number.isFinite(v.duration) ? v.duration : 0;
      update();
    };

    const update = () => {
      if (!duration) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const travel = rect.height - vh;
      if (travel <= 0) return;

      const raw = Math.min(1, Math.max(0, -rect.top / travel));
      // Finish the clip by COMPLETE_AT of the scroll, then hold the last frame.
      const p = Math.min(1, raw / COMPLETE_AT);
      const target = p * (duration - 0.05);

      if (Math.abs(target - applied) > 1 / 60 && v.readyState >= 1) {
        applied = target;
        try {
          v.currentTime = target;
        } catch {
          /* seeking before ready — ignore */
        }
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
      update(); // immediate, in case rAF is throttled
    };

    v.addEventListener("loadedmetadata", onMeta);
    if (v.readyState >= 1) onMeta();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const id = window.setInterval(update, 100);
    update();

    return () => {
      v.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearInterval(id);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sectionRef, videoRef, enabled]);
}
