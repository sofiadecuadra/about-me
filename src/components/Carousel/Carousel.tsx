import React from "react";

import {
  CSSLogo,
  CSharpLogo,
  GitLogo,
  JavaScriptLogo,
  NodeLogo,
  ReactLogo,
  TypescriptLogo,
} from "@assets/logos";

import styles from "./Carousel.module.css";

const Carousel = () => {
  const numRepetitions = 4;

  const logoSets = [...Array(numRepetitions)];

  return (
    <div className={styles.container}>
      <div className={styles.marquee}>
        {logoSets.map((_, index) => (
          <React.Fragment key={index}>
            <TypescriptLogo className={styles.logo} />
            <ReactLogo className={styles.logo} />
            <CSSLogo className={styles.logo} />
            <JavaScriptLogo className={styles.logo} />
            <GitLogo className={styles.logo} />
            <NodeLogo className={styles.logo} />
            <CSharpLogo className={styles.logo} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
