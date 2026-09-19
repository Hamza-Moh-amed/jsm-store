import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {hostname: "cdn.sanity.io"}
    ]
  },
  reactStrictMode: false
};

export default nextConfig;
