// src/hooks/useSectionTracking.ts
import { RefObject, useEffect, useState } from "react";
import { Section } from "@/utils";

type SectionRefs = Record<Section, RefObject<HTMLDivElement>>;

export const useSectionTracking = (refs: SectionRefs) => {
  const [variant, setVariant] = useState<
    "cleanup" | "expensify" | "loopstudio" | undefined
  >();
  const [currentSection, setCurrentSection] = useState<Section>("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(refs) as Array<Section>;
      const scrollPosition = window.scrollY;

      const visibleSection = sections.find((section) => {
        const ref = refs[section];
        if (ref && ref.current) {
          const top = ref.current.offsetTop;
          const bottom = top + ref.current.offsetHeight;
          return scrollPosition >= top && scrollPosition < bottom;
        }
        return false;
      });

      if (visibleSection === "Expensify") {
        setVariant("loopstudio");
        setCurrentSection("Portfolio");
      } else if (visibleSection === "Portfolio") {
        setVariant("cleanup");
        setCurrentSection("Portfolio");
      } else if (visibleSection) {
        setVariant(undefined);
        setCurrentSection(visibleSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return { variant, currentSection };
};

export default useSectionTracking;
