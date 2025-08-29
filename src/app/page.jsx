import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h6 className="goToPlatform">YOUR GO-TO PLATFORM FOR 3D PRINTING FILES</h6>
        <h2 className="discover">Discover what’s possible with 3D printing</h2>
        <h5 className="joinCommunity">Join our community of creators and explore a vast library of user-submitted models.</h5>
      <p>
        <Link href='/3d-models' className={styles.browseModels}>
          BROWSE MODELS
        </Link>
      </p>
    
      </main>
      <div className={styles.images}>
        <Image
          className={styles.heroImage}
          src="/hero-image.svg"
          alt="3D printed model"
          width={500}
          height={500}
        />
      </div>

     
    </div>
  );
}
