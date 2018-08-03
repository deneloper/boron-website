import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import NewsItem from '../components/news-item'

const NewsPage = () => (
  <StaticQuery
    query={graphql`
      query newsQuery {
        allMarkdownRemark (
          filter: {fileAbsolutePath: {regex: "/news/" }},
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
      console.log(news)
      return (
        <>
        <Layout>
          <div className="page-title">
            <div className="container">
              <h1>News</h1>
            </div>
          </div>
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-9">
                  {news.map((item) => (<div>{<NewsItem key={item.node.frontmatter.slug} item={item.node} />}</div>))}
                </div>
              </div>
            </div>
          </main>
        </Layout>
        </>
      )
    }}
  />
)

export default NewsPage
