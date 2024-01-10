import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Software Developer",
    Svg: require("@site/static/img/coder.png").default,
    description: (
      <>
        at JP Morgan Chase, working with React, Java SpringBoot, and SQL
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
        <a href="https://twitter.com/shahpreetk">Twitter </a>
        for book recommendations.
      </>
    ),
    link: "/portfolio/category/art",
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
        <img src={Svg} className={styles.featureSvg} />
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
