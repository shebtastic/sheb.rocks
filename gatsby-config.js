module.exports = {
  siteMetadata: {
    title: "Sheb rocks! 🤘",
    author: "Michael Habeth",
    description: "Personal site and blog of Michael Habeth.",
    siteUrl: "https://sheb.rocks",
    social: {
      twitter: "https://twitter.com/shebtastic",
      keybase: "https://keybase.io/sheb",
      mail: "michael@sheb.rocks",
      linkedin: "https://linkedin.com/in/michael-habeth-38aa0615a",
      xing: "https://www.xing.com/profile/Michael_Habeth",
      github: "https://github.com/shebtastic"
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: false,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
}
