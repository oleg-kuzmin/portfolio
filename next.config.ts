import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
