import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const NewsTicker = () => (
  <StaticQuery
    query={graphql`
      query newsTickerQuery {
        allMarkdownRemark (
          filter: {fileAbsolutePath: {regex: "/news/" }},
          sort: {fields: frontmatter___order},
          limit: 1
        ) {
          edges {
            node {
              frontmatter {
                title
                draft,
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      var news = data.allMarkdownRemark.edges
      return (
        <div>

        </div>
      )
    }}
  />
)

export default NewsPage
