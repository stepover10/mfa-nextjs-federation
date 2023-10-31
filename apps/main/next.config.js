const NextFederationPlugin = require("@module-federation/nextjs-mf");

const remoteNextUrl = `http://localhost:3001`;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    docs: `docs_app@${remoteNextUrl}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "main_app",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./page": "./pages/index.tsx",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
          exposePages: true,
        },
      })
    );

    return config;
  },
};