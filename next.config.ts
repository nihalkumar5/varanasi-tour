import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok for local development sharing
  serverExternalPackages: [],
  // We can't easily add allowedDevOrigins in NextConfig type for older Next, but wait, Next 15 has it in experimental.
  // Actually Next.js error says to add it at the root. But since typescript might complain, I'll use ts-ignore or any type.
};

module.exports = {
  ...nextConfig,
  allowedDevOrigins: ['nonrealizing-ginny-tweediest.ngrok-free.dev', 'localhost:3001', '*']
};
