"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades + rises its children in once they scroll into view. Rect-based (not
 * IntersectionObserver) so it fires reliably under Lenis and on mobile.
 */
export default function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const check = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.85 && r.bottom > vh * 0.1) {
        setShown(true);
        cleanup();
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    const id = window.setInterval(check, 150);
    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(id);
      if (raf) cancelAnimationFrame(raf);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    check();
    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
