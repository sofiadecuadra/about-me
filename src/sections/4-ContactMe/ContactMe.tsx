import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { HEADER_HEIGHT, useWindowDimensions } from "../../utils";
import style from "./ContactMe.module.css";

const ContactMe = forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();
    const { height } = useWindowDimensions();

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/sofía-decuadra-noya-4a8842245", "_blank");
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:decuadrasofia@gmail.com";
    };

    return (
        <div className={style["container"]} style={{ height: height - HEADER_HEIGHT }} ref={ref}>
            <div className={style["subContainer"]}>
                <h2>{t("ContactMe.Title")}</h2>
                <p className={style["text"]}>{t("ContactMe.Description")}</p>
                <div className={style["buttons-container"]}>
                    <button onClick={handleLinkedInClick}>{t("SocialMedia.LinkedIn")}</button>
                    <button onClick={handleEmailClick}>{t("SocialMedia.Email")}</button>
                </div>
            </div>
            <img src="./src/assets/images/me.png"></img>
        </div>
    );
});

export default ContactMe;
