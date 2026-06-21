import VideoFeature from "@/components/VideoFeature";

const HUB = "#";

export default function Home() {
  return (
    <main className="relative bg-bg">
      {/* ===== SECTION 1 — For brands (visual right) ===== */}
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
        videoSrc="/video/s2.mp4"
        poster="/video/s2-poster.jpg"
        aspect="square"
      />

      {/* ===== SECTION 2 — For property owners (visual left) ===== */}
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
        videoSrc="/video/s3.mp4"
        poster="/video/s3-poster.jpg"
        aspect="portrait"
        reverse
      />

      {/* ===== SECTION 3 — Location intelligence (visual right) ===== */}
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
        videoSrc="/video/s1.mp4"
        poster="/video/s1-poster.jpg"
        aspect="tall"
      />

      {/* ===== SECTION 4 — The AI payoff (visual left, Karnataka) ===== */}
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
        videoSrc="/video/s4.mp4"
        poster="/video/s4-poster.jpg"
        aspect="square"
        reverse
      />
    </main>
  );
}
