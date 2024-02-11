import styles from "./page.module.css";
import Link from 'next/link';

export default function Navigation() {
    return (
<nav className={styles.nav}>
          <ul>
           <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
             <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
);
}