import Image from "next/image";
import styles from "./page.module.css";
 
 

export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
className="mt-5"
          src="/images/unsplash.png"
          alt="logo"
          width={1200}
          height={800}
          priority
        />
      </div>
     
    </section>
  );
}
