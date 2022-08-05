import Carousel from "react-bootstrap/Carousel";

function SliderStore() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={require("../../assets/our-stores-image-1.jpg")}
          alt="First slide"
        />
      </Carousel.Item>

      <img
        className="d-block w-20"
        src={require("../../assets/our-stores-image-2.jpg")}
        alt="Second slide"
      />
    </Carousel>
  );
}

export default SliderStore;
