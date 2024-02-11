import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./nav";

export default function Header() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navigation />
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              alt="Website Logo"
              className={styles.vercelLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
        <div className={styles.socialMedia}>
            {/* Social Media Icons */}
            <a href="www.linkedin.com/in/camila-apai" rel="noopener noreferrer">
              <img src="linkedin.png" alt="Camila Apai Linkedin Profile" />
            </a>
            <a href="https://www.instagram.com/" rel="noopener noreferrer">
              <img src="instagram.png" alt="Camila Apai Instagram Profile" />
            </a>
            <a href="https://github.com/CamilaApai?tab=projects" rel="noopener noreferrer">
              <img src="github.png" alt="Camila Apai GitHub Profile" />
            </a>
          </div>
      </div>
    </main>
  );
}
