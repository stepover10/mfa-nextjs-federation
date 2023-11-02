const NextFederationPlugin = require("@module-federation/nextjs-mf");
// import { injectScript } from '@module-federation/nextjs-mf/lib/utils';

// const APP_MAIN_URL = `http://localhost:3000`;

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
// const remotes = (isServer) => {
//   const location = isServer ? "ssr" : "chunks";
//   return {
//     app_main: `app_main@${APP_MAIN_URL}/_next/static/${location}/remoteEntry.js`,
//   };
// };

module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: [
      'layout'
    ],
  },
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
        // remoteType: "var",
        // remotes: remotes(options.isServer),
      })
    );
    
    return config;
  },
};