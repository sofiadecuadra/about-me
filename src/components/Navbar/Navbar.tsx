import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Section, sections } from "../../utils";
import NavOption from "./NavOption/NavOption";
import style from "./Navbar.module.css";
import classNames from "classnames";

interface NavbarProps {
  scrollToSection: (section: Section) => void;
  variant?: "default" | "cleanup" | "expensify";
}

const Navbar: FC<NavbarProps> = ({ scrollToSection, variant = "default"}) => {
  const [currentOption, setCurrentOption] = useState(sections[0]);
  const { t } = useTranslation();

  return (
    <div className={classNames(style['container'], style[`background-${variant}`])}>
      {sections.map((item) => (
        <NavOption
          key={item}
          text={t(`Sections.${item}`)}
          onClick={() => {
            scrollToSection(item);
            setCurrentOption(item);
          }}
          selected={item === currentOption}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default Navbar;
