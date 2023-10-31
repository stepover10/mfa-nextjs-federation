const NextFederationPlugin = require("@module-federation/nextjs-mf");

const APP_MAIN_URL = process.env.BASE_URL

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    app_main: `app_main@${APP_MAIN_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "app_docs",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./index": "./pages/index.tsx",
        },
        remotes: remotes(options.isServer),
        extraOptions: {
          exposePages: true,
        },
      })
    );
    
    return config;
  },
};