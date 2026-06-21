"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * True while the element occupies the viewport's center band. Re-triggerable
 * (flips back to false when it leaves) so entrance animations replay each time a
 * section scrolls/snaps in. Rect-based so it's reliable under Lenis.
 */
export function useInView(ref: RefObject<HTMLElement | null>, margin = 0.25) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const check = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      setInView(r.top < vh * (1 - margin) && r.bottom > vh * margin);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const id = window.setInterval(check, 150);
    check();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearInterval(id);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, margin]);

  return inView;
}
