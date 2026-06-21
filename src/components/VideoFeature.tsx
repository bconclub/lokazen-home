"use client";

import { useRef, useEffect } from "react";

type Media =
  | { type: "video"; src: string; poster?: string; aspect: "square" | "video" }
  | { type: "placeholder"; label: string; aspect: "square" | "video" };

type VideoFeatureProps = {
  title: React.ReactNode;
  subtitle: string;
  caption?: React.ReactNode;
  stats?: { value: string; label: string }[];
  cta?: { label: string; href: string };
  media: Media;
  reverse?: boolean;
  showWordmark?: boolean;
};

function LokazenMark() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-[10px] font-black text-white">
        L
      </span>
      <span className="text-sm font-semibold uppercase tracking-[0.32em] text-fg/90">
        Lokazen
      </span>
    </div>
  );
}

/**
 * Borderless feature section — details on one side, the clip running on the
 * other. The clip's own black background bleeds seamlessly into the page (no
 * border, no card). Desktop split → stacks on mobile so the scroll stays clean.
 */
export default function VideoFeature({
  title,
  subtitle,
  caption,
  stats,
  cta,
  media,
  reverse = false,
  showWordmark = true,
}: VideoFeatureProps) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = video.current;
    if (v) v.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-bg px-6 py-20 md:px-12 md:py-24">
      {showWordmark && (
        <div className="mx-auto mb-12 max-w-7xl md:mb-16">
          <LokazenMark />
        </div>
      )}

      <div
        className={`mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* details */}
        <div className="flex flex-col">
          <h2 className="text-5xl font-extrabold leading-[1.0] tracking-tight md:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-sm text-[11px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-muted">
            {subtitle}
          </p>

          {stats && (
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold md:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          {cta && (
            <a
              href={cta.href}
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-bg-elev/60 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent"
            >
              {cta.label}
              <span className="text-accent">›</span>
            </a>
          )}

          {caption && (
            <p className="mt-12 flex items-start gap-2 text-sm leading-snug text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {caption}
            </p>
          )}
        </div>

        {/* media — borderless, bleeds into bg */}
        <div
          className={`relative w-full ${
            media.aspect === "square" ? "aspect-square" : "aspect-video"
          }`}
        >
          {media.type === "video" ? (
            <video
              ref={video}
              src={media.src}
              poster={media.poster}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-contain"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center rounded-2xl border border-dashed border-line text-center text-xs uppercase tracking-[0.25em] text-muted">
              {media.label}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
