import React from 'react'
import Image from 'next/image'
import Form from 'next/form'
import styles from './page.module.css'
import data from '../data/data.json'

function ModelPage() {
    const response = data
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
              {response && response.map((item) =>(
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
            
            <div className={styles.categoryCard}>
              
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

            <div className={styles.categoryCard}>
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className={styles.cardImage}
                    width={300}
                    height={300}
                    priority
                />
                <div className={styles.categoryCardBody}>
                    <h3 className={styles.cardTitle}>Printer Upgrade Kit</h3>
                    <p className={styles.cardDescription}>Enhancement parts for 3D printer performance</p>
                    <button className={styles.cardCategory}>3D-Printer</button>
                    <div className={styles.reactionContainer}>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                            className={styles.reactionImage}
                        />
                        <p className={styles.numberReaction}>300</p>
                    </div>
                </div>
            </div>

        </section>
     
    </div>
  )
}

export default ModelPage
