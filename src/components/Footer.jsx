import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Stylesheet/Footer.css'

function Footer() {
  return (
<Navbar className="footer" expand="lg" style={{ backgroundColor: '#51626f' }} variant="dark" fixed="bottom">
  <Container className="d-flex flex-column   flex-md-row justify-content-between">
    <div className="text-center mb-0 mb-md-0">
      <Navbar.Brand className="mb-0">Copyright© 2023 - DONa BOSCO</Navbar.Brand>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <Nav className="flex-row flex-md-row">
        <Nav.Link href="#Aviso" className="mr-3 me-2 " style={{ whiteSpace: 'nowrap' }}>Aviso Legal</Nav.Link>
        <Nav.Link href="#Privacidad" className="mr-3 me-2" style={{ whiteSpace: 'nowrap' }}>Política de Privacidad</Nav.Link>
        <Nav.Link href="#Cookies" style={{ whiteSpace: 'nowrap' }}>Cookies</Nav.Link>
      </Nav>
    </div>
  </Container>
</Navbar>






  );
}

export default Footer;
