import { CSSLogo, CSharpLogo, GitLogo, HTMLLogo, JavaScriptLogo, NodeLogo, ReactLogo, TypescriptLogo } from "../../assets/logos";
import styles from "./Carousel.module.css";

const Carousel = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles.marquee}>
                <TypescriptLogo />
                <ReactLogo />
                <HTMLLogo />
                <CSSLogo />
                <JavaScriptLogo />
                <GitLogo />
                <NodeLogo />
                <CSharpLogo />
                <TypescriptLogo />
                <ReactLogo />
                <HTMLLogo />
                <CSSLogo />
                <JavaScriptLogo />
                <GitLogo />
                <NodeLogo />
                <CSharpLogo />
            </div>
        </div>
    );
};

export default Carousel;
