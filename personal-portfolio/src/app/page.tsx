import styles from "./page.module.css";
import Header from "./header";
import Link from "next/link";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
