// 'use client'
import React from 'react'
import Image from 'next/image'
import Form from 'next/form'
import styles from './page.module.css'
import data from '../data/data.json'

async function ModelPage({searchParams}) {
    const response = data
    console.log(searchParams)
    const value = await searchParams
    console.log(value)
    const {query} = value
    console.log(query)

    const filteredTest = query ? response.filter((item) => (
        item.category.toLowerCase().includes(query.toLowerCase()))) : response 

  return (
    <div style={{
        fontSize: '1rem'
    }} className={styles.categoriesSection}>
        <section className={styles.categoryHeader}>
            <h2>3D Models</h2>
            <Form action="/3d-models/">
                <input 
                type="text" 
                name="query" 
                placeholder="Search For a model" 
                className={styles.searchInput}
                />
            </Form>
        </section>
        <section className={styles.categoryCardContainer}>
              {filteredTest && filteredTest.map((item) =>(
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
     
    </div>
  )
}

export default ModelPage
