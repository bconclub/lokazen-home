"use client";

import { useRef } from "react";
import { usePlayInView } from "@/hooks/usePlayInView";

type VideoFeatureProps = {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  chips?: string[];
  line?: string;
  cta: { label: string; href: string };
  /** clip source — omit when supplying mediaNode */
  videoSrc?: string;
  poster?: string;
  /** custom visual instead of a clip (e.g. a code-built figure) */
  mediaNode?: React.ReactNode;
  /** clip aspect — controls the media column box */
  aspect?: "square" | "wide" | "tall";
  /** flip columns: video left, details right */
  reverse?: boolean;
};

const ASPECT: Record<string, string> = {
  square: "aspect-square",
  wide: "aspect-video",
  tall: "aspect-[4/3]",
};

/**
 * Flat, borderless feature section. The clip's black background bleeds straight
 * into the page (no card, no border). Details left, clip right; stacks on mobile.
 * Clip plays when scrolled into view (usePlayInView).
 */
export default function VideoFeature({
  eyebrow,
  title,
  sub,
  chips,
  line,
  cta,
  videoSrc,
  poster,
  mediaNode,
  aspect = "square",
  reverse = false,
}: VideoFeatureProps) {
  const video = useRef<HTMLVideoElement>(null);
  usePlayInView(video);

  return (
    <section className="relative flex min-h-screen w-full items-center bg-bg px-6 py-20 md:px-12 md:py-24">
      <div
        className={`mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* details */}
        <div className="flex flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tight md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            {sub}
          </p>

          {chips && (
            <div className="mt-7 flex flex-wrap gap-3">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-bg-elev px-4 py-1.5 text-sm font-semibold text-fg"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          {line && (
            <p className="mt-7 border-l-2 border-accent pl-4 text-base font-medium italic text-fg/90">
              {line}
            </p>
          )}

          <a
            href={cta.href}
            className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {cta.label}
            <span>›</span>
          </a>
        </div>

        {/* media — flat, borderless, bleeds into bg */}
        <div className={`relative w-full ${ASPECT[aspect]}`}>
          {mediaNode ? (
            mediaNode
          ) : (
            <video
              ref={video}
              src={videoSrc}
              poster={poster}
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}
