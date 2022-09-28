import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css'
import '../styles/sizing.scss'
import 'swiper/css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {ProductsContext} from "../utils/ProductsContext";
import {useState} from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
