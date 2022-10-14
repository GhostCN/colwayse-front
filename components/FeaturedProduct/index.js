import {Media, MediaContextProvider} from '../../utils/Media';
import ProductUi from "./ProductUi";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,} from "swiper";
import Link from "next/link"
import {Button} from "react-bootstrap";
const FeaturedProduct = ({products, titre}) => {
  const styleP = {
    fontSize: "30px",
    fontWeight: "bolder",
    fontStyle: "italic",
  }
  const styleMob = {
    fontSize: "24px",
    fontWeight: "bolder",
    fontStyle: "italic",
    padding:0,
    lineHeight: 1,
    marginTop: "10px"
  }
  return (
    <div data-aos="zoom-in" className="mt-4 container px-0">
      <MediaContextProvider>
        <Media greaterThan={'lg'}>
          <div className="d-flex justify-content-between align-items-center">
            <p style={styleP}>{titre}</p>
            <Link href={'/products'} passHref>
              <Button variant={"light"}  className="btn btn-outline-light btn-slider">Voir tout</Button>
            </Link>
          </div>
          <Swiper slidesPerView={3.9} spaceBetween={50} autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }} modules={[Autoplay]}>
            {
              products?.length > 0 && products.map((product, index) => product.attributes.tendance &&
                <SwiperSlide key={index} ><ProductUi isAvailable={product?.attributes?.isAvailable}  name={product.attributes.name} image={product.attributes.image} price={product.attributes.price} size={product.attributes.size} marque={product.attributes.marque} id={product?.id} /> </SwiperSlide>
              )
            }
          </Swiper>
        </Media>
        <Media lessThan="lg">
          <div className="d-flex justify-content-between align-items-center">
            <p style={styleMob}>{titre}</p>
            <Link href="/products" passHref>
              <Button variant={"light"}  className="btn btn-outline-light btn-slider mb-4 w-50">Voir tout</Button>
            </Link>
          </div>
            <div className="colShoes">
              {
                products?.length > 0 && products.map((product, index) => product.attributes.tendance &&
                  <ProductUi key={index} isAvailable={product?.attributes?.isAvailable}  name={product.attributes.name} image={product.attributes.image} price={product.attributes.price} size={product.attributes.size} marque={product.attributes.marque} id={product?.id}/>
                )
              }
            </div>
        </Media>
      </MediaContextProvider>

    </div>
  )
}
export default FeaturedProduct
