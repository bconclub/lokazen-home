"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

const SNAP_AT = 0.8; // advance when the active section's scrub reaches 80%

/**
 * Auto-advances to the next section once the current pinned clip reaches ~80% —
 * skipping the long scroll-out tail of the sticky section. Only fires on downward
 * scroll, one-shot per section, with a cooldown so it never fights the user.
 * Uses Lenis on desktop, native smooth scroll on mobile.
 */
export default function ScrollSnap() {
  const lenis = useLenis();

  useEffect(() => {
    let lastY = window.scrollY;
    let snapping = false;
    let cooldownUntil = 0;
    const locked = new Set<number>();

    const onScroll = () => {
      const y = window.scrollY;
      const down = y > lastY + 0.5;
      const up = y < lastY - 0.5;
      lastY = y;

      const secs = Array.from(
        document.querySelectorAll("main > section")
      ) as HTMLElement[];
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // Free a section's lock once scrolled back up near/above it.
      if (up) {
        secs.forEach((s, i) => {
          if (s.getBoundingClientRect().top > vh * 0.25) locked.delete(i);
        });
      }

      const now = performance.now();
      if (snapping || now < cooldownUntil || !down) return;

      for (let i = 0; i < secs.length - 1; i++) {
        const r = secs[i].getBoundingClientRect();
        const travel = secs[i].offsetHeight - vh;
        if (travel <= 0) continue;
        // currently pinned section
        if (r.top <= 1 && r.bottom > vh * 0.9) {
          const p = Math.min(1, Math.max(0, -r.top / travel));
          if (p >= SNAP_AT && !locked.has(i)) {
            locked.add(i);
            snapping = true;
            cooldownUntil = now + 1100;
            const target = secs[i + 1].offsetTop;
            const done = () => {
              snapping = false;
            };
            if (lenis) {
              lenis.scrollTo(target, { duration: 0.55, onComplete: done });
            } else {
              window.scrollTo({ top: target, behavior: "smooth" });
              window.setTimeout(done, 650);
            }
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  return null;
}
