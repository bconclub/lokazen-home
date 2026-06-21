"use client";

import dynamic from "next/dynamic";

// Client-only mount for the WebGL canvas — never SSR'd.
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function HeroCanvas() {
  return <HeroScene />;
}
