import data from '../../data/data.json'
import styles from '../page.module.css'
import Image from 'next/image'
export default async function ModalPage({params}){
    // console.log(params)
    // const {id} = await  params
    // const ids = Number(id)
    // console.log(id)
    // const item = data.find((res) => res.id === ids)
    // console.log(item)
    const response = data
     const {category} = params
    const categoryList = category.toLowerCase()
    console.log(categoryList)
    const dataList = response.filter((res) => res.category === categoryList)

    console.log(dataList)


      if (!dataList || dataList.length === 0) {
        return <div>Model not found.</div>;
    }
    return (

        <section className={styles.categoryCardContainer}>
            {dataList.map((item) =>(
                      <div key={item.id} className={styles.categoryCard}>
              
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                    <button className={styles.cardCategory}>{item.category}</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>{item.likes}</p>
                    </div>
                </div>
            </div> 
                
            ))}
             
         

        </section>
    )
}