import {Card} from "react-bootstrap";
import Link from 'next/link'
import styles from '../../styles/ProductUi.module.css'
import {useState} from "react";
import {AiFillHeart} from "react-icons/ai";
import {getImage} from "../../utils/getImage";
const ProductUi=({id,name,image,size,price,marque,tendance,bigFormat })=>{
  const [isLiked,setIsLiked]=useState(false)
  return(
    <Card  bsPrefix="card" className={`${styles.card} ${bigFormat?'w-100':''}`}>
      <Link href={'/products/'+name?.toLowerCase().replaceAll(' ', '-').concat('_',id)}>
        <a><Card.Img variant="top" src={getImage(image)} className={styles.cardImage}/></a>
      </Link>
      <Card.Body>
        <Card.Title bsPrefix={styles.shoesName}>{name}<AiFillHeart onClick={()=>setIsLiked(!isLiked)} color={!isLiked?'#e6e6e6':'#f25862'}/></Card.Title>
         <div className={`d-flex justify-content-between mt-md-3 ${styles.cardText}`}>
           <p><span style={{color:"gray"}}>Pointure</span> {size}</p>
           <span><span style={{color:"gray"}}>Prix</span><span className={styles.price}> {price}</span></span>
         </div>
        <div className="d-flex justify-content-between">
          <Link href={'/products/'+name?.toLowerCase().replaceAll(' ', '-').concat('_',id)}>
            <a className="btn btn-outline-light btn-slider">Voir en détails</a>
          </Link>
          <div className={styles.badge}>
            <span style={{color:"#f25862"}}>Vendu</span>
          </div>
        </div>


      </Card.Body>
    </Card>
  )
}
export default ProductUi
