/**
 * Fixed brand header — the real Lokazen orb mark (pulled from lokazen.in) plus
 * the wordmark. Floats over the sections top-left.
 */
export default function BrandHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 flex items-center gap-2.5 px-5 py-4 md:px-8 md:py-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/lokazen-logo.svg"
        alt="Lokazen"
        width={34}
        height={34}
        className="h-8 w-8 md:h-9 md:w-9"
      />
      <div className="leading-none">
        <span className="text-base font-extrabold tracking-tight text-fg md:text-lg">
          Lokazen
        </span>
        <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.22em] text-muted md:text-[9px]">
          Powered By AI
        </p>
      </div>
    </header>
  );
}
