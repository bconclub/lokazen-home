"use client";

import { useRef, useEffect } from "react";

/**
 * Full-bleed map section. The clip already carries the LOKAZEN wordmark, the
 * LOCATION MATCH OVERLAY legend and the BFI/PFI cards, so we just let it run
 * full-width and bleed into the page's black background — no chrome, no border.
 */
export default function MapSection({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = video.current;
    if (v) v.play().catch(() => {});
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-bg px-4 py-16 md:px-12">
      <div className="relative aspect-video w-full max-w-7xl">
        <video
          ref={video}
          src={src}
          poster={poster}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </section>
  );
}
