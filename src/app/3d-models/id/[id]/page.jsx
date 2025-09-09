import data from '../../../data/data.json'
import styles from '../../page.module.css'
import Image from 'next/image'
export default async function CategoryPage({params}){
    console.log(params)
    const {id} = await  params
    const ids = Number(id)
    console.log(id)
    const item = data.find((res) => res.id === ids)
    console.log(item)
  
    return (

        <section className={styles.categoryPageCardContainer}>
          
        <div key={item.id} className={styles.categoryPageCard}>
              
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImageId}
                    width={400}
                    height={400}
                    priority
                />
                <div className={styles.categoryCardBody}>
                     <div className={`${styles.reactionContainer} ${styles.largeReactionContainer}`}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={200}
                            height={200}
                            className={`${styles.reactionImage} ${styles.largeReaction}`}
                        />
                        <p className={`${styles.numberReaction} ${styles.largeNumberReaction}`}>{item.likes}</p>
                    </div>
                    <h3 className={`${styles.cardTitle} ${styles.largeCardTitle}`}>{item.name}</h3>
                    <section className={styles.buttonSection}>
                        <button className={styles.cardCategory}>{item.category}</button>
                        <button className={styles.cardCategory}>{item.name}</button>
                    </section>

                    <p className={`${styles.cardDescription} ${styles.largeCardDescription}`}>{item.description}</p>
                    <p className={styles.cardDate}>Added on {item.dateAdded}</p>
                   
                   
                </div>
            </div> 
                
        
             
         

        </section>
    )
}