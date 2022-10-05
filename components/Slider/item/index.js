import {Carousel, Image} from "react-bootstrap";
import {getImage} from "../../../utils/getImage";

export const SliderItem=({name,description,image})=>{
  return (
    <Carousel.Item >
      <Image
        className="d-block w-100"
        src={getImage(image)}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>{name}</h1>
        <p style={{color:"black"}} className="d-block">{description}</p>
        <a className="btn btn-outline-light btn-slider">Acheter</a>
      </Carousel.Caption>
    </Carousel.Item>
  )
}
