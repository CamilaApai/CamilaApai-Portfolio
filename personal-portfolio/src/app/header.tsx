import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <div className={styles.logoContainer}>
        <a href="/">
          <Image
            src="/logo.png"
            alt="Website Logo"
            width={100}
            height={100}
            priority
          />
        </a>
      </div>
      <div className={styles.socialMedia}>
        <a href="www.linkedin.com/in/camila-apai" rel="noopener noreferrer">
          <Image
            src="/linkedin.png"
            alt="Camila Apai Linkedin Profile"
            width={50}
            height={50}
          />
        </a>
        <a href="https://www.instagram.com/" rel="noopener noreferrer">
          <Image
            src="/instagram.png"
            alt="Camila Apai Instagram Profile"
            width={50}
            height={50}
          />
        </a>
        <a
          href="https://github.com/CamilaApai?tab=projects"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.png"
            alt="Camila Apai GitHub Profile"
            width={50}
            height={50}
          />
        </a>
      </div>
    </header>
  );
}