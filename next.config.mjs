/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      output: 'standalone',
      assetPrefix: '.',
      trailingSlash: false,
      
};

export default nextConfig;
