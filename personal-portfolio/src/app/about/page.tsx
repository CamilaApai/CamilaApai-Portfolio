// page.tsx
import styles from "@/app/page.module.css";
import Header from "../header";
import Image from "next/image";
import Footer from "../footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Biography</h1>
        <Image
          src="/profile.png"
          alt="Camila Apai Picture"
          className={styles.profile}
          width={300}
          height={300}
          priority
        />
        <p>
          I&rsquo;m a 22-year-old student. I&rsquo; was born in the beautiful
          city of Montevideo, Uruguay. My journey in the world of technology
          began a couple of years ago leading me to pursue a Software
          Development Degree at Brigham Young University–Idaho, with an
          anticipated graduation in July 2024.
        </p>

        <p>
          In addition to my degree, I earned a Web and Computer Programming
          Certificate from BYU&ndash;Pathway Worldwide in December 2022. This
          certification has equipped me with proficiency in Python, HTML/CSS,
          Java, and JavaScript, highlighting my strong design and
          problem-solving skills. I pride myself on actively contributing to all
          phases of the software lifecycle, from planning and design to
          development and testing.
        </p>
        <p>
          My educational journey further expanded during the Youth to Program
          course from March 2023 to November 2023 at Ceibal in Montevideo. Here,
          I explored imperative and object-oriented programming, improving my
          computational thinking skills. Not only did I excel in my performance,
          but I also took on a leadership role by assisting peers and showcasing
          my ability for problem-solving and motivation.
        </p>
        <p>
          Beyond my professional pursuits, I enjoy a well-rounded lifestyle,
          finding joy in reading, outdoor activities, and video games. As I
          continue to evolve in my career, I&rsquo;m committed to lifelong
          learning and eagerly embrace new technologies, languages, and
          platforms. With my passion for software development and diverse skill
          set, I&rsquo;m prepared to keep learning and expanding my skill set.
        </p>
        <h2>Skills</h2>
        <div className={styles.skillsDiv}>
          <p>
            <Image src="/html.png" alt="HTML Icon" width={32} height={32} />
            HTML
          </p>
          <p>
            <Image src="/css.png" alt="CSS Icon" width={32} height={32} />
            CSS
          </p>
          <p>
            <Image
              src="/javascript.png"
              alt="JavaScript Icon"
              width={32}
              height={32}
            />
            JavaScript
          </p>
          <p>
            <Image src="/python.png" alt="Python Icon" width={32} height={32} />
            Python
          </p>
          <p>
            <Image src="/react.png" alt="React Icon" width={32} height={32} />
            React
          </p>
          <p>
            <Image src="/c-sharp.png" alt="C# Icon" width={32} height={32} />
            C#
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
