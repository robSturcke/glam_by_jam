import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <div className="logo">
        <Logo />
      </div>
      <div className="text-center">
        <h1 className="site_header">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
