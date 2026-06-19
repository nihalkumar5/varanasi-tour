import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

const config: NextConfig & { allowedDevOrigins: string[] } = {
  ...nextConfig,
  allowedDevOrigins: ['nonrealizing-ginny-tweediest.ngrok-free.dev', 'localhost:3001', '*'],
};

module.exports = config;
