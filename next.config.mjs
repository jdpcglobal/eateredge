/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      distDir: 'build', 
      output: 'standalone',
};

export default nextConfig;
