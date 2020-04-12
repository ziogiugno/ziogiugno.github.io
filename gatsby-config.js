module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Il blog del primate`,
    // Default title of the page
    siteTitleAlt: `blog personale di @ziogiugno`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Appunti di viaggio nel mondo dello sviluppo`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://ziogiugno.github.io`,
    // Used for SEO
    siteDescription: `Sviluppato con Gatsby ( tema minimo di lekoarts ), costruito con Travis e pubblicato su GitHub`,
    // Will be set on the <html /> tag
    siteLanguage: `it`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `banner.jpg`,
    // Twitter Handle
    author: `@ziogiugno`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/ziogiugno`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/ziogiugno/`
      }
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`
      }
    ]
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About`,
            slug: `/about`
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/ziogiugno`
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/ziogiugno/`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Il Blog di Ziogiugno`,
        short_name: `ziogiugno`,
        start_url: `/`,
        background_color: `#1ca086`,
        theme_color: `#1ca086`,
        display: `standalone`,
        icon: `./content/assets/logo.svg` // This path is relative to the root of the site.
      }
    }
  ]
};
