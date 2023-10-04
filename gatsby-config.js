/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `emuism`,
    Author:`えむ@駆け出しエンジニア`,
    categoty:[`IT`,`お金`,`趣味`],
    user:{ name:`Sora`, email:`bakara@yahoo.co.jp`},
    siteUrl: `https://emuism.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-5G5SH6Y658",
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`, //サイトマップをルートディレクトリ直下に出力するようなオプション
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://emuism.netlify.app`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt', // 追加
      options: {
        host: 'https://emuism.netlify.app',
        sitemap: 'https://emuism.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-plugin-lodash",
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
            },
          },
        ],
      },
    },
    
  ],

}
