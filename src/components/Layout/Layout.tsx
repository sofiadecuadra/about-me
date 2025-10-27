import { ToastContainer } from "react-toastify";

import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

import { LayoutProps } from "./types";
import styles from "./Layout.module.css";

export const Layout = ({
  children,
  scrollToSection,
  variant,
  currentSection,
}: LayoutProps) => {
  return (
    <div className={styles.container} role="main">
      <Navbar
        scrollToSection={scrollToSection}
        variant={variant}
        currentSection={currentSection}
      />
      <div className={styles.content}>{children}</div>
      <ToastContainer
        toastClassName={styles.toast}
        theme="dark"
        position="bottom-right"
        draggable
        pauseOnHover
        className={styles.toastContainer}
      />
      <Footer />
    </div>
  );
};

export default Layout;
