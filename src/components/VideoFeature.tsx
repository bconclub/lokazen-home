"use client";

import { useRef } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";

type VideoFeatureProps = {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  chips?: string[];
  line?: string;
  cta: { label: string; href: string };
  /** frame-sequence prefix, e.g. "/frames/s4" */
  framesBase: string;
  /** number of frames in the sequence */
  frameCount: number;
  /** media-box aspect */
  aspect?: "square" | "wide" | "tall" | "portrait" | "portraitWide";
  /** flip columns: visual left, details right */
  reverse?: boolean;
  /** feather edges to transparent (clips whose bg isn't pure black) */
  fade?: boolean;
};

const ASPECT: Record<string, string> = {
  square: "aspect-square",
  wide: "aspect-video",
  tall: "aspect-[4/3]",
  portrait: "aspect-[496/864] mx-auto max-w-[360px]",
  portraitWide: "aspect-[560/752] mx-auto max-w-[440px]",
};

function Details({
  eyebrow,
  title,
  sub,
  chips,
  line,
  cta,
}: Pick<
  VideoFeatureProps,
  "eyebrow" | "title" | "sub" | "chips" | "line" | "cta"
>) {
  return (
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
  );
}

export default function VideoFeature({
  eyebrow,
  title,
  sub,
  chips,
  line,
  cta,
  framesBase,
  frameCount,
  aspect = "square",
  reverse = false,
  fade = false,
}: VideoFeatureProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const grid = (
    <div
      className={`mx-auto grid w-full max-w-7xl items-center gap-2 md:grid-cols-2 md:gap-8 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Details
        eyebrow={eyebrow}
        title={title}
        sub={sub}
        chips={chips}
        line={line}
        cta={cta}
      />
      <div className={`relative w-full ${ASPECT[aspect]}`}>
        <ScrollCanvas
          sectionRef={sectionRef}
          base={framesBase}
          count={frameCount}
          fade={fade}
        />
      </div>
    </div>
  );

  // Tall section; inner content pins while the frame sequence scrubs with scroll.
  return (
    <section ref={sectionRef} className="relative w-full bg-bg" style={{ height: "160vh" }}>
      <div className="sticky top-0 flex h-[100dvh] w-full items-center px-6 py-8 md:px-12">
        {grid}
      </div>
    </section>
  );
}
