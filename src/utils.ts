import { useEffect, useState } from "react";

export const HEADER_HEIGHT = 0;

export type Section =
  | "Home"
  | "AboutMe"
  | "Portfolio"
  | "Expensify"
  | "ContactMe";

export const sections: Section[] = [
  "Home",
  "AboutMe",
  "Portfolio",
  "ContactMe",
];

export function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}

// export const handleLinkedInClick = () => {
//   window.open(import.meta.env.LINKEDIN_URL, "_blank");
// };

