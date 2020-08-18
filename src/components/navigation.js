import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Navigation = () => (
  <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mr-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#link">SERVICES</Nav.Link>
        <Nav.Link href="#link">PORTFOLIO</Nav.Link>
        <Nav.Link href="#link">ABOUT</Nav.Link>
        <Nav.Link href="#link">CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
