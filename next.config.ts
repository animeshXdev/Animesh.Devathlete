import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint build errors
  },
  typescript: {
    ignoreBuildErrors: true, // disables TypeScript build errors
  },
};

export default nextConfig;
