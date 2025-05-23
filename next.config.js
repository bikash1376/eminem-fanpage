/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['pbs.twimg.com', 'images.pexels.com'],
  },
};

module.exports = nextConfig;
