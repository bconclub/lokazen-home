/**
 * Full brand logo at the bottom of the page — large, centered, on mobile + desktop.
 */
export default function BrandFooter() {
  return (
    <footer className="flex flex-col items-center gap-5 bg-bg px-6 py-24 text-center md:py-32">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/lokazen-logo.svg"
        alt="Lokazen"
        className="h-20 w-20 md:h-24 md:w-24"
      />
      <span className="text-4xl font-extrabold tracking-tight md:text-6xl">
        <span className="text-gradient">Loka</span>
        <span className="text-fg">zen</span>
      </span>
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
        Powered By AI
      </p>
      <p className="mt-6 text-xs text-muted">
        © 2026 Lokazen · Commercial Real Estate Matching for Bangalore
      </p>
    </footer>
  );
}
