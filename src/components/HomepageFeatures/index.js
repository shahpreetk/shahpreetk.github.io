import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Software Developer",
    Svg: require("@site/static/img/coder.png").default,
    description: (
      <>
        at JP Morgan Chase, working with Python, React, Java SpringBoot, and SQL
        databases.
      </>
    ),
    link: "/portfolio/experience",
  },
  {
    title: "Artist",
    Svg: require("@site/static/img/artist.png").default,
    description: (
      <>
        and Murder Mystery novels enthusiast. Do check my{" "}
        <strong>
          <a
            style={{ margin: "5px", padding: "5px", bgColor: "transparent" }}
            href="https://twitter.com/shahpreetk"
          >
            Twitter
          </a>
        </strong>
        for book recommendations.
      </>
    ),
    link: "/portfolio/category/hobbies",
  },
  {
    title: "Contact Me",
    Svg: require("@site/static/img/contact.png").default,
    description: (
      <>
        Want to rant about coding or discuss painting? Hit me an email on{" "}
        <em>shahpreetk[at]outlook[dot]com</em>
      </>
    ),
    link: "/portfolio/about-me",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center", styles.featureDiv)}>
        <img alt={title} src={Svg} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
