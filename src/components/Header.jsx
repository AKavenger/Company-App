import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,Container} from 'react-bootstrap';

function Header() {
  return (
  <Navbar  className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Container>
  <Navbar.Brand href="#home">Jigiriz</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#deets">Insights</Nav.Link>
      <Nav.Link href="#deets">About us</Nav.Link>
      <Nav.Link href="#deets">Contact us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;
