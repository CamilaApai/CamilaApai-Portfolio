import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import Footer from "./footer";

export default function Contact() {
  return (
    <>
    <Header />
      <main>
        <h2>Contact Me!</h2>
        <p>Phone: +598 95 435 449</p>
        <p>Email: camilaapai@hotmail.com</p>
      </main>
    <Footer />
    </>
  );
}
