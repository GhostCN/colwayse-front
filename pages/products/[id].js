import Layout from "../../components/Layout";
import ProductsDetails from "../../components/ProductsDetails";
import FeaturedProduct from "../../components/FeaturedProduct";
import {Application} from "../../lib/Application";
import {ROUTE_ALL_PRODUCT} from "../../utils/Constante";

const PageDetails = ({feats,product}) => {
  return (
    <Layout>
          <ProductsDetails product={product?.attributes} id={product?.id}/>
  {/* {feats && feats?.length > 0 && <FeaturedProduct products={feats} titre="Produits similaires"/>}*/}
    </Layout>
  )
}

export async function getStaticPaths() {
  const tokenResponse = await Application.auth()
  const products = await Application.getData({token: tokenResponse, url: ROUTE_ALL_PRODUCT})
  let pages = [];
  products?.map((element) => element?.attributes?.slug !== null && pages.push({
    params: {
      id: '/products/'+element?.attributes?.slug.trim()}
  }))
  return {
    paths: pages,
    fallback: true
  }
}

export async function getStaticProps({params}) {
  const id = params.id.split('/').pop()
  const tokenResponse=await Application.auth()
  const products = await Application.getData({url: ROUTE_ALL_PRODUCT,token:tokenResponse})
  let product = {};
  products?.map((element) => {
      if (element?.attributes?.slug === id){
        console.log('Comparaison',id,'VS',element?.attributes?.slug)
        return product = element
      }
    }
  );
/*  const featuring=products?.filter((prod=>prod?.attributes?.size===product?.attributes?.size
  ))
 const feats=featuring?.filter((feat=>feat.id!==product.id))
  console.log("feats",feats)*/
  const props = {
    'product': product,
  // 'feats': feats
  };
  return {
    props,
    revalidate: 1
  }
}

export default PageDetails
