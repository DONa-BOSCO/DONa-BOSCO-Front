import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Footer() {
  return (
    <>
      <Navbar className="footer">
        <Container>
          <Navbar.Brand>Copyright© 2023 - DONa BOSCO</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Aviso">Aviso Legal |</Nav.Link>
            <Nav.Link href="#Privacidad">Política de Privacidad |</Nav.Link>
            <Nav.Link href="#Cookies">Cookies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;