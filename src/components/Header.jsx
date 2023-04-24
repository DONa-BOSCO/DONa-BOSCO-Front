/* import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect className="Shadow" expand="lg" bg="light" variant="light" style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)'}}>
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
export default Header */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Stylesheet/Header.css'

const Header = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsNavbarFixed(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      className={`Shadow ${isNavbarFixed ? 'fixed-top' : ''}`}
      expand="lg"
      bg="light"
      variant="light"
      style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)' }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/logo.png"
              width="120"
              height="60"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 me-5 mt-2">
          <Nav.Link href="/Contact" className="nav-link-contact"><h5>Contacto</h5></Nav.Link>
          </Nav>

          <Nav>
            <Link to="/Login">
            <Button className="me-4 btn btn-custom nav-btn" style={{ borderColor: '#dc3545' }}>Iniciar Sesión</Button>
            </Link>
          </Nav>
          <Nav>
            <Link to="/Join">
              <Button className="me-4 btn btn-custom" style={{ borderColor: '#dc3545' }}>Registrar</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
