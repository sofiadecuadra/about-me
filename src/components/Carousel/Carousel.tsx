import {
  CSSLogo,
  CSharpLogo,
  GitLogo,
  HTMLLogo,
  JavaScriptLogo,
  NodeLogo,
  ReactLogo,
  TypescriptLogo,
} from "../../assets/logos";
import styles from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.marquee}>
        <TypescriptLogo className={styles["logo"]} />
        <ReactLogo className={styles["logo"]} />
        <HTMLLogo className={styles["logo"]} />
        <CSSLogo className={styles["logo"]} />
        <JavaScriptLogo className={styles["logo"]} />
        <GitLogo className={styles["logo"]} />
        <NodeLogo className={styles["logo"]} />
        <CSharpLogo className={styles["logo"]} />
        <TypescriptLogo className={styles["logo"]} />
        <ReactLogo className={styles["logo"]} />
        <HTMLLogo className={styles["logo"]} />
        <CSSLogo className={styles["logo"]} />
        <JavaScriptLogo className={styles["logo"]} />
        <GitLogo className={styles["logo"]} />
        <NodeLogo className={styles["logo"]} />
        <CSharpLogo className={styles["logo"]} />
      </div>
    </div>
  );
};

export default Carousel;
