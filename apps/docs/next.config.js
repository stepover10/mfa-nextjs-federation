const NextFederationPlugin = require("@module-federation/nextjs-mf");

// const remoteNextUrl = process.env.REMOTE_NEXT_URL || `http://localhost:3000`;
const remoteNextUrl = `http://localhost:3000`;

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    main: `main_app@${remoteNextUrl}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "docs_app",
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
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