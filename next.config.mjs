/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      output: 'standalone',
      trailingSlash: false,
      
};

export default nextConfig;
