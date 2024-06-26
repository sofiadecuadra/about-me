import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { I18nextProvider } from "react-i18next";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/1-Home/Home";
import AboutMe from "./sections/2-AboutMe/AboutMe";
import ContactMe from "./sections/4-ContactMe/ContactMe";
import i18n from "./translation";
import { Section } from "./utils";
import CleanUp from "./sections/3-Portfolio/1-CleanUp/CleanUp";
import Expensify from "./sections/3-Portfolio/2-Expensify/Expensify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const expensifyRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const refs: Record<Section, RefObject<HTMLDivElement>> = {
    Home: homeRef,
    AboutMe: aboutMeRef,
    Portfolio: portfolioRef,
    Expensify: expensifyRef,
    ContactMe: contactMeRef,
  };
  const [variant, setVariant] = useState<"cleanup" | "expensify" | undefined>();
  const [currentSection, setCurrentSection] = useState<Section>("Home");

  const handleScroll = () => {
    const sections = Object.keys(refs) as Array<string>;
    const scrollPosition = window.scrollY;

    const visibleSection = sections.find((section) => {
      const ref = refs[section as keyof typeof refs];
      if (ref && ref.current) {
        const top = ref.current.offsetTop;
        const bottom = top + ref.current.offsetHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      }
      return false;
    });

    if (visibleSection === "Expensify") {
      setVariant("expensify");
      setCurrentSection("Portfolio");
    } else if (visibleSection === "Portfolio") {
      setVariant("cleanup");
      setCurrentSection("Portfolio");
    } else {
      setVariant(undefined);
      setCurrentSection(visibleSection as Section);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((section: Section) => {
    const ref = refs[section];
    window.scrollTo({
      top: ref.current?.offsetTop ?? 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Navbar
        scrollToSection={scrollToSection}
        variant={variant}
        currentSection={currentSection}
      />
      <div ref={containerRef}>
        <Home
          ref={homeRef}
          scrollToContactMe={() => scrollToSection("ContactMe")}
        />
        <AboutMe ref={aboutMeRef} />
        <CleanUp ref={portfolioRef} />
        <Expensify ref={expensifyRef} />
        <ContactMe ref={contactMeRef} />
        <ToastContainer
          toastStyle={{
            backgroundColor: "#1a1a1a",
            color: "rgba(255, 255, 255, 0.93)",
          }}
          theme="dark"
          position="bottom-right"
          draggable
          pauseOnHover
          style={{ fontFamily: "Manrope", fontSize: "medium" }}
        />
        <p style={{ textAlign: "center", paddingBottom: "16px" }}>&copy; Copyright Sofía Decuadra 2024</p>
      </div>
    </I18nextProvider>
  );
}

export default App;
