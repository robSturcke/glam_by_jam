import React from "react"
import PropTypes from "prop-types"
import Navigation from "./nav"
import { Link } from "gatsby"
import Logo from "../images/glambyjam_logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav_wrap">
      <div className="text-center">
        <div className="logo pt-3">
          <Link to="/">
            <img src={Logo} className="logo" alt="Glam by Jam" />
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
