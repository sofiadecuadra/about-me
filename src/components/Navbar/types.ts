import { Section } from "../../utils";
import { NavOptionVariant } from "./NavOption/types";

export type NavbarProps = {
  scrollToSection: (section: Section) => void;
  variant?: NavOptionVariant;
  currentSection: Section;
};
