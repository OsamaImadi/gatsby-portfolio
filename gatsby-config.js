/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `resume`,
    description: `Simple and elegant resume.`,
    author: `Morosoft`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        icon: `src/images/temp.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Saira Extra Condensed`,
            variants: [`500`, `700`],
          },
          {
            family: `Muli`,
            variants: [`400`],
            style: [`normal`],
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
