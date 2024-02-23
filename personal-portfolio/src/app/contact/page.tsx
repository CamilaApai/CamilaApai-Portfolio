// page.tsx
import styles from "@/app/page.module.css";
import Header from "../header";
import Footer from "../footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <h1>Get In Touch</h1>
        <p>
          Phone: <a href="tel:53895435349">+(538) 95 435 349</a>
        </p>
        <p>
          <a href="mailto:example@kinsta.com">Email: camilaapai@hotmail.com</a>
        </p>
      </main>

      <Footer />
    </>
  );
}
