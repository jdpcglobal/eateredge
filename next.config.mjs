/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      output: 'standalone',
      trailingSlash: false,
      experimental: {
        outputFileTracingRoot: __dirname,
      },
};

export default nextConfig;
