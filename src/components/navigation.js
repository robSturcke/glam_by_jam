import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const isActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : null
}

const activeStyle = {
  color: "rgb(109,97,145)",
}

const Navigation = () => (
  <div className="nav_wrap">
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-auto">
          <li className="nav-item">
            <Link
              activeStyle={activeStyle}
              activeClassName="active"
              className="nav-link"
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeStyle={activeStyle}
              activeClassName="active"
              className="nav-link"
              to="/services"
            >
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeStyle={activeStyle}
              activeClassName="active"
              className="nav-link"
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Navigation
