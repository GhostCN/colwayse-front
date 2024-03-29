import {Media, MediaContextProvider} from "../../utils/Media";
import Layout from "../../components/Layout";
import {Grid} from "../../utils/Display";
import ProductUi from "../../components/FeaturedProduct/ProductUi";
import {Application} from "../../lib/Application";
import {ROUTE_ALL_PRODUCT} from "../../utils/Constante";
const AllProducts=({products})=>{
  return(
    <Layout>
      {products?.length > 0 &&
      <MediaContextProvider>
        <Media greaterThan={'lg'}>
          <div className="container mt-5">
            <h2 className="font-italic mb-4">Tous les baskets</h2>
            <Grid rowGap={40} columnGap={40} repeat={3}>
              {products?.length > 0 && products?.map((product,index)=>
                <ProductUi key={index} isAvailable={product?.attributes?.isAvailable}  slug={product?.attributes?.slug} name={product?.attributes?.name} image={product?.attributes?.image} price={product?.attributes?.price} size={product?.attributes?.size} marque={product?.attributes?.marque} bigFormat={true}/>
              )}
            </Grid>
          </div>
        </Media>
        <Media lessThan="lg">
          <div className="container mt-5 px-0">
            <h2 className="font-italic mb-4">Tous les baskets</h2>
            <div className="colShoes">
              {products?.length > 0 && products.map((product,index)=>
                <ProductUi key={index} slug={product?.attributes?.slug} isAvailable={product?.attributes?.isAvailable} name={product?.attributes?.name} image={product?.attributes?.image} price={product?.attributes?.price} size={product?.attributes?.size} marque={product?.attributes?.marque} bigFormat={true}/>
              )}
            </div>
          </div>
        </Media>
      </MediaContextProvider>
      }

    </Layout>

  )
}
export async function getStaticProps() {
  const tokenResponse = await Application.auth()
  const products = await Application.getData( {url: ROUTE_ALL_PRODUCT,token:tokenResponse})
  const props = {
    'products': products,
  };
  return {
    props,
    revalidate: 1
  }
}

export default AllProducts
