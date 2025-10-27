import { RefObject, useCallback, useRef } from "react";
import { I18nextProvider } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

import { Section } from "@/utils";
import i18n from "@/translation";
import Layout from "@components/Layout/Layout";
import useSectionTracking from "@/hooks/useSectionTracking";

import Home from "@sections/1-Home/Home";
import AboutMe from "@sections/2-AboutMe/AboutMe";
import CleanUp from "@/sections/3-WorkExperience/1-CleanUp/CleanUp";
import LoopStudio from "@/sections/3-WorkExperience/2-LoopStudio/LoopStudio";
import ContactMe from "@/sections/4-ContactMe/ContactMe";

import { ThemeProvider } from "./contexts/ThemeContext";

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

  const { variant, currentSection } = useSectionTracking(refs);

  const scrollToSection = useCallback((section: Section) => {
    const ref = refs[section];
    window.scrollTo({
      top: ref.current?.offsetTop ?? 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Layout
          scrollToSection={scrollToSection}
          variant={variant}
          currentSection={currentSection}
        >
          <div ref={containerRef}>
            <Home
              ref={homeRef}
              scrollToContactMe={() => scrollToSection("ContactMe")}
            />
            <AboutMe ref={aboutMeRef} />
            <CleanUp ref={portfolioRef} />
            <LoopStudio ref={expensifyRef} />
            <ContactMe ref={contactMeRef} />
          </div>
        </Layout>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
