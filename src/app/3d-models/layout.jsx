
import Link from "next/link";
import styles from './page.module.css'
import data from '../data/data.json'


export default async function ModelLayout({ children }) {
    // const data = await fetch('http://localhost:3000/api/3d-models', { cache: 'no-store' });
    // const response = await data.json()
    const response = data
    const resp = [...new Set(response.map(item => item.category))]
    const res = resp.sort((a, b) => a.localeCompare(b));
    console.log(res)
  return (
        <section className={styles.modelLayoutContainer}>
          <div className={styles.modelContainer}>
            <section className={styles.categoryListContainer}>
               <ul className={styles.categoryList}>
                <li >
                    <Link href="/3d-models" className={styles.categoryLink}>All</Link>
                </li>
                {res.map((item) => (
                <li key={item}>
                    <Link href={`/3d-models/${item}`} className={styles.categoryLink}>{item.toUpperCase()}</Link>
                </li>

                ))}
            
               </ul>
            </section>
            {children}
          </div>
        </section>
       
   
  );
}
