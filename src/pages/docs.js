import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import DocumentationNav from '../components/documentation-nav'

const DocumentationPage = () => (
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
      </div>
    </main>
  </Layout>
)

export default DocumentationPage
