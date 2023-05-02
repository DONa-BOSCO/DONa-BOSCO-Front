import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/img-slide/slide1.png"
import slide2 from "../assets/img-slide/slide2.png"
import slide4 from "../assets/img-slide/slide4.png"
import './Stylesheet/Slide.css'

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="text--slide">
          <h3 >Dona Bosco</h3>
          <p >Cada artículo que donas puede tener un impacto positivo en el mundo. Contribuye a nuestra causa y ayúdanos a reducir el desperdicio y crear un futuro más sostenible para todos.</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 >¿Qué Hacemos?</h3>
          <p >Poder ayudar a personas con una serie de bienes donados.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 >Fundación Don Bosco</h3>
          <p >Una organización transformadora de la sociedad, de los elementos que generan desigualdades y exclusión, y reconcida por su capasidad de denuncia de estas situaciones y de defensa de la justia social.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;