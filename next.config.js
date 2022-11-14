/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ["image.tmdb.org", "rb.gy"],
  },
}

module.exports = nextConfig

