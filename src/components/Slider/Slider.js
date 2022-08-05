import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/banner-1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cooking Recipe</h3>
          <p>
            POEME is the brand that inherits the most favorite cake recipes of
            Mr. Tetsuya Suzuki.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/banner-2.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Flavour</h3>
          <p>
            Hidden in any small cake here, is still the original delicious
            flavour with full love and passion.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../assets/banner-3.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Branch System</h3>
          <p>POEME has nearly 10 branches in Hanoi</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
