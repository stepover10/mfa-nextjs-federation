const withLinaria = require('next-with-linaria');
const NextFederationPlugin = require("@module-federation/nextjs-mf");
// const {createDelegatedModule} = require('@module-federation/utilities');

// 호스트 환경 변수 추가
const APP_DOCS_URL = process.env.APP_DOCS_PATH || `http://localhost:3001`;
// const APP_DOCS_URL = `http://localhost:3001`;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    //app_docs: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      app_user: `user@${APP_DOCS_URL}/_next/static/${location}/remoteEntry.js`
    //}),
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  transpilePackages: [
    '@pkg/layout'
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
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        }
      })
    );

    return config;
  },
};

module.exports = withLinaria(nextConfig);

