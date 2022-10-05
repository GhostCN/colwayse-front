import {Carousel, Image} from "react-bootstrap";
import {GrNext, GrPrevious} from "react-icons/gr";
import {getImage} from "../../utils/getImage";

const Slider=({sliders}) =>{

  return (
    <Carousel nextLabel='' prevLabel="" indicators={false} fade interval={2000} prevIcon={<GrPrevious size={25}/>} nextIcon={<GrNext size={25}/>} >
      {sliders?.length >0 && sliders.map((slider,index)=>
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            src={getImage(slider?.attributes?.image)}
            alt="Image Empty"
          />
          <Carousel.Caption>
            <h1 className="mt-md-0 mt-4">{slider?.attributes?.name}</h1>
            <p style={{color:"black"}} className="d-md-block d-none">{slider?.attributes?.description}</p>
{/*            <a className="btn btn-outline-light btn-slider">Acheter</a>*/}
          </Carousel.Caption>
        </Carousel.Item>
      )}

    </Carousel>
  )
}
export default Slider
