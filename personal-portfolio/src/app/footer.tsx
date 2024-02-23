import styles from "./page.module.css";

export default function Footer() {
    return (
      <footer className={styles.footer}>
            <hr />
          <p> Camila Apai | Personal Portfolio</p>
          <p>
          © {new Date().getFullYear()}. All rights deserved
          </p>
          <p>🔗<a href="/attribution">Resources Used</a></p>
      </footer>
    );
  }