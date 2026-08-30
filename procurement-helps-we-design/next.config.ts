import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so this can also be deployed by dragging the built
  // output straight into Netlify's manual-deploy UI, no Git required.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
