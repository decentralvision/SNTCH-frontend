require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    siteTitle: `SNTCH`,
    siteTitleAlt: `SNTCH`,
    siteHeadline: `SNTCH`,
    siteUrl: `https://sntch.io`,
    siteDescription: `Custom template`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `SNTCH`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ClosedLoop design`,
        short_name: `ClosedLoop`,
        description: `ClosedLoop`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/@lekoarts/gatsby-theme-cara/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     /*
    //      * The full URL of the WordPress site's GraphQL API.
    //      * Example : 'https://www.example-site.com/graphql'
    //      */
    //     url: `https://www.closedloop.design/graphql`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
