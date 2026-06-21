"use client";

/**
 * Section 2 — Dual AI Scoring System. Built in code to match the reference
 * frame (no clip supplied): left = title + BFI/PFI score cards + caption,
 * right = a glassy building core with orbiting category nodes on animated rings.
 * Drop-in replaceable by a <video> later.
 */

const NODES = [
  { label: "Demographics", angle: -90, tone: "teal" },
  { label: "Traffic", angle: -10, tone: "orange" },
  { label: "Competition", angle: 90, tone: "orange" },
  { label: "Accessibility", angle: 180, tone: "teal" },
];

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

export default function ScoringSection() {
  return (
    <section className="relative min-h-screen w-full bg-bg px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto mb-12 max-w-7xl md:mb-16">
        <LokazenMark />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* details + score cards */}
        <div>
          <h2 className="text-5xl font-extrabold leading-[1.0] tracking-tight md:text-7xl">
            Dual AI
            <br />
            Scoring System
          </h2>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Two indexes. One perfect match.
          </p>

          <div className="mt-10 flex max-w-md flex-col gap-4">
            {/* BFI card */}
            <div className="flex items-center justify-between rounded-xl border border-line bg-[#140d09] px-5 py-4">
              <div>
                <p className="text-sm font-bold text-accent">BFI</p>
                <p className="text-xs text-muted">Building Fit Index</p>
              </div>
              <p className="text-4xl font-extrabold text-accent">
                92<span className="ml-1 text-sm font-medium text-muted">/100</span>
              </p>
            </div>
            {/* PFI card */}
            <div className="flex items-center justify-between rounded-xl border border-line bg-[#0a1410] px-5 py-4">
              <div>
                <p className="text-sm font-bold text-[#2ecc9b]">PFI</p>
                <p className="text-xs text-muted">Portfolio Fit Index</p>
              </div>
              <p className="text-4xl font-extrabold text-[#2ecc9b]">
                87<span className="ml-1 text-sm font-medium text-muted">/100</span>
              </p>
            </div>
          </div>

          <p className="mt-12 flex items-start gap-2 text-sm leading-snug text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Smarter decisions.
            <br />
            Stronger portfolios.
          </p>
        </div>

        {/* orbit visual */}
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">
          {/* warm glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, var(--glow) 0%, transparent 60%)",
            }}
          />
          {/* orbit rings */}
          <div className="absolute inset-[8%] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-accent/30" />
          <div className="absolute inset-[20%] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-dashed border-[#2ecc9b]/30" />

          {/* central core */}
          <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-accent/40 bg-[#160e0a] shadow-[0_0_60px_-10px_var(--accent)]">
            <div className="h-14 w-14 rounded-lg bg-gradient-brand opacity-90" />
          </div>

          {/* orbiting nodes */}
          {NODES.map((n) => {
            const rad = (n.angle * Math.PI) / 180;
            const radius = 44; // % from center
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);
            const color = n.tone === "orange" ? "var(--accent)" : "#2ecc9b";
            return (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="flex flex-col items-center gap-1.5">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-full border bg-bg-elev"
                    style={{ borderColor: color }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: color }}
                    />
                  </span>
                  <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-muted">
                    {n.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
