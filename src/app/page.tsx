import VideoFeature from "@/components/VideoFeature";
import GlobalReachSection from "@/components/GlobalReachSection";
import OwnerVisual from "@/components/OwnerVisual";

const HUB = "/platform";

export default function Home() {
  return (
    <main className="relative bg-bg">
      {/* ===== SECTION 1 — What Lokazen is (iso city, orange beam) ===== */}
      <VideoFeature
        eyebrow="AI-Powered Location Intelligence"
        title={
          <>
            Match your brand
            <br />
            to the <span className="text-gradient">right space.</span>
          </>
        }
        sub="Lokazen reads Bangalore's commercial map the way brokers can't. 37,000+ outlets tracked. 22,000+ brands mapped. 40 zones decoded."
        line="Stop guessing locations. Start matching them."
        cta={{ label: "Explore Match", href: HUB }}
        videoSrc="/video/s1.mp4"
        poster="/video/s1-poster.jpg"
        aspect="tall"
      />

      {/* ===== SECTION 2 — Dual AI Scoring (tower BFI+PFI) ===== */}
      <VideoFeature
        eyebrow="Dual AI Scoring System"
        title={
          <>
            Two indexes.
            <br />
            One <span className="text-gradient">perfect fit.</span>
          </>
        }
        sub="BFI scores the building. PFI scores the portfolio fit. Together they tell you if a space actually works for your brand before you sign."
        chips={["BFI 92/100", "PFI 87/100"]}
        line={`"87% suitable for a café brand." That's not a hunch. That's the data.`}
        cta={{ label: "Score a Location", href: HUB }}
        videoSrc="/video/s2.mp4"
        poster="/video/s2-poster.jpg"
        aspect="square"
      />

      {/* ===== SECTION 3 — For property owners (demand board) ===== */}
      <VideoFeature
        eyebrow="For Property Owners"
        title={
          <>
            List smarter.
            <br />
            <span className="text-gradient">Lease faster.</span>
          </>
        }
        sub="Skip the cold calls and TO-LET banners. Lokazen surfaces your space to brands that actually fit, and filters out everyone who doesn't."
        line="Fewer questions. Better tenants. Real demand data."
        cta={{ label: "List Your Space", href: HUB }}
        mediaNode={<OwnerVisual />}
        aspect="tall"
        reverse
      />

      {/* ===== SECTION 4 — The Intelligence (world map, arcs) ===== */}
      <GlobalReachSection ctaHref={HUB} />
    </main>
  );
}
