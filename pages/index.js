import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import {Application} from "../lib/Application";
import {parseCookies, setCookie} from "nookies";
import {ROUTE_ALL_PRODUCT, ROUTE_SLIDERS} from "../utils/Constante";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import FeaturedProduct from "../components/FeaturedProduct";
import MarqueShoes from "../components/MarqueShoes";
import CategorieShoes from "../components/CategorieShoes";


export default function Index({products,sliders}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <Layout>
      <Slider sliders={sliders}/>
      <CategorieShoes/>
      <FeaturedProduct products={products} titre="Les chaussures tendances"/>
      <MarqueShoes products={products}/>
    </Layout>
  )
}

export async function getStaticProps(){
  let sliders;
  let products;
  var tokenResponse=await Application.auth()
  setCookie('jwt', tokenResponse, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
  products=await Application.getData({token:tokenResponse,url:ROUTE_ALL_PRODUCT})
  sliders=await Application.getData({token:tokenResponse,url:ROUTE_SLIDERS})
  return {
    props: {products,sliders}, // will be passed to the page component as props
    revalidate: 1
  }
}
