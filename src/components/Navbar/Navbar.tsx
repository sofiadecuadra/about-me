import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavOption from "./NavOption/NavOption";
import style from "./Navbar.module.css";

const OPTIONS = ["Home", "About", "Portfolio", "ContactMe"];

const Navbar = () => {
    const [currentOption, setCurrentOption] = useState(OPTIONS[0]);
    const { t } = useTranslation();

    return (
        <div className={style["container"]}>
            {OPTIONS.map((item) => (
                <NavOption
                    key={item}
                    text={t(`Sections.${item}`)}
                    onClick={() => {
                        setCurrentOption(item);
                    }}
                    selected={item === currentOption}
                />
            ))}
        </div>
    );
};

export default Navbar;
