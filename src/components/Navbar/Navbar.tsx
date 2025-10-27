import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import { sections } from "@/utils";
import { MenuIcon } from "@assets/icons";

import NavOption from "./NavOption/NavOption";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import style from "./Navbar.module.css";
import { NavbarProps } from "./types";

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
      className={classNames(style.container, style[`background-${variant}`])}
    >
      <div className={style.placeholder}></div>
      <div className={style["menu-icon-container"]}>
        <MenuIcon
          className={classNames(
            style["menu-icon"],
            style[`menu-icon-color-${variant}`]
          )}
          onClick={() => setDisplayMenuOptions(!displayMenuOptions)}
        />
      </div>
      <div
        className={classNames(
          style["menu-options-container"],
          style[`background-mobile-${variant}`],
          { [style.active]: displayMenuOptions },
          { [style.inactive]: !displayMenuOptions }
        )}
      >
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
        <div className={style["mobile-language-selector"]}>
          <LanguageSelector variant={variant} />
        </div>
      </div>
      <div className={style["desktop-language-selector"]}>
        <LanguageSelector variant={variant} />
      </div>
    </div>
  );
};

export default Navbar;
