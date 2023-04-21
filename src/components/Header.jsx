import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect className="Shadow" expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand>
        <Link to= "/" >

            <img
              src="/logo.png"
              width="140"
              height="70"
              alt="React Bootstrap logo"
            /></Link>
          </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 me-5">
            <Nav.Link href="/Contact">Contacto</Nav.Link>
          </Nav>

          <Nav>
          <Link to="/Login">
          <Button className="me-4 btn btn-custom">Iniciar Sesión</Button>
          </Link>
          </Nav>
          <Nav>
            <Link to="/Join">
          <Button className="me-4 btn btn-custom">Registrar</Button>
          </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header