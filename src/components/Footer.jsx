import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar  expand="lg" style={{backgroundColor:'#51626f'}} variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">Copyright©️ 2023 - DONa BOSCO</Navbar.Brand>
          <Nav>
            <Nav.Link href="#">Aviso Legal</Nav.Link>
            <Nav.Link href="#">
            Política de Privacidad
            </Nav.Link>
            <Nav.Link href="#">Cookies</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}
export default Footer;








/* import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../components/stylesheet/Footer.css'


function Footer() {
  return (
    <>
<Navbar className="footer ml-auto">
  <Container className="d-flex ">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center footer-content">
      <div className=""> 
        <Navbar.Brand>Copyright© 2023 - DONa BOSCO</Navbar.Brand>
      </div>
      <div className="d-flex flex-column justify-content-end">
        <Nav>
          <Nav.Link href="#Aviso">Aviso Legal</Nav.Link>
          <Nav.Link href="#Privacidad">Política de Privacidad</Nav.Link>
          <Nav.Link href="#Cookies">Cookies</Nav.Link>
        </Nav>
      </div>
    </div>
  </Container>
</Navbar>

  </>
  
  );
}

export default Footer; */