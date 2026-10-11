/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't have a live image optimization server
  },
};

export default nextConfig;
