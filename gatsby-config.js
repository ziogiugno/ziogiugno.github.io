module.exports = {
  siteMetadata: {
    title: `Il blog del primate`,
    author: `Rolando Duma`,
    shortBio: `Java developer, mobile and web`,
    description: `Qualche considerazione primordiale sul mondo dell'informatica che mi riguarda.`,
    siteUrl: `https://ziogiugno.github.io/`,
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/ziogiugno"
      },
      {
        name: "github",
        url: "https://github.com/ziogiugno"
      }
    ]
  },
  plugins: [
    {
      resolve: "@joshkennedy00/gatsby-theme-blog-remix",
      options: {
        basePath: "/"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Remix`,
        short_name: `remix`,
        start_url: `/`,
        background_color: `#F86278`,
        theme_color: `#F86278`,
        display: `standalone`,
        icon: `./content/assets/logo.svg` // This path is relative to the root of the site.
      }
    }
  ]
};
