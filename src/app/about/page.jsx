import React from "react";
import Image from "next/image";
import styles from './page.module.css';

function AboutPage() {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImageContainer}>
          <Image
            className={styles.aboutImage}
            src="/about-hero-image.svg"
            alt="About Print Forge"
          
            width={600}
            height={400}
          />
        </div>
        <div className={styles.aboutText}>
          <p className={styles.aboutHeader}>ABOUT PRINTFORGE</p>
          <h2 className={styles.aboutTitle}>Empowering makers worldwide</h2>
          <p className={styles.aboutDescription}>
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing.{" "}
          </p>

          <p className={styles.aboutDescription}>
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </div>

      <hr className={styles.aboutDivider} />

      <div className={styles.aboutCardContainer}>
        <div className={styles.aboutCard}>
         <div className={styles.aboutCardTitleContainer}>
            <Image
              className={styles.aboutCardImage}
              src="/stack-icon.svg"
              alt="Stack-Icon"
              width={25}
              height={25}
            />
            <h3 className={styles.aboutCardTitle}>100K+ Models</h3>
          </div>
          <p className={styles.aboutCardDescription}>
            Access our vast library of community-created 3D models, from practical tools to artistic creations.
          </p>
        </div>

        <div className={styles.aboutCardDividerContainer}>
          <span className={styles.aboutCardDivider}></span>
        </div>

        <div className={styles.aboutCard}>
          <div className={styles.aboutCardTitleContainer}>
            <Image
              className={styles.aboutCardImage}
              src="/globe-simple-icon.svg"
              alt="Globe-Simple"
             width={25}
              height={25}
            />
            <h3 className={styles.aboutCardTitle}>Active Community</h3>
          </div>
          <p className={styles.aboutCardDescription}>
            Join thousands of makers who share tips, provide feedback, and collaborate on projects.
          </p>
        </div>

         <div className={styles.aboutCardDividerContainer}>
          <span className={styles.aboutCardDivider}></span>
        </div>

        <div className={styles.aboutCard}>
          <div className={styles.aboutCardTitleContainer}>
            <Image
              className={styles.aboutCardImage}
              src="/flag-icon.svg"
              alt="Flag-Icon"
             width={25}
              height={25}
            />
            <h3 className={styles.aboutCardTitle}>Free to Use</h3>
          </div>
          <p className={styles.aboutCardDescription}>
            Most models are free to download, with optional premium features for power users.
          </p>
        </div>
      </div>

      <hr />
 
      <div className={styles.visionContainer}>
        <h2 className={styles.visionTitle}>Our vision</h2>
        <p className={styles.visionDescription}>
          At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.
        </p>

        <div className={styles.visionDividerContainer}>
          <span className={styles.visionDivider}></span>
        </div>

        <p className={styles.visionDescription}>
          Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
