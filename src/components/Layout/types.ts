import { ReactNode } from "react";
import { Section } from "@/utils";

export type LayoutProps = {
  children: ReactNode;
  scrollToSection: (section: Section) => void;
  variant?: "cleanup" | "expensify" | "loopstudio";
  currentSection: Section;
};
