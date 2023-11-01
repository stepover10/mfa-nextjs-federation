const NextFederationPlugin = require("@module-federation/nextjs-mf");

// 호스트 환경 변수 추가
const APP_DOCS_URL = process.env.BASE_URL || `http://localhost:4001`;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    app_docs: `app_docs@${APP_DOCS_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: [
      'layout'
    ],
  },
  compiler: {
    styledComponent: true,
  },
  webpack(config, options) {
    config.resolve.modules = [ 
      ...config.resolve.modules, 
      '../src'
    ];
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