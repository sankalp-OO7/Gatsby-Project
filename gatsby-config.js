const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: `Your Site Title`,
    // other site metadata
  },
  developMiddleware: app => {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:8000', // Correct port for Express server
        changeOrigin: true,
      })
    );
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-video`,
            options: {
              width: 800,
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: true,
              playsinline: true,
              controls: true,
              loop: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
