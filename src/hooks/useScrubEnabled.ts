"use client";

import { useEffect, useState } from "react";

/**
 * True only on real desktop (fine pointer + wide viewport). Drives the
 * scroll-scrub vs play-in-view split: video scrubbing (seeking on scroll) is a
 * desktop-only technique — on touch devices it stutters badly, so mobile uses
 * simple play-in-view instead. Defaults false (SSR + mobile-first).
 */
export function useScrubEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return enabled;
}
