/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image-cdn.essentiallysports.com"]

  }
}

module.exports = nextConfig