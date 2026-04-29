import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['resend'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'f4.bcbits.com' },
      { protocol: 'https', hostname: 'geo-media.beatport.com' },
    ],
  },
};

export default nextConfig;
