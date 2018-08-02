import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="logo">
            <Link to="/">{siteTitle}</Link>
          </div>
        </div>
        <nav className="col">
          <Link to="/about">About</Link>
          <Link to="/docs">Documentation</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
