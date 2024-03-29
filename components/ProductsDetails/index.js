import {useEffect, useState} from "react";
import ModalCenter from "../Modal";
import {Image} from "react-bootstrap";
import styles from '../../styles/ProductUi.module.css'
import {Media, MediaContextProvider} from '../../utils/Media';
import {useRouter} from "next/router";
import {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const ProductsDetails = ({product, id}) => {
  const styleTitle = {
    fontSize: "20px",
    fontFamily: "italic"
  }
  const [image, setImage] = useState(product?.image?.data?.attributes?.url)
  const router = useRouter()
  const changeImage = (img) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    return setImage(img)
  }
  useEffect(() => {
    changeImage(product?.image?.data?.attributes?.url)
  }, [product, router])
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <div className={`container d-flex justify-content-between flex-md-row flex-column p-0`}>
        <div className={`border w-md-50 w-100 mt-md-5 mt-5 ${styles.bordure}`} style={{border: "1px #dfdfdf"}}>
          {image && <Image src={image.startsWith('/') ? process.env.NEXT_PUBLIC_IMG_SERVER + image : image} alt=""
                           className="w-100 h-100" style={{transform: "scale(0.8)"}}/>}
        </div>
        <div className="mt-md-5 border p-md-5 px-5 pb-4 w-md-50 w-100">
          <h2 className="font-italic font-weight-bolder text-center"
              style={{marginTop: 20, color: "#f25862"}}>{product?.name}</h2>
          <div className="d-flex mb-4 mt-5 justify-content-between">
            <span className="font-weight-bolder" style={styleTitle}>Etat</span>
            <span className="font-weight-bolder" style={{color: "#f25862"}}>Chaussure de balle</span>
          </div>
          <div className="d-flex mb-4 justify-content-between">
            <span className="font-weight-bolder" style={styleTitle}>Marque</span>
            <span className="font-weight-bolder" style={{color: "#f25862"}}>{product?.marque}</span>
          </div>
          <div className="d-flex mb-4 justify-content-between">
            <span className="font-weight-bolder" style={styleTitle}>Pointure</span> <span className="font-weight-bolder"
                                                                                          style={{color: "#f25862"}}>{product?.size}</span>
          </div>
          <div className="d-flex mb-4 justify-content-between">
            <span className="font-weight-bolder" style={styleTitle}> Price</span> <span className="font-weight-bolder"
                                                                                        style={{color: "#f25862"}}>{product?.price}</span>
          </div>
          <div className="d-flex mb-4 justify-content-between">
            <span className="font-weight-bolder" style={styleTitle}>Chaussure</span>
            <span className="font-weight-bolder" style={{color: "#f25862"}}>{product?.isAvailable}</span>
          </div>
          {product?.isAvailable !== 'Vendu' &&
          <div className="d-flex justify-content-center">
            <a className="btn btn-outline-light btn-slider mt-md-4 w-100 w-md-50" style={{fontSize: "20px"}}
               onClick={() => setModalShow(true)}>Acheter directement</a>
          </div>
          }

          {/*<div className="d-flex justify-content-between flex-md-row flex-column">
            <a className="btn btn-outline-light btn-slider mt-md-4" style={{fontSize:"20px"}} onClick={()=>setModalShow(true)}>Acheter directement</a>
          <a className="btn btn-outline-light btn-slider mt-md-4 mt-3" style={{fontSize:"20px"}}>Ajouter au panier</a>
          </div>*/}

        </div>
      </div>
      {product?.imagesOthers &&

      <MediaContextProvider>
        <Media greaterThan={'lg'}>
          <div className="d-flex flex-row mt-md-4 mt-4 container p-0">
            {product?.imagesOthers?.data?.map((image, index) =>
              <Image key={index} className={`mr-4 w-md-25 w-25 ${styles.otherShoes}`}
                     src={image.attributes.url.startsWith('/') ? process.env.NEXT_PUBLIC_IMG_SERVER + image.attributes.url : image.attributes.url}
                     alt=""
                     style={{border: "1px solid #ddd", cursor: "pointer"}}
                     onClick={() => changeImage(image?.attributes?.url)}/>
            )}
          </div>
        </Media>
        <Media lessThan={'lg'}>
          <div className="d-flex flex-row mt-md-4 mt-4 container p-0">
            <Swiper slidesPerView={product?.imagesOthers?.data?.length > 2 ? 2.5 : 2} spaceBetween={5} autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }} modules={[Autoplay]}>
              {product?.imagesOthers?.data?.map((image, index) =>
                <SwiperSlide key={index}>
                  <Image key={index} className={`mr-4 w-md-25 w-25 ${styles.otherShoes}`}
                         src={image.attributes.url.startsWith('/') ? process.env.NEXT_PUBLIC_IMG_SERVER + image.attributes.url : image.attributes.url}
                         alt=""
                         style={{border: "1px solid #ddd", cursor: "pointer"}}
                         onClick={() => changeImage(image?.attributes?.url)}/>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Media>
      </MediaContextProvider>

      }


      <ModalCenter show={modalShow} onHide={() => setModalShow(false)} shoes={id}/>
    </>

  )
}

export default ProductsDetails
