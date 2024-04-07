/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `bilibala`,
    siteUrl: `https://www.bilibala.ca`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-G361RWHN69"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BILIBALA`,
        short_name: `BILIBALA`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/BC-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
