/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['picsum.photos'],
  },
  basePath: '/billyrichardsonportfolio',
  trailingSlash: true,
};

export default nextConfig;
