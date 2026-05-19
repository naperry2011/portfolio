import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { viewTransition: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
