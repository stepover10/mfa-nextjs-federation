const withLinaria = require('next-with-linaria');
const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@pkg/layout',
    '@pkg/button',
  ],

  compiler: {
    styledComponents: true,
  },
  
  webpack(config, options) {
    config.resolve.modules = [ 
      ...config.resolve.modules, 
      '../src'
    ];
    
    config.plugins.push(
      new NextFederationPlugin({
        name: "user",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./index": "./src/pages/index.tsx",
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

