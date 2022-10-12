import styles from './CategorieShoes.module.css'
import {Image} from "react-bootstrap";
const CategorieShoes=()=>{
  return (
    <div className={`${styles.categorieShoes} container mt-md-5 mt-4 px-0`} data-aos="fade-down" id="allShoes">
      <div className="mens">
       <Image src="/banner5.jpg" alt=""/>
      </div>
      <div className={styles.othersProduct}>
        <div className="new-collection">
    <Image src="/banner6.jpg" alt=""/>
        </div>
        <div className="new-look">
         <Image src="/banner7.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default CategorieShoes
