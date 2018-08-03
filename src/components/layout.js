import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import '../assets/styles/fonts.scss'
import '../assets/styles/bootstrap.scss'
import '../assets/styles/layout.scss'

const appMeta = [
  { name: 'description', content: 'Sample' },
  { name: 'keywords', content: 'sample, something' },
]

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} meta={appMeta} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <section className="main">
          {children}
        </section>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
