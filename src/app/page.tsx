import HeroCanvas from "@/components/three/HeroCanvas";

export default function Home() {
  return (
    <main className="relative">
      {/* ===== NAV ===== */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-line bg-bg-elev/70 px-5 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-sm font-black text-white">
              L
            </span>
            <div className="leading-none">
              <span className="text-lg font-extrabold tracking-tight">
                <span className="text-gradient">Loka</span>
                <span className="text-fg">zen</span>
              </span>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
                Powered By AI
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="#find"
              className="hidden text-sm font-medium text-muted transition-colors hover:text-fg md:inline"
            >
              Looking For A Space
            </a>
            <a
              href="#list"
              className="flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white"
            >
              List Property
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium">
                Instant
              </span>
            </a>
          </div>
        </nav>
      </header>

      {/* ===== SECTION 1 — HERO ===== */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        {/* warm radial glow behind headline */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--glow) 0%, transparent 60%)",
          }}
        />
        {/* 3D canvas (placeholder vector → Higgs Field clip later) */}
        <HeroCanvas />

        {/* foreground content */}
        <div className="pointer-events-none relative z-10 flex flex-col items-center px-6 text-center">
          <span className="pointer-events-auto mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-bg-elev/60 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Commercial Real Estate · Bangalore
          </span>

          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:text-8xl">
            Connecting
            <br />
            Brands &amp;
            <br />
            <span className="text-gradient">Prime Properties</span>
          </h1>

          <p className="mt-6 text-sm font-medium text-muted md:text-base">
            India&apos;s First AI Powered Commercial Real Estate Platform
          </p>

          <div className="pointer-events-auto mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#find"
              className="rounded-full bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Find Space
            </a>
            <a
              href="#list"
              className="rounded-full border border-line bg-bg-elev/60 px-8 py-3.5 text-sm font-semibold text-fg backdrop-blur-md transition-colors hover:border-fg/30"
            >
              List Property
            </a>
          </div>

          <p className="mt-6 text-xs text-muted">
            Already have an account?{" "}
            <a href="#signin" className="pointer-events-auto font-semibold text-accent">
              Sign In
            </a>
          </p>
        </div>

        <div className="absolute bottom-6 right-6 z-10 text-[10px] uppercase tracking-widest text-muted">
          Section 1 / 4
        </div>
      </section>
    </main>
  );
}
