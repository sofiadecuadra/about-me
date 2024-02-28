import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Section, sections } from "../../utils";
import NavOption from "./NavOption/NavOption";
import style from "./Navbar.module.css";

interface NavbarProps {
  scrollToSection: (section: Section) => void;
}

const Navbar: FC<NavbarProps> = ({ scrollToSection }) => {
  const [currentOption, setCurrentOption] = useState(sections[0]);
  const { t } = useTranslation();

  return (
    <div className={style["container"]}>
      {sections.map((item) => (
        <NavOption
          key={item}
          text={t(`Sections.${item}`)}
          onClick={() => {
            scrollToSection(item);
            setCurrentOption(item);
          }}
          selected={item === currentOption}
        />
      ))}
    </div>
  );
};

export default Navbar;
