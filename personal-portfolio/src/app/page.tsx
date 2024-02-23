import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <Header />
      <main className={styles.main}>
        <h1>Hi, I´m Camila!</h1>
        <Image
          src="/profile.png"
          alt="Camila Apai Picture"
          className={styles.profile}
          width={300}
          height={300}
          priority
        />

        <p>
          I am a dedicated Software Development student at Brigham Young
          University–Idaho. I enjoy building websites and working on programming
          projects. Explore my latest projects, and contact me if you wish!
        </p>
        <div className={styles.homeDiv}>
          <a href="/resume.pdf" className={styles.button} download>
            Resume
          </a>
          <a href="/contact" className={styles.button}>
            Contact
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
