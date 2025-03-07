import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
