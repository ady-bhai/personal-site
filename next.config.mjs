/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/work", destination: "/projects", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'substack-post-media.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
