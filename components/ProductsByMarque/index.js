import styles from '../../styles/ProductUi.module.css'
import ProductUi from "./ProductUi";
const FeaturedProduct = ({products, titre}) => {
  const styleP = {
    fontSize: "30px",
    fontWeight: "bolder"
  }
  return (
    <div className="container mt-4">
      <p style={styleP}>{titre}</p>
      <div className={styles.feauredShoes}>
        {
          products?.length > 0 && products.map((product, index) => <ProductUi key={index} {...product}/>)
        }
      </div>
    </div>
  )
}
export default FeaturedProduct
