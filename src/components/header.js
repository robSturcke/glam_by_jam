import React from "react"
import PropTypes from "prop-types"
import Logo from "./logo"
import Navigation from "./nav"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav_wrap">
      <div className="text-center">
        <div className="logo">
          <Logo alt={siteTitle} />
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
