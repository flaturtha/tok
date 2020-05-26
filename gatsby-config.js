module.exports = {
  siteMetadata: {
    title: `Tentacle Cult`,
    description: `Wherein, I will attempt to tell the tale of Colonel Aloysius Krill &amp; the Tentacle Cult &hellip; how he came to anger the Gods Who Are Rejected.`,
    author: `Rich Cook`,
    siteUrl: 'https://tentaclecult.com'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tc-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1080,
              },
            },            
          ],
        },
      },
  ],
}
