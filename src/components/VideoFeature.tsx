"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import ScrollCanvas from "@/components/ScrollCanvas";
import { useInView } from "@/hooks/useInView";

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
  // smaller on mobile so text + tall clip fit one pinned screen (no clipping)
  portrait: "aspect-[496/864] mx-auto max-w-[200px] md:max-w-[440px]",
  portraitWide: "aspect-[560/752] mx-auto max-w-[220px] md:max-w-[440px]",
};

const container: Variants = {
  hide: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item: Variants = {
  hide: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
  const shown = useInView(sectionRef);
  const animate = shown ? "show" : "hide";

  const details = (
    <motion.div
      className="flex flex-col"
      variants={container}
      initial="hide"
      animate={animate}
    >
      <motion.p
        variants={item}
        className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={item}
        className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tight md:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={item}
        className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
      >
        {sub}
      </motion.p>

      {chips && (
        <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line bg-bg-elev px-4 py-1.5 text-sm font-semibold text-fg"
            >
              {c}
            </span>
          ))}
        </motion.div>
      )}

      {line && (
        <motion.p
          variants={item}
          className="mt-7 border-l-2 border-accent pl-4 text-base font-medium italic text-fg/90"
        >
          {line}
        </motion.p>
      )}

      <motion.a
        variants={item}
        href={cta.href}
        className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90"
      >
        {cta.label}
        <span>›</span>
      </motion.a>
    </motion.div>
  );

  const grid = (
    <div
      className={`mx-auto grid w-full max-w-7xl items-center gap-2 md:grid-cols-2 md:gap-8 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {details}
      <motion.div
        className={`relative w-full ${ASPECT[aspect]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: shown ? 1 : 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <ScrollCanvas
          sectionRef={sectionRef}
          base={framesBase}
          count={frameCount}
          fade={fade}
        />
      </motion.div>
    </div>
  );

  // Tall section; inner content pins while the frame sequence scrubs with scroll.
  // Mobile slightly taller (slower scrub), desktop shorter (less scroll).
  return (
    <section ref={sectionRef} className="relative h-[230vh] w-full bg-bg md:h-[150vh]">
      <div className="sticky top-0 flex h-[100dvh] w-full items-center px-6 pb-8 pt-20 md:px-12">
        {grid}
      </div>
    </section>
  );
}
