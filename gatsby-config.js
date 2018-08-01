module.exports = {
  siteMetadata: {
    title: 'Boron'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["assets/styles"]
      }
    }
  ]
}
