import VideoFeature from "@/components/VideoFeature";
import ScrollSnap from "@/components/ScrollSnap";
import BrandFooter from "@/components/BrandFooter";

const HUB = "#";

export default function Home() {
  return (
    <main className="relative bg-bg">
      <ScrollSnap />
      {/* ===== SECTION 1 — The AI payoff (Karnataka, visual right) ===== */}
      <VideoFeature
        eyebrow="Powered by AI"
        title={
          <>
            Every brand.
            <br />
            Every zone.
            <br />
            <span className="text-gradient">Decoded.</span>
          </>
        }
        sub="One AI reading all of Bangalore at once. 37,189 outlets, 22,494 brands, 40 zones, matched in real time."
        cta={{ label: "Go to Intelligence", href: HUB }}
        framesBase="/frames/s4"
        frameCount={49}
        aspect="square"
        fade
      />

      {/* ===== SECTION 2 — For brands (cube, visual left) ===== */}
      <VideoFeature
        eyebrow="For Brands"
        title={
          <>
            Find the space
            <br />
            your brand was
            <br />
            <span className="text-gradient">built for.</span>
          </>
        }
        sub="Tell us your category. Lokazen matches you to the zones, footfall, and spaces where you'll actually perform, not just whatever's vacant."
        cta={{ label: "Looking For A Space", href: HUB }}
        framesBase="/frames/sec2"
        frameCount={49}
        aspect="square"
        reverse
      />

      {/* ===== SECTION 3 — For property owners (iso-city, visual right) ===== */}
      <VideoFeature
        eyebrow="For Property Owners"
        title={
          <>
            List smarter.
            <br />
            <span className="text-gradient">Lease faster.</span>
          </>
        }
        sub="Drop the TO-LET banner and the cold calls. Lokazen puts your space in front of brands that fit, and filters out everyone who doesn't."
        cta={{ label: "List Property", href: HUB }}
        framesBase="/frames/s3"
        frameCount={61}
        aspect="square"
      />

      {/* ===== SECTION 4 — Location intelligence (portrait tower, visual left) ===== */}
      <VideoFeature
        eyebrow="Location Intelligence"
        title={
          <>
            Decide with data,
            <br />
            <span className="text-gradient">not guesswork.</span>
          </>
        }
        sub="Real-time footfall, category mix, and brand density across 40 Bangalore zones, before you commit to anything."
        cta={{ label: "Explore Intelligence", href: HUB }}
        framesBase="/frames/s1"
        frameCount={49}
        aspect="tall"
        reverse
      />

      <BrandFooter />
    </main>
  );
}
