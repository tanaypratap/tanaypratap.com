/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/guide',
        destination: '/guide/home',
        permanent: true,
      },
      {
        source: '/qualifier',
        destination: '/qualifier/home',
        permanent: true,
      },
      {
        source: '/handbook',
        destination: '/handbook/home',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
