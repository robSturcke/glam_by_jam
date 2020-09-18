import React, { useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import CloseIcon from "../images/close_icon"
import MenuIcon from "../images/menu_icon"

const isActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : null
}

const activeStyle = {
  color: "rgb(225, 225, 225)",
}

export default function Navigation() {
  const [onToggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!onToggle)

  return (
    <>
      <Navbar fixed="top" expand="md">
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
    </>
  )
}
