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
            <h2 className="font-italic mb-4">All products</h2>
            <Grid rowGap={40} columnGap={40} repeat={3}>
              {products?.length > 0 && products?.map((product,index)=>
                <ProductUi key={index} name={product?.attributes?.name} image={product?.attributes?.image} price={product?.attributes?.price} size={product?.attributes?.size} marque={product?.attributes?.marque} bigFormat={true}/>
              )}
            </Grid>
          </div>
        </Media>
        <Media lessThan="lg">
          <div className="container mt-5">
            <h2 className="font-italic mb-4">All products</h2>
            <div className="colShoes">
              {products?.length > 0 && products.map((product,index)=>
                <ProductUi key={index} name={product?.attributes?.name} image={product?.attributes?.image} price={product?.attributes?.price} size={product?.attributes?.size} marque={product?.attributes?.marque} bigFormat={true}/>
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
  const products = await Application.getData({token: tokenResponse, url: ROUTE_ALL_PRODUCT})
  const props = {
    'products': products,

  };
  return {
    props,
    revalidate: 1
  }
}

export default AllProducts
