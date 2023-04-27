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
import { Link, useNavigate } from 'react-router-dom';
import './Stylesheet/Header.css'
import { FaBars } from 'react-icons/fa';

const Header = () => {

  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('userData'));
  const handleLogout = () => {
    localStorage.removeItem('userData');
    setLoggedIn(false);

    window.location.href = '/login';
  };

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
              alt="Dona Bosco logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 me-5 mt-4">
            <Nav.Link href="/Contact" className="nav-link-contact">
              <h5>Contacto</h5>
            </Nav.Link>
          </Nav>

          {!isLoggedIn ?
            <Nav>
              <Link to="/Login">
                <Button className="me-4 btn btn-custom nav-btn" style={{ borderColor: '#dc3545' }}>Iniciar Sesión</Button>
              </Link>
            </Nav>
            : null}

          {!isLoggedIn ?
            <Nav>
              <Link to="/Join">
                <Button className="me-4 btn btn-custom" style={{ borderColor: '#dc3545' }}>Registrar</Button>
              </Link>
            </Nav>
            : null}

{isLoggedIn ? (
          <Nav.Link href="/DashboardUser">
           
            <Button variant="outline mt-1">
             
                <img
                  src="https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
                  alt="My Profile"
                  style={{ width: '45px', height: '45px', marginRight: '4px', borderRadius: '50px', marginTop: '0px' }} />
              
              <h6 style={{ fontSize: '13px', marginTop: '4px', marginBottom: '-5px' }} className="hover--color">Perfil</h6>
         
            </Button>
          </Nav.Link>
  ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
