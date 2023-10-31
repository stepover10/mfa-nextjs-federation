const NextFederationPlugin = require("@module-federation/nextjs-mf");

// const remoteNextUrl = process.env.REMOTE_NEXT_URL || `http://localhost:3000`;
const remoteNextUrl = `http://localhost:3000`;

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    app_main: `app_main@${remoteNextUrl}/_next/static/${location}/remoteEntry.js`,
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