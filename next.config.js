/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // nếu bạn dùng <Image />
  },
  trailingSlash: true, // để tránh lỗi 404 với thư mục
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig