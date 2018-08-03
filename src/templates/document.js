import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import DocumentationNav from '../components/documentation-nav'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="page-title">
        <div className="container">
          <h1>Documentation</h1>
        </div>
      </div>
      <main className="container">
        <div className="row">
          <aside className="col-2">
            <DocumentationNav />
          </aside>
          <div className="col">
            <h2>{post.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }}  />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
