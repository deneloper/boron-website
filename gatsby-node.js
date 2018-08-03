const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark (
          filter: {frontmatter: {level: {eq: 0}}, fileAbsolutePath: {regex: "/documentation/" }},
          sort: {fields: frontmatter___order}
        ) {
          edges {
            node {
              frontmatter {
                draft
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: `/docs/${node.frontmatter.slug}`,
          component: path.resolve(`./src/templates/document.js`),
          context: {
            slug: node.frontmatter.slug
          }
        })
      });
      resolve()
    })
  })
}
