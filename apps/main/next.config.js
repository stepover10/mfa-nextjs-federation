const { DOCS_URL } = process.env

console.log("###:", DOCS_URL);

module.exports = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/docs',
        destination: 'http://localhost:3001/docs',
      },
      {
        source: '/docs/:path*',
        destination: 'http://localhost:3001/docs/:path*',
      },
    ]
  }
}