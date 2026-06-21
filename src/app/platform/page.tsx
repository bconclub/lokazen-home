import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Lokazen Platform — AI Commercial Real Estate Matching",
  description:
    "How Lokazen matches brands and property owners across Bangalore — AI scoring, location intelligence, and live demand.",
};

function Logo() {
  return (
    <span className="text-lg font-extrabold tracking-tight">
      <span className="text-gradient">Loka</span>
      <span className="text-fg">zen</span>
    </span>
  );
}

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      {/* nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[80vh] -translate-x-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, var(--glow) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            The Lokazen Platform
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            From brief to shortlisted spaces —{" "}
            <span className="text-gradient">in one guided flow.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">
            No spreadsheets, no cold outreach. Just AI-scored matches between
            brands and locations that actually fit, across Bangalore&apos;s 40+
            high-intent zones.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white"
            >
              Find Space
            </a>
            <a
              href="#"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-fg/30"
            >
              List Property
            </a>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="border-t border-line px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Simple &amp; Fast Process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            How It <span className="text-gradient">Works</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Sign Up & Onboard", "Create your profile as a Brand or Property Owner in under 5 minutes."],
              ["02", "AI Analyzes Data", "Our engine processes your requirements with location intelligence and market data."],
              ["03", "Get Top 5 Matches", "Receive your Top 5 AI-scored matches with insights and instant notifications."],
              ["04", "Close the Deal", "Review, shortlist, connect directly — the platform smooths deal closure."],
            ].map(([n, t, d]) => (
              <div
                key={n}
                className="rounded-2xl border border-line bg-bg-elev p-6"
              >
                <span className="text-gradient text-3xl font-black">{n}</span>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* featured requirements */}
      <section className="border-t border-line px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Active Brand Searches
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Featured Brand <span className="text-gradient">Requirements</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Namaste — South Indian", "Restaurant", "2,000–3,000 sqft", "Very Active"],
              ["Acai Theory", "QSR / Health Food", "300–1,000 sqft", "Active"],
              ["Mumbai Pav Co.", "Café / QSR", "600–1,000 sqft", "Very Active"],
              ["Original Burger Co.", "Café / QSR", "800–2,000 sqft", "Very Active"],
              ["Meltin' Desires", "Dessert / Ice Cream", "300–800 sqft", "Active"],
              ["Sandowitch", "Café / QSR", "500–800 sqft", "Very Active"],
            ].map(([brand, cat, size, status]) => (
              <div key={brand} className="rounded-2xl border border-line bg-bg-elev p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold">{brand}</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                    {status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{cat}</p>
                <p className="mt-4 text-sm">
                  <span className="text-muted">Size:</span> {size}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="border-t border-line px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            ["500+", "Properties Listed"],
            ["100+", "Brands"],
            ["Instant", "Avg. Match Time"],
            ["40+", "Zones Covered"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="text-4xl font-extrabold md:text-5xl">{v}</p>
              <p className="mt-2 text-sm text-muted">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-line px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">
            AI Powered Commercial Real Estate Matchmaking Platform.
          </p>
          <p className="mt-6 text-xs text-muted">
            Unit of N &amp; G Ventures · support@lokazen.in · Kokarya Business
            Synergy Centre, Jayanagar, Bengaluru 560041
          </p>
          <p className="mt-8 text-xs text-muted">
            © 2026 Lokazen. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
