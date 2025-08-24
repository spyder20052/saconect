/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  async redirects() {
    return [
      {
        source: '/solutions/smart-commerce',
        destination: '/solutions/smart-retail',
        permanent: true,
      },
    ]
  },
}
export default nextConfig