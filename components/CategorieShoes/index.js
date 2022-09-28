import styles from './CategorieShoes.module.css'
import {Image} from "react-bootstrap";
const CategorieShoes=()=>{
  return (
    <div className={`${styles.categorieShoes} container mt-md-5 mt-4 px-0`} data-aos="fade-down" id="allShoes">
      <div className="mens">
        <a href=""><Image src="/banner5.jpg" alt=""/></a>
      </div>
      <div className={styles.othersProduct}>
        <div className="new-collection">
          <a href=""><Image src="/banner6.jpg" alt=""/></a>
        </div>
        <div className="new-look">
          <a href=""><Image src="/banner7.jpg" alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default CategorieShoes
