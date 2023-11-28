import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Software Developer",
    Svg: require("@site/static/img/coder.png").default,
    // description: (
    //   <>
    //     Docusaurus was designed from the ground up to be easily installed and
    //     used to get your website up and running quickly.
    //   </>
    // ),
  },
  {
    title: "Artist",
    Svg: require("@site/static/img/artist.png").default,
    // description: (
    //   <>
    //     Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
    //     ahead and move your docs into the <code>docs</code> directory.
    //   </>
    // ),
  },
  {
    title: "Contact Me",
    Svg: require("@site/static/img/contact.png").default,
    // description: (
    //   <>
    //     Want to rant about coding or discuss painting? Hit me an email on
    //     shahpreetk[at]outlook[dot]com
    //   </>
    // ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center",styles.featureDiv)}>
        <img src={Svg} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
