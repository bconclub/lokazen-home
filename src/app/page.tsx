import VideoFeature from "@/components/VideoFeature";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <main className="relative bg-bg">
      {/* ===== SECTION 1 — LOCATION INTELLIGENCE 2026 (building clip) ===== */}
      <VideoFeature
        title={
          <>
            Location
            <br />
            Intelligence
            <br />
            <span className="text-gradient">2026</span>
          </>
        }
        subtitle="AI-Powered Real Estate Matching for the Next Generation"
        caption={
          <>
            Lokazen matches.
            <br />
            Business grows.
          </>
        }
        media={{
          type: "video",
          src: "/video/section1.mp4",
          poster: "/video/section1-poster.jpg",
          aspect: "square",
        }}
      />

      {/* ===== SECTION 2 — DUAL AI SCORING SYSTEM (awaiting clip) ===== */}
      <VideoFeature
        title={
          <>
            Dual AI
            <br />
            Scoring System
          </>
        }
        subtitle="Two indexes. One perfect match."
        caption={
          <>
            Smarter decisions.
            <br />
            Stronger portfolios.
          </>
        }
        media={{ type: "placeholder", label: "Section 2 clip", aspect: "square" }}
      />

      {/* ===== SECTION 3 — MAP / LOCATION MATCH OVERLAY (map clip) ===== */}
      <MapSection
        src="/video/section2.mp4"
        poster="/video/section2-poster.jpg"
      />

      {/* ===== SECTION 4 — GLOBAL REACH. LOCAL PRECISION. (awaiting clip) ===== */}
      <VideoFeature
        title={
          <>
            Global Reach.
            <br />
            Local <span className="text-gradient">Precision.</span>
          </>
        }
        subtitle="AI-Driven Location Intelligence That Finds What Others Miss."
        stats={[
          { value: "50+", label: "Markets" },
          { value: "1.2M+", label: "Properties Analyzed" },
          { value: "99%", label: "Match Accuracy" },
        ]}
        cta={{ label: "See How It Works", href: "#how" }}
        media={{ type: "placeholder", label: "Section 4 clip", aspect: "video" }}
      />
    </main>
  );
}
