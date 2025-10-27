import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { LanguageSelectorProps } from "./types";
import "../NavOption/NavOption.css";
import "./LanguageSelector.css";

const LanguageSelector: FC<LanguageSelectorProps> = ({
  variant = "default",
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-selector-wrapper">
      <button
        className={classNames(
          "nav-option",
          `nav-option-${variant}${currentLanguage === "en" ? "-selected" : ""}`
        )}
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={classNames(
          "nav-option",
          `nav-option-${variant}${currentLanguage === "es" ? "-selected" : ""}`
        )}
        onClick={() => changeLanguage("es")}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
