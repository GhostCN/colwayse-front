import styles from '../../styles/ProductUi.module.css'
import ProductUi from "../FeaturedProduct/ProductUi";
import {Media, MediaContextProvider} from '../../utils/Media';
import {Swiper, SwiperSlide} from "swiper/react";
const ProductsByMarque = ({products, titre,selectedMarque}) => {
  const styleP = {
    fontSize: "30px",
    fontWeight: "bolder"
  }
  return (
    <MediaContextProvider>
      <Media greaterThan={'lg'}>
        <div className="container mt-4 px-0" data-aos="zoom-in">
          <p style={styleP}>{titre}</p>
          <div className={styles.feauredShoes}>
            {
              products?.length  > 0 && selectedMarque && products.map((product,index)=> product.attributes.marque===selectedMarque && <ProductUi key={index} name={product.attributes.name} image={product.attributes.image} price={product.attributes.price} size={product.attributes.size} marque={product.attributes.marque}/>
              )
            }
          </div>
        </div>
      </Media>
      <Media lessThan={'lg'}>
        <div className="container mt-5 px-0" data-aos="fade-right">
          <p style={styleP}>{titre}</p>
        <Swiper slidesPerView={1.2} >
          <div className={styles.feauredShoes}>
            {
              products?.length  > 0 && selectedMarque && products.map((product,index)=> product.attributes.marque===selectedMarque &&
                <SwiperSlide key={index}><ProductUi  name={product.attributes.name} image={product.attributes.image} price={product.attributes.price} size={product.attributes.size} marque={product.attributes.marque}/></SwiperSlide>
              )
            }
          </div>
        </Swiper>
        </div>
      </Media>
    </MediaContextProvider>

  )
}
export default ProductsByMarque


