import {Card} from "react-bootstrap";
import Link from 'next/link'
import styles from '../../styles/ProductUi.module.css'
import {useState} from "react";
import {AiFillHeart} from "react-icons/ai";
import {getImage} from "../../utils/getImage";
const ProductUi=({name,image,size,price,marque,tendance,bigFormat })=>{
  const [isLiked,setIsLiked]=useState(false)
  return(
    <Card  bsPrefix="card" className={`${styles.card} ${bigFormat?'w-100':''}`}>
      <Link href={'/products/'+name?.toLowerCase().replaceAll(' ', '-')}>
        <a><Card.Img variant="top" src={getImage(image)} className={styles.cardImage}/></a>
      </Link>
      <Card.Body>
        <Card.Title bsPrefix={styles.shoesName}>{name}<AiFillHeart onClick={()=>setIsLiked(!isLiked)} color={!isLiked?'#e6e6e6':'#f25862'}/></Card.Title>
         <div className={`d-flex justify-content-between mt-md-3 ${styles.cardText}`}>
           <p><span style={{color:"gray"}}>Pointure</span> {size}</p>
           <span><span style={{color:"gray"}}>Prix</span><span className={styles.price}> {price}</span></span>
         </div>
        <Link href={'/products/'+name?.toLowerCase().replaceAll(' ', '-')}>
          <a className="btn btn-outline-light btn-slider">Voir en détails</a>
        </Link>

      </Card.Body>
    </Card>
  )
}
export default ProductUi
