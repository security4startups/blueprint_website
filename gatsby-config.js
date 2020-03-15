module.exports = {
  siteMetadata: {
    title: `Security4Startups`,
    description: `The Security 4 Startups (“S4S”) was designed by a working group
    of investors and small, mid, and large-corporation CISOs. Its
    purpose is to empower startups with reasonable security controls
    that are intelligently applied and have a favorable cost-effect
    ratio. Simply put: S4S strives to help early stage startups
    solve for their greatest security risks, in a balanced way, and
    in a manner that’s sustainable and doesn’t demand great security
    expertise. While S4S will not solve every security
    vulnerability, it provides a solid baseline addressing the most
    common and important security challenges companies face and will
    provide a solid starting point from which companies can grow
    their security program.`,
    author: `vjhameed`,
  },
  plugins: [
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
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
