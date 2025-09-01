import React from 'react'
import Image from 'next/image'
import Form from 'next/form'
import styles from './page.module.css'

function ModelPage() {
  return (
    <div style={{
        fontSize: '1rem'
    }} className={styles.categoriesSection}>
        <section className='categoryHeader'>
            <h2>3D Models</h2>
            <Form action="/3d-models/">
                <input 
                type="text" 
                name="query" 
                placeholder="search for a model" />
            </Form>
        </section>
        <section className='categoryCardContainer'>
            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>

            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>

            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>


            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>


            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>


            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>


            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>


            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>


            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>


            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>



            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>



            <div className="categoryCard">
                <Image 
                    src="/about-hero-image.svg"
                    alt="3D Model"
                    className='cardImage'
                    width={300}
                    height={300}
                    priority
                />
                <div className="categoryCardBody">
                    <h3 className='cardTitle'>Printer Upgrade Kit</h3>
                    <p className='cardDescription'>Enhancement parts for 3D printer performance</p>
                    <button className='cardCategory'>3D-Printer</button>
                    <div className='reactionContainer'>
                        <Image 
                            src="/love-reaction.svg"
                            alt="Reaction"
                            width={100}
                            height={100}
                        />
                        <p className='numberReaction'>300</p>
                    </div>
                </div>
            </div>
        </section>
     
    </div>
  )
}

export default ModelPage
