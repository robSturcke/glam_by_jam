import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "./logo"
import { Navbar, Nav } from "react-bootstrap"

const isActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : null
}

const activeStyle = {
  color: "rgb(225, 225, 225)",
}

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav_wrap">
      <div className="logo_container text-center">
        <div className="logo">
          <Logo alt={siteTitle} />
        </div>
      </div>
      <Navbar fixed="top" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-auto">
            <li className="nav-item">
              <Link
                activeStyle={activeStyle}
                activeClassName="active"
                className="nav-link underline"
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeStyle={activeStyle}
                activeClassName="active"
                className="nav-link underline"
                to="/portfolio"
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeStyle={activeStyle}
                activeClassName="active"
                className="nav-link underline"
                to="/contact"
              >
                SERVICES / CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeStyle={activeStyle}
                activeClassName="active"
                className="nav-link underline"
                to="/about"
              >
                ABOUT
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
