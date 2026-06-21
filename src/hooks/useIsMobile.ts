"use client";

import { useEffect, useState } from "react";

/**
 * True on narrow viewports. Used to serve lighter mobile clip variants (-m.mp4)
 * so scroll-scrubbing stays smooth on phones. Defaults TRUE (mobile-first) so a
 * phone never double-loads the full clip — desktop upgrades to the full clip on
 * mount instead (it has the bandwidth).
 */
export function useIsMobile() {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return mobile;
}
