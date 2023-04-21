import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Stylesheet/Footer.css'

function Footer() {
  return (
    <Navbar className = "footer" expand="lg" style={{ backgroundColor: '#51626f' }} variant="dark" fixed="bottom" >
      <Container className="d-flex flex-column flex-md-row" >
        <div className="text-center ">
          <Navbar.Brand>Copyright© 2023 - DONa BOSCO</Navbar.Brand>
        </div>
        <div className="d-flex justify-content-center text-center">
          <Nav>
            <Nav.Link href="#Aviso">Aviso Legal</Nav.Link>
            <Nav.Link href="#Privacidad">Política de Privacidad</Nav.Link>
            <Nav.Link href="#Cookies">Cookies</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
<footer>
           
<ul>
    <li> Aviso legal</li>
    <li> Cookies</li>
    <li>Politica de privacidad</li>
    <li>Contacta</li>
    <li> © 2023 CEIP Camaleón</li>
</ul>
</footer>