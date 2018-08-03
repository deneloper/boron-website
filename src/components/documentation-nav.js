import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const DocumentationNav = () => (
  <StaticQuery
    query={graphql`
      query docsQuery {
        allMarkdownRemark (
          filter: {frontmatter: {level: {eq: 0}}, fileAbsolutePath: {regex: "/documentation/" }},
          sort: {fields: frontmatter___order}
        ) {
          edges {
            node {
              html
              headings {
                depth
                value
              }
              frontmatter {
                title
                level
                draft,
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      var pages = data.allMarkdownRemark.edges
      return (
        <nav>
          {pages.map((page) => (<Link key={page.node.frontmatter.slug} to={`/docs/${page.node.frontmatter.slug}`}>{page.node.frontmatter.title}</Link>))}
        </nav>
      )
    }}
  />
)

export default DocumentationNav
