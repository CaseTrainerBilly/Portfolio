/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // <-- ADD THIS
  images: {
    domains: ['picsum.photos'],
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};

export default nextConfig;
