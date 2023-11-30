import { useEffect } from "react";
import clsx from "clsx";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

import * as Cronitor from "@cronitorio/cronitor-rum";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("", styles.heroBanner)}>
      <div className="container">
        <div className={clsx("", styles.card)}>
          <div className={styles.cardContent}>
            <img
              className={clsx("", styles.heroUserProfile)}
              src="/img/shahpreetk-photo.jpg"
              alt="Preet Shah Profile Photo"
            />
            <div className={styles.textContent}>
              <Heading as="h1" className="hero__title">
                Preet Shah
              </Heading>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.heroSocialLinks}>
                <a
                  title="LinkedIn Profile"
                  href="https://www.linkedin.com/in/shahpreetk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} style={{ color: "#e2e8f0" }} />
                </a>
                <a
                  title="Resume"
                  href="/files/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf size={24} style={{ color: "#e2e8f0" }} />
                </a>
                <a
                  title="GitHub Profile"
                  href="https://www.github.com/shahpreetk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} style={{ color: "#e2e8f0" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    Cronitor.load("1814971e2b4c9a714e9d35d7a7e11461");
    Cronitor.track("Pageview");
  }, []);

  return (
    <Layout
      title="Software Developer"
      description="Frontend | HTMLS, CSS, React.js | Backend | Java, Nodejs, Express | Fullstack Web Developer | Kitty lover."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <footer className={clsx("hero__footer", styles.footer)}>
        <div className="container">
          <div>
            <div style={{ textAlign: "right", marginTop:"30px"}}>
              <small>
                This site uses{" "}
                <a
                  href="https://analytics.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics
                </a>
                .
              </small>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
