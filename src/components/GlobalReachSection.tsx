"use client";

/**
 * Section 4 — Global Reach. Local Precision. Built in code to match the
 * reference frame (no clip supplied): left = title + subtitle + stats + CTA,
 * right = dark map panel with glowing city nodes and animated flowing arcs.
 */

const CITIES = [
  { name: "New York", x: 16, y: 40 },
  { name: "London", x: 44, y: 30 },
  { name: "Dubai", x: 60, y: 52 },
  { name: "Singapore", x: 80, y: 64 },
];

const ARCS: [number, number, string][] = [
  [0, 1, "var(--accent)"],
  [1, 2, "#2ecc9b"],
  [2, 3, "var(--accent)"],
  [1, 3, "#2ecc9b"],
];

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.abs(b.x - a.x) * 0.45; // lift the curve
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

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

export default function GlobalReachSection({
  ctaHref = "#how",
}: {
  ctaHref?: string;
}) {
  return (
    <section className="relative min-h-screen w-full bg-bg px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto mb-12 max-w-7xl md:mb-16">
        <LokazenMark />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* details */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            The Data Layer Brokers Don&apos;t Show You
          </p>
          <h2 className="mt-5 text-5xl font-extrabold leading-[1.0] tracking-tight md:text-7xl">
            Global reach.
            <br />
            Local <span className="text-gradient">precision.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Location intelligence that finds what others miss, from a single zone
            to the entire city.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
            {[
              { v: "40", l: "Zones" },
              { v: "1.2M+", l: "Data Points" },
              { v: "99%", l: "Match Accuracy" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-extrabold md:text-4xl">{s.v}</p>
                <p className="mt-1 text-xs text-muted">{s.l}</p>
              </div>
            ))}
          </div>

          <a
            href={ctaHref}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            See How It Works <span>›</span>
          </a>
        </div>

        {/* world map visual */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-[#0b0b0d]">
          {/* perspective grid */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 60% 45%, var(--glow) 0%, transparent 55%)",
            }}
          />

          <svg
            viewBox="0 0 100 75"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {ARCS.map(([ai, bi, color], i) => (
              <path
                key={i}
                d={arcPath(CITIES[ai], CITIES[bi])}
                fill="none"
                stroke={color}
                strokeWidth={0.4}
                strokeLinecap="round"
                strokeDasharray="3 3"
                opacity={0.8}
                style={{
                  animation: `dashflow ${3 + i}s linear infinite`,
                }}
              />
            ))}
          </svg>

          {/* city nodes */}
          {CITIES.map((c) => (
            <div
              key={c.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${c.x}%`, top: `${(c.y / 75) * 100}%` }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="mt-1.5 block whitespace-nowrap rounded-full bg-bg-elev/80 px-2 py-0.5 text-[9px] font-medium text-fg/80">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
