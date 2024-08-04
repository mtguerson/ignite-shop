/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'files.stripe.com'
    ]
  },

  experimental: {
    images: {
      allowFutureImages: true
    }
  }
};

export default nextConfig;
