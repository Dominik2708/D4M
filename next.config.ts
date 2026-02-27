import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  basePath: '/D4M',
  assetPrefix: '/D4M/',
};

export default nextConfig;
