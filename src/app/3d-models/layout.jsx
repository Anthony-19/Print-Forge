
import Link from "next/link";
import styles from './page.module.css'


export default function ModelLayout({ children }) {
  return (
        <section className={styles.modelLayoutContainer}>
          <div className={styles.modelContainer}>
            <section className={styles.categoryListContainer}>
               <ul className={styles.categoryList}>
                <li >
                    <Link href="/3d-models/category1" className={styles.categoryLink}>All</Link>
                </li>
                <li>
                    <Link href="/3d-models/category2" className={styles.categoryLink}>3D PRINTER</Link>
                </li>
                <li>
                    <Link href="/3d-models/category3" className={styles.categoryLink}>ART</Link>
                </li>
                 <li>
                    <Link href="/3d-models/category3" className={styles.categoryLink}>EDUCATION</Link>
                </li>
                 <li>
                    <Link href="/3d-models/category3" className={styles.categoryLink}>FASHION</Link>
                </li>
                 <li>
                    <Link href="/3d-models/category3" className={styles.categoryLink}>HOBBY & DIY</Link>
                </li>
                <li>
                    <Link href="/3d-models/category3" className={styles.categoryLink}>HOUSEHOLD</Link>
                </li>
                <li>
                    <Link href="/3d-models/category3" className={styles.categoryLink}>MANIATURES</Link>
                </li>
                <li>
                    <Link href="/3d-models/category3" className={styles.categoryLink}>TOOLS</Link>
                </li>
                 <li>
                    <Link href="/3d-models/category3" className={styles.categoryLink}>TOYS & GAMES</Link>
                </li>
               </ul>
            </section>
            {children}
          </div>
        </section>
       
   
  );
}
