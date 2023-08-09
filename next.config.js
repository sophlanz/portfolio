/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  /*raw loader to parse markdown*/
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}

module.exports = nextConfig
