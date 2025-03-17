/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      reactStrictMode: true,
      trailingSlash: true,
      output: 'standalone',  // Ensures Next.js can work as a self-contained app
      assetPrefix: '/_next/' , // Ensure correct paths
      experimental: {
        outputFileTracingRoot: __dirname, // Fixes missing assets on deployment
      },
};

export default nextConfig;
