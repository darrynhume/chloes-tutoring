import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Add domains here if using external images later (e.g. real photos on CDN)
    ],
  },
};

export default nextConfig;
