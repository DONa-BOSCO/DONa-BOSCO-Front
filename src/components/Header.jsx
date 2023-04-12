import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar collapseOnSelect className="Shadow" expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="/logo.png"
              width="140"
              height="70"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 me-5">
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>

          <Nav> 
          <Button className="me-4" variant="danger">Iniciar Sesión</Button></Nav>
          <Nav>
          <Button variant="danger">Registrar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header