/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/projects", permanent: true },
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1eqYPVnBpl7qqDlN32IkAKNUB1UpcsSCb/preview",
        permanent: false,
      },
    ];
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
