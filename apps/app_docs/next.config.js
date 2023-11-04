const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    '@pkg/layout',
    '@pkg/tsconfig',
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
        name: "app_docs",
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