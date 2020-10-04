import React from "react"
import PropTypes from "prop-types"
import Logo from "./logo"
import Navigation from "./nav"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav_wrap">
      <div className="text-center">
        <div className="logo">
          <Link to="/">
            <Logo alt={siteTitle} />
          </Link>
        </div>
      </div>
      <Navigation />
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
