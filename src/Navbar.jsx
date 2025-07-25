import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function navbar() {
 return (
<Navbar expand="lg" className="bg-dark fixed-top">
  <Container className="d-flex justify-content-between">
  <Navbar.Brand  href="/" className="text-light fs-3 text-uppercase fw-bold">Framework</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className='text-uppercase '>
        <Nav.Link  href="/about" className="mx-3 text-light fw-bold">About</Nav.Link>
        <Nav.Link  href="/portfolio" className="mx-3 text-light fw-bold">Portfolio</Nav.Link>
        <Nav.Link  href="/contact" className="mx-3 text-light fw-bold" >Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}
