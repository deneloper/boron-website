import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const DocumentationPage = () => (
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
        <>
          <Layout>
            <div className="page-title">
              <div className="container">
                <h1>Documentation</h1>
              </div>
            </div>
            <main className="container">
              <div className="row">
                <aside className="col-2">
                  <nav>
                    {pages.map((page) => (<Link key={page.node.frontmatter.slug} to={`docs/${page.node.frontmatter.slug}`}>{page.node.frontmatter.title}</Link>))}
                  </nav>
                </aside>
              </div>
            </main>
          </Layout>
        </>
      )
    }}
  />
)

export default DocumentationPage
