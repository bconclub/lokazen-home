import HeroCanvas from "@/components/three/HeroCanvas";

export default function Home() {
  return (
    <main className="relative">
      {/* SECTION 1 — HERO (placeholder; awaiting screen + real 3D vector) */}
      <section className="relative h-screen w-full overflow-hidden">
        <HeroCanvas />

        {/* Foreground content sits over the 3D canvas */}
        <div className="pointer-events-none relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-16 md:pb-28">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-muted">
            Bangalore · Commercial Real Estate
          </p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[1.04] tracking-tight md:text-7xl">
            The right space,
            <br />
            <span className="text-accent">matched</span> to the right move.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            Lokazen pairs occupiers and investors with Bangalore&apos;s best
            commercial property — through precision, trust, and local
            intelligence.
          </p>
          <div className="pointer-events-auto mt-10 flex gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Find your space
            </a>
            <a
              href="#how"
              className="rounded-full border border-line px-7 py-3 text-sm font-medium text-fg transition-colors hover:border-fg/30"
            >
              How matching works
            </a>
          </div>
        </div>

        {/* placeholder marker for remaining sections */}
        <div className="absolute bottom-6 right-6 z-10 text-[10px] uppercase tracking-widest text-muted">
          Section 1 / 4
        </div>
      </section>
    </main>
  );
}
