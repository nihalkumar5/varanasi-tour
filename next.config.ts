import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = {
  ...nextConfig,
  allowedDevOrigins: ['nonrealizing-ginny-tweediest.ngrok-free.dev', 'localhost:3001', '*']
};
