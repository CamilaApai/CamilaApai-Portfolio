// page.tsx
import styles from "@/app/page.module.css";
import Header from "../header";
import Image from "next/image";
import Footer from "../footer";
import { projectData } from "../data.js";

export default function Projects() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Projects</h1>
        <div className={styles.skillsDiv}>
          <div>
            {projectData &&
              projectData.map((project) => (
                <div className="project-card" key={project.id}>
                  <div className="project-header">
                    <div className="small-icons">
                      <a href={project.gitHubLink}>
                        <Image
                          src="/github.png"
                          alt="GitHub Icon"
                          width={32}
                          height={32}
                        />
                      </a>
                    </div>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
