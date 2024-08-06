/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
        port: '',
        pathname: '**',
      },
    ],
  },

  experimental: {
    images: {
      allowFutureImages: true
    }
  }
};

export default nextConfig;
