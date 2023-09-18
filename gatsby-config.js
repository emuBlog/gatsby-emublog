/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `えむのあれこれ`,
    Author:`えむ@駆け出しエンジニア`,
    categoty:[`IT`,`お金`,`趣味`],
    user:{ name:`Sora`, email:`bakara@yahoo.co.jp`}
    // siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-plugin-lodash",
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
              showCaptions: true,
            },
          },
        ],
      },
    },
  ],

}
