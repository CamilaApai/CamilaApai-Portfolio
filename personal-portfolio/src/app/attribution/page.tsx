// page.tsx
import styles from "@/app/page.module.css";
import Header from "../header";
import Footer from "../footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Attribution</h1>
        <p>
          <a href="https://www.flaticon.com/free-icons/html" title="html icons">
            Html icons created by Freepik - Flaticon
          </a>
        </p>
        <p>
          <a href="https://www.flaticon.com/free-icons/css" title="css icons">
            Css icons created by Pixel perfect - Flaticon
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/javascript"
            title="javascript icons"
          >
            Javascript icons created by Freepik - Flaticon
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/python"
            title="python icons"
          >
            Python icons created by Freepik - Flaticon
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/react"
            title="react icons"
          >
            React icons created by Kiranshastry - Flaticon
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/c-sharp"
            title="c sharp icons"
          >
            C sharp icons created by Freepik - Flaticon
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/github"
            title="github icons"
          >
            Github icons created by Pixel perfect - Flaticon
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
