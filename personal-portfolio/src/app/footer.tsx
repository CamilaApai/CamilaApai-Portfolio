import Image from "next/image";
import styles from "./page.module.css";

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <hr />
          <p> Camila Apai | Personal Portfolio</p>
          <p>2024 &#169; All rights deserved </p>
        </div>
      </footer>
    );
  }