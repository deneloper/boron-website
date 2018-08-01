import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import '../assets/styles/fonts.scss'
import '../assets/styles/bootstrap.scss'
import '../assets/styles/layout.scss'

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
      <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-11">
              <div className="box">
                <Header siteTitle={data.site.siteMetadata.title} />
                <section className="content">
                  {children}
                </section>
                <footer>
                  Boron is created and maintained by <a href="http://www.deneloper.com" target="_blank">Deneloper</a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
