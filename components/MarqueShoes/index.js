import styles from './MarqueShoes.module.css'
import {useEffect, useRef, useState} from "react";
import ProductsByMarque from "../ProductsByMarque";
import {ShimmerPostList} from "react-shimmer-effects";
import {Media, MediaContextProvider} from '../../utils/Media';
import {Swiper, SwiperSlide} from "swiper/react";
const MarqueShoes=({products})=>{

  const marques=[... new Set(products.map((products)=>products?.attributes?.marque))]
  const [selected,setSelected]=useState(0)
  const [marque,setMarque]=useState(marques[0])
  const [isLoading,setIsLoading]=useState(false)
  const shoes=useRef(null)
  const handleClick = (index,marque) => {
    console.log("Index",index)
       setMarque(marque)
        setSelected(index)
  }
  const loading=(nb=4)=>{
    return ( <div className="container">
      <ShimmerPostList postStyle="STYLE_ONE" col={nb} row={1} gap={30} />
    </div>)
  }
  useEffect(()=>{
 // selected >0 &&  shoes.current.scrollIntoView({ behavior: "smooth" })
    const timer=setTimeout(()=>{
     setIsLoading(true)
    },1000)
return ()=>{
      setIsLoading(false)
      clearTimeout(timer)
    }
  },[marque, selected])
  return (
    <>
      <MediaContextProvider>
        <Media greaterThan={'lg'}>
          <div className="container my-md-5" ref={shoes} data-aos="fade-left">
          <Swiper slidesPerView={4.8} spaceBetween={1}>
            {
              marques.length > 0 && marques.map((element,index)=>
                <SwiperSlide key={index} >
                  <div className={`${styles.marque} ${index===selected? styles.active:''}`} onClick={()=>handleClick(index,element)}>
                    <span className="font-weight-bolder">{element}</span>
                  </div>
                </SwiperSlide>
              )
            }
          </Swiper>
            <div className="mt-5">
              {isLoading ?<ProductsByMarque products={products} selectedMarque={marque}/>:loading()}
            </div>
          </div>
        </Media>
        <Media lessThan={'lg'}>
          <div className="my-5 container" data-aos="fade-left">
            <Swiper slidesPerView={2.3} spaceBetween={10}>
              {
                marques.length > 0 && marques.map((element,index)=>
                  <SwiperSlide key={index} >
                    <div className={`${styles.marque} ${index===selected? styles.active:''}`} onClick={()=>handleClick(index,element)}>
                      <span className="font-weight-bolder">{element}</span>
                    </div>
                  </SwiperSlide>
                )
              }
            </Swiper>
            <div className="mt-5">
              {isLoading ?<ProductsByMarque products={products} selectedMarque={marque}/>:loading(1)}
            </div>

          </div>

        </Media>
      </MediaContextProvider>

    </>

  )
}

export default MarqueShoes
