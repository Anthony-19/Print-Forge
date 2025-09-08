
import Link from "next/link";
import styles from './page.module.css'
import data from '../data/data.json'


export default async function ModelLayout({ children }) {
    // const data = await fetch('http://localhost:3000/api/3d-models', { cache: 'no-store' });
    // const response = await data.json()
    const response = data
  return (
        <section className={styles.modelLayoutContainer}>
          <div className={styles.modelContainer}>
            <section className={styles.categoryListContainer}>
               <ul className={styles.categoryList}>
                <li >
                    <Link href="/3d-models" className={styles.categoryLink}>All</Link>
                </li>
                {response.map((item) => (
                <li key={item.id}>
                    <Link href={`/3d-models/${item.id}`} className={styles.categoryLink}>{item.name.toUpperCase()}</Link>
                </li>

                ))}
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
