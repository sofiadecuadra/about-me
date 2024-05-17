import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Section, sections } from "../../utils";
import NavOption from "./NavOption/NavOption";
import style from "./Navbar.module.css";
import classNames from "classnames";
import { MenuIcon } from "../../assets/icons";

interface NavbarProps {
  scrollToSection: (section: Section) => void;
  variant?: "default" | "cleanup" | "expensify";
  currentSection: Section;
}

const Navbar: FC<NavbarProps> = ({
  scrollToSection,
  variant = "default",
  currentSection,
}) => {
  const [currentOption, setCurrentOption] = useState(currentSection);
  useEffect(() => {
    setCurrentOption(currentSection);
  }, [currentSection]);

  const { t } = useTranslation();
  const [displayMenuOptions, setDisplayMenuOptions] = useState(false);

  return (
    <div
      className={classNames(style["container"], style[`background-${variant}`])}
      onClick={() => setDisplayMenuOptions(!displayMenuOptions)}
    >
      <MenuIcon
        className={classNames(
          style["menu-icon"],
          style[`menu-icon-color-${variant}`]
        )}
      />
      <div className={classNames(style["menu-options-container"], style[`background-mobile-${variant}`], { [style.active]: displayMenuOptions }, { [style.inactive]: !displayMenuOptions })}>
        {sections.map((item) => (
          <NavOption
            key={item}
            text={t(`Sections.${item}`)}
            onClick={() => {
              scrollToSection(item);
              setCurrentOption(item);
              setDisplayMenuOptions(false);
            }}
            selected={item === currentOption}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
