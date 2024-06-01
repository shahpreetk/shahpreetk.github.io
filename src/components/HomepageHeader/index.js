import Heading from "@theme/Heading";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "@site/src/pages/index.module.css";
import Link from "@docusaurus/Link";

export default function HomepageHeader() {
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
              <div style={{marginTop: "10px"}}>
                <Link className={styles.routeButtons} to="/portfolio/about-me">
                  About Me
                </Link>
                <Link className={styles.routeButtons} style={{marginLeft: "15px"}} to="/blog">
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
