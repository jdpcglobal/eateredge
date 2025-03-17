/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      reactStrictMode: true,
      trailingSlash: true,
      output: 'standalone',  // Ensures Next.js can work as a self-contained app
      assetPrefix: isProd ? '/_next/' : '', // Ensure correct paths
      experimental: {
        outputFileTracingRoot: __dirname, // Fixes missing assets on deployment
      },
};

export default nextConfig;
