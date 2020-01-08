module.exports = {
  siteMetadata: {
    title: `Sheb rocks! 🤘`,
    author: `Michael Habeth`,
    description: `Personal site and blog of Michael Habeth.`,
    siteUrl: `https://sheb.rocks`,
    social: {
      twitter: `https://twitter.com/shebtastic`,
      keybase: `https://keybase.io/sheb`,
      mail: `michael@sheb.rocks`,
      linkedin: `https://linkedin.com/in/michael-habeth-38aa0615a`,
      xing: `https://www.xing.com/profile/Michael_Habeth`,
      github: `https://github.com/shebtastic`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
//    {
//      resolve: `gatsby-plugin-google-analytics`,
//      options: {
//        //trackingId: `ADD YOUR TRACKING ID HERE`,
//      },
//    },
    `gatsby-plugin-feed`,
//    {
//      resolve: `gatsby-plugin-manifest`,
//      options: {
//        name: `sheb.rocks`,
//        short_name: `sheb.rocks`,
//        start_url: `/`,
//        background_color: `#ffffff`,
//        theme_color: `#663399`,
//        display: `minimal-ui`,
//        icon: `content/assets/gatsby-icon.png`,
//      },
//    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
