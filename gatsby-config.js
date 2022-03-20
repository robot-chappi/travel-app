module.exports = {
  siteMetadata: {
    title: `TRAVEL`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logoTravelTrue.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        connectionString: 'mongodb+srv://chappic:chappic2014@cluster0.lo1q3.mongodb.net',
        dbName: `Routes`, 
        collection: `routeItems`,
        
      },
  },
  {
    resolve: `gatsby-source-mongodb`,
    options: { 
      connectionString: 'mongodb+srv://chappic:chappic2014@cluster0.lo1q3.mongodb.net',
      dbName: `News`, 
      collection: `companyNews`,
      
    },
},
  {
    resolve: `gatsby-source-mongodb`,
    options: { 
      connectionString: 'mongodb+srv://chappic:chappic2014@cluster0.lo1q3.mongodb.net',
      dbName: `News`, 
      collection: `employeesNews`,
      
    },
  },
  {
    resolve: `gatsby-source-mongodb`,
    options: { 
      connectionString: 'mongodb+srv://chappic:chappic2014@cluster0.lo1q3.mongodb.net',
      dbName: `Routes`, 
      collection: `bestRoutes`,
    },
  },
  {
    resolve: `gatsby-source-mongodb`,
    options: { 
      connectionString: 'mongodb+srv://chappic:chappic2014@cluster0.lo1q3.mongodb.net',
      dbName: `Routes`, 
      collection: `economyRoutes`,
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
