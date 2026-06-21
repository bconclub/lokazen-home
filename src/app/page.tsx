import HeroCanvas from "@/components/three/HeroCanvas";
import ScrollVideo from "@/components/ScrollVideo";

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
          Hero
        </div>
      </section>

      {/* ===== SECTION 1 — AI MATCHING (scroll-scrubbed video) ===== */}
      <ScrollVideo
        src="/video/section1.mp4"
        poster="/video/section1-poster.jpg"
        heightVh={280}
        objectFit="contain"
      >
        <div className="absolute left-6 top-24 z-10 md:left-16">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            01 · AI Matching Engine
          </p>
        </div>
        <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-widest text-muted">
          Section 1 / 4
        </div>
      </ScrollVideo>

      {/* ===== SECTION 2 — LOCATION INTELLIGENCE (scroll-scrubbed video) ===== */}
      <ScrollVideo
        src="/video/section2.mp4"
        poster="/video/section2-poster.jpg"
        heightVh={280}
        objectFit="contain"
      >
        <div className="absolute left-6 top-24 z-10 md:left-16">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            02 · Location Intelligence
          </p>
        </div>
        <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-widest text-muted">
          Section 2 / 4
        </div>
      </ScrollVideo>

      {/* ===== SECTION 3 — HOW IT WORKS (light) ===== */}
      <section className="bg-bg-light px-6 py-24 text-fg-dark md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Simple &amp; Fast Process
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-dark">
            From onboarding to deal closure — powered by AI in just 4 steps.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Sign Up & Onboard",
                d: "Create your profile as a Brand or Property Owner. Complete onboarding in under 5 minutes.",
                tag: "5 minutes",
              },
              {
                n: "02",
                t: "AI Analyzes Data",
                d: "Our AI engine processes your requirements with location intelligence and market data.",
                tag: "Real-time processing",
              },
              {
                n: "03",
                t: "Get Top 5 Matches",
                d: "Receive your Top 5 AI-scored matches with detailed insights and instant notifications.",
                tag: "Top 5 curated",
              },
              {
                n: "04",
                t: "Close the Deal",
                d: "Review, shortlist, and connect directly. Our platform facilitates smooth deal closure.",
                tag: "Deal completed",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-line-dark bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-gradient text-3xl font-black">{s.n}</span>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-dark">
                  {s.d}
                </p>
                <span className="mt-5 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-line-dark pt-12 sm:grid-cols-4">
            {[
              ["95%", "Match Success"],
              ["Instant", "Avg Response"],
              ["500+", "Properties"],
              ["20+", "Areas"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="text-3xl font-extrabold md:text-4xl">{v}</p>
                <p className="mt-1 text-sm text-muted-dark">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — STATS + CTA + FOOTER (dark) ===== */}
      <section className="relative overflow-hidden bg-bg px-6 py-24 md:px-16 md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[90vh] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--glow) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 border-b border-line pb-16 md:grid-cols-4">
            {[
              ["500+", "Properties Listed", "↑ 23% this month"],
              ["100+", "Brands", "Growing fast"],
              ["Instant", "Avg. Match Time", "Lightning fast"],
              ["20+", "Areas Covered", "Bangalore"],
            ].map(([v, l, s]) => (
              <div key={l}>
                <p className="text-4xl font-extrabold md:text-5xl">{v}</p>
                <p className="mt-2 text-sm font-medium text-fg">{l}</p>
                <p className="mt-1 text-xs text-accent">{s}</p>
              </div>
            ))}
          </div>

          <div className="py-20 text-center">
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
              Ready to Find Your{" "}
              <span className="text-gradient">Perfect Match?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted">
              Join hundreds of brands and property owners already using our
              AI-powered platform.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#find"
                className="rounded-full bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Brand — Looking For Space
              </a>
              <a
                href="#list"
                className="rounded-full border border-line bg-bg-elev/60 px-8 py-3.5 text-sm font-semibold text-fg backdrop-blur-md transition-colors hover:border-fg/30"
              >
                List Property
              </a>
            </div>
          </div>

          {/* footer */}
          <footer className="grid gap-10 border-t border-line pt-14 md:grid-cols-[2fr_1fr_1fr]">
            <div>
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-gradient">Loka</span>
                <span className="text-fg">zen</span>
              </span>
              <p className="mt-3 max-w-xs text-sm text-muted">
                AI Powered Commercial Real Estate Matchmaking Platform.
              </p>
              <p className="mt-6 text-xs text-muted">
                Unit of N &amp; G Ventures
                <br />
                support@lokazen.in
                <br />
                Kokarya Business Synergy Centre, Jayanagar, Bengaluru 560041
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2 text-sm text-fg/80">
                {["How It Works", "Success Stories", "Careers", "Blog", "Contact Us"].map(
                  (x) => (
                    <li key={x}>
                      <a href="#" className="hover:text-accent">
                        {x}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                For Users
              </p>
              <ul className="mt-4 space-y-2 text-sm text-fg/80">
                {["For Brands", "List Property", "Brand Login", "Property Login"].map(
                  (x) => (
                    <li key={x}>
                      <a href="#" className="hover:text-accent">
                        {x}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </footer>
          <p className="mt-12 text-center text-xs text-muted">
            © 2026 Lokazen. All rights reserved. · Section 4 / 4
          </p>
        </div>
      </section>
    </main>
  );
}
