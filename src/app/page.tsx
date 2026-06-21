import VideoFeature from "@/components/VideoFeature";
import GlobalReachSection from "@/components/GlobalReachSection";

const HUB = "#";

export default function Home() {
  return (
    <main className="relative bg-bg">
      {/* ===== SECTION 1 — What Lokazen is (iso city, orange beam) ===== */}
      <VideoFeature
        eyebrow="AI-Powered Location Intelligence"
        title={
          <>
            Every brand.
            <br />
            Every zone.
            <br />
            <span className="text-gradient">Bangalore.</span>
          </>
        }
        sub="Lokazen matches commercial space to the brands that actually fit it. 37,189 outlets tracked. 22,494 brands mapped. 40 zones decoded."
        cta={{ label: "Explore Lokazen", href: HUB }}
        videoSrc="/video/s2.mp4"
        poster="/video/s2-poster.jpg"
        aspect="square"
      />

      {/* ===== SECTION 2 — For brands (tower BFI+PFI) ===== */}
      <VideoFeature
        eyebrow="For Brands"
        title={
          <>
            Find the spot
            <br />
            your brand was
            <br />
            <span className="text-gradient">built for.</span>
          </>
        }
        sub="Tell us your category. We surface the zones, footfall, and spaces where you'll actually perform, not just whatever's vacant."
        line="From café to flagship, matched to fit."
        cta={{ label: "Looking For A Space", href: HUB }}
        videoSrc="/video/s1.mp4"
        poster="/video/s1-poster.jpg"
        aspect="tall"
      />

      {/* ===== SECTION 3 — Property listings (orbit tower) ===== */}
      <VideoFeature
        eyebrow="Live Listings"
        title={
          <>
            Real spaces.
            <br />
            Real locations.
            <br />
            <span className="text-gradient">On the map.</span>
          </>
        }
        sub="Browse verified commercial properties across Bangalore as they drop, plotted where they actually are, with rent, photos, and fit score upfront."
        line="No banners. No guesswork. Just what's available now."
        cta={{ label: "Browse Spaces", href: HUB }}
        videoSrc="/video/s3.mp4"
        poster="/video/s3-poster.jpg"
        aspect="portrait"
        reverse
      />

      {/* ===== SECTION 4 — Intelligence (world map, arcs) ===== */}
      <GlobalReachSection ctaHref={HUB} />
    </main>
  );
}
