/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig