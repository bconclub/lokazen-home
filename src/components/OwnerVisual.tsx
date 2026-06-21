"use client";

/**
 * Section 3 visual (no clip supplied) — a "live demand" board: your listing
 * surfaced to brands that fit, scored. Built in code; swappable for a clip.
 */
const MATCHES = [
  { brand: "Boba Bhai", cat: "Café / QSR", fit: 94 },
  { brand: "Blue Tokai", cat: "Coffee", fit: 91 },
  { brand: "Truffles", cat: "Restaurant", fit: 88 },
  { brand: "Holy Pav", cat: "QSR", fit: 84 },
];

export default function OwnerVisual() {
  return (
    <div className="absolute inset-0 flex items-center">
      <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-[#0d0c0e] p-5 md:p-6">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
          }}
        />
        {/* header */}
        <div className="relative flex items-center justify-between border-b border-line pb-4">
          <div>
            <p className="text-sm font-bold text-fg">Your Listing · Indiranagar</p>
            <p className="text-xs text-muted">1,800 sqft · Ground floor</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Live demand
          </span>
        </div>

        {/* match rows */}
        <div className="relative mt-4 space-y-3">
          {MATCHES.map((m) => (
            <div key={m.brand} className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg-elev text-xs font-bold text-fg/80">
                {m.brand.slice(0, 1)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-semibold text-fg">
                    {m.brand}
                  </p>
                  <p className="text-sm font-bold text-[#2ecc9b]">{m.fit}%</p>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-gradient-brand"
                    style={{ width: `${m.fit}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="relative mt-5 border-t border-line pt-4 text-xs text-muted">
          <span className="font-semibold text-fg">12 brands</span> matched your
          space this week.
        </p>
      </div>
    </div>
  );
}
