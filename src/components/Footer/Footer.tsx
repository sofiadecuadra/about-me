import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <p className={styles.copyright}>
        &copy; Copyright Sofía Decuadra {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
