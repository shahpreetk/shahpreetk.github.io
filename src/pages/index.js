import { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "@site/src/components/HomepageHeader";
import styles from "./index.module.css";

import * as Cronitor from "@cronitorio/cronitor-rum";


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
