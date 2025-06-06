/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['picsum.photos'],
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};

export default nextConfig;
