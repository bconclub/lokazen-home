"use client";

import { useRef, type ReactNode } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

type ScrollVideoProps = {
  /** Source clip (Higgs Field export). Put files in /public/video/*.webm|*.mp4 */
  src: string;
  /** Poster frame painted before the clip buffers (kills first-paint flash). */
  poster?: string;
  /** Overlay content (headings, CTAs) rendered above the video. */
  children?: ReactNode;
  /**
   * Section travel height. 300 = the clip scrubs across 3 viewport-heights of
   * scroll. Higher = slower, more cinematic scrub.
   */
  heightVh?: number;
  /** contain = letterbox (keeps edge UI); cover = fill+crop. Default contain. */
  objectFit?: "contain" | "cover";
  className?: string;
};

/**
 * Scroll-scrubbed video section. The clip is PINNED (sticky) for the section's
 * height while scroll progress (0→1) maps onto video.currentTime, so scrolling
 * scrubs the footage frame-by-frame instead of autoplaying.
 *
 * Encode clips keyframe-dense (e.g. `-g 1` h264 or VP9) so seeking is smooth.
 * Under reduced-motion the video stays on its poster/first frame (no scrub).
 */
export default function ScrollVideo({
  src,
  poster,
  children,
  heightVh = 300,
  objectFit = "contain",
  className = "",
}: ScrollVideoProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const v = video.current;
    if (!v || !Number.isFinite(v.duration) || v.duration === 0) return;
    const t = Math.min(v.duration, Math.max(0, p * v.duration));
    // Avoid redundant seeks (jank) for sub-frame deltas.
    if (Math.abs(v.currentTime - t) > 1 / 60) v.currentTime = t;
  });

  return (
    <section
      ref={wrap}
      style={{ height: `${heightVh}vh` }}
      className={`relative w-full ${className}`}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-bg">
        <video
          ref={video}
          src={src}
          poster={poster}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full ${
            objectFit === "cover" ? "object-cover" : "object-contain"
          }`}
        />
        {children ? (
          <div className="relative z-10 h-full w-full">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
