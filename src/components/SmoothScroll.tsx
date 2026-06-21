"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Lenis smooth-scroll on desktop (mouse). On touch devices we skip Lenis and use
 * native scrolling — Lenis fights momentum scroll on mobile and made it feel broken.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (touch) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
