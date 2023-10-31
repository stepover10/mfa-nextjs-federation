const NextFederationPlugin = require("@module-federation/nextjs-mf");

// 호스트 환경 변수 추가
const remoteNextUrl = process.env.REMOTE_NEXT_URL || `http://localhost:3001`;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    app_docs: `app_docs@${remoteNextUrl}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "app_main",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};