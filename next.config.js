/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "zwin.io"
    ]
  }
}

module.exports = nextConfig
