import Layout from "../../components/Layout";
import ProductsDetails from "../../components/ProductsDetails";
import FeaturedProduct from "../../components/FeaturedProduct";
import {Application} from "../../lib/Application";
import {ROUTE_ALL_PRODUCT} from "../../utils/Constante";

const PageDetails = ({products,product}) => {
  return (
    <Layout>
          <ProductsDetails product={product?.attributes}/>
       <FeaturedProduct products={products} titre="Produits similaires"/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const tokenResponse = await Application.auth()
  const products = await Application.getData({token: tokenResponse, url: ROUTE_ALL_PRODUCT})
  let pages = [];
  products?.map((element) => pages.push({
    params: {
      id: element?.attributes?.name.toLowerCase().replaceAll(' ', '-')+'_'+element.id
    }
  }))
  return {
    paths: pages,
    fallback: true
  }
}

export async function getStaticProps({params}) {
  const id = params.id
  const tokenResponse = await Application.auth()
  const products = await Application.getData({token: tokenResponse, url: ROUTE_ALL_PRODUCT})
  let product = {};
  products?.map((element) => {
      if (element?.attributes?.name.toLowerCase() === id.split('_')[0].replaceAll('-', ' ')){
        return product = element
      }
    }
  );
  const props = {
    'product': product,
    'products': products,

  };
  return {
    props,
    revalidate: 10
  }
}

export default PageDetails
