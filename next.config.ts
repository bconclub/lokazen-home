import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // The project path contains a space ("Loka Landing"), which breaks Turbopack's
  // manifest generation. We run dev/build on webpack locally; pin the file-tracing
  // root so the stray parent lockfile doesn't confuse workspace inference.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
