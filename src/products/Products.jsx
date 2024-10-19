// import styles from './Products.module.scss';
import { ProductsInfo } from './ProductsInfo.jsx'
import { Header } from './../components/Header.jsx'
import { Footer } from './../components/Footer.jsx'
import { Catalog } from './Catalog.jsx'
import styles from './Products.module.scss';
import  './../index.css'

export function Products() {
  return <div className={styles.wrapper}>
    <div className={styles.header}><Header /></div>
    <div className={styles.info}><ProductsInfo /></div>
    <div className={styles.catalog}><Catalog /></div>
    <div className={styles.footer}><Footer /></div>
    
  </div>
}