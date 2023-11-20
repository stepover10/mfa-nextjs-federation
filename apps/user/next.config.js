const withLinaria = require('next-with-linaria');
const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@pkg/layout',
    '@pkg/button',
  ],
  
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "user",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./index": "./src/pages/index.tsx",
        },
        shared: {
          "react-dom": {
            eager: true,
          },
        },
        extraOptions:{
          exposePages: true
        }
      })
    );
    
    return config;
  },
};

module.exports = withLinaria(nextConfig);

