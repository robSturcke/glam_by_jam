import React, { useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import CloseIcon from "../images/close_icon"
import MenuIcon from "../images/menu_icon"

const activeStyle = {
  color: "rgb(68, 165, 123)",
}

export default function Navigation() {
  const [onToggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!onToggle)

  return (
    <>
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick}>
          {onToggle ? (
            <CloseIcon baseLayer="icon" />
          ) : (
            <MenuIcon baseLayer="icon" />
          )}
        </Navbar.Toggle>
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
            <li eventkey="2" className="nav-item">
              <Link
                activeStyle={activeStyle}
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                ABOUT
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
              <Link
                activeStyle={activeStyle}
                activeClassName="active"
                className="nav-link"
                to="/gallery"
              >
                GALLERY
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
    </>
  )
}
