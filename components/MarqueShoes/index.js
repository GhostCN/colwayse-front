import styles from './CategorieShoes.module.css'
const CategorieShoes=()=>{
  return (
    <div className={`${styles.categorieShoes} container mt-5`}>
      <div className="mens">
        <a href=""><img src="/banner5.jpg" alt=""/></a>
      </div>
      <div className={styles.othersProduct}>
        <div className="new-collection">
          <a href=""><img src="/banner6.jpg" alt=""/></a>
        </div>
        <div className="new-look">
          <a href=""><img src="/banner7.jpg" alt=""/></a>
        </div>
      </div>
    </div>
  )
}

export default CategorieShoes
