"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

const SNAP_AT = 0.72;

/**
 * Desktop-only section snap (Lenis present). Once a pinned clip passes ~72%,
 * eases to the next section. Downward-only, one-shot per section, with a cooldown.
 * Mobile uses native CSS scroll-snap instead (see globals.css) — JS scrolling
 * fights touch momentum, CSS scroll-snap cooperates with it.
 */
export default function ScrollSnap() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return; // mobile → CSS scroll-snap

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
        if (r.top <= vh * 0.05 && r.bottom > vh * 0.45) {
          const p = Math.min(1, Math.max(0, -r.top / travel));
          if (p >= SNAP_AT && !locked.has(i)) {
            locked.add(i);
            snapping = true;
            cooldownUntil = now + 1000;
            lenis.scrollTo(secs[i + 1].offsetTop, {
              duration: 0.55,
              onComplete: () => {
                snapping = false;
              },
            });
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
