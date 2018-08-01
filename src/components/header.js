import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <Link to="/">{siteTitle}</Link>
    </div>
  </header>
)

export default Header
