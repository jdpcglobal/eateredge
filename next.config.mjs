/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      output: 'standalone',
      trailingSlash: false,
      assetPrefix: './',
      
};

export default nextConfig;
