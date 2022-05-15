module.exports = {
  siteMetadata: {
    siteUrl: `https://anupamdagar.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:300,600`],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anupam Dagar`,
        short_name: `Anupam`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0873e8`,
        display: `standalone`,
        icon: `assets/appicon.png`,
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-92889653-1",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://anupamdagar.com",
        sitemap: "https://anupamdagar.com/sitemap.xml",
        policy: [
          { userAgent: "*", allow: "/", disallow: ["/privacy", "/legal"] },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
};
