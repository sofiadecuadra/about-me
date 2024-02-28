import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { HEADER_HEIGHT, useWindowDimensions } from "../../../utils";
import style from "./CleanUp.module.css";

const CleanUp = forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();
    const { height } = useWindowDimensions();

    return (
        <div className={style["background"]}>
            <div className={style["container"]} style={{ height: height - HEADER_HEIGHT }} ref={ref}>
                <div className={style["subContainer"]}>
                    <h2 className={style["text"]}>{t("CleanUp.Title")}</h2>
                    <p className={style["text"]}>{t("CleanUp.Description")}</p>
                </div>
                <img src="./src/assets/images/me.png"></img>
            </div>
        </div>
    );
});

export default CleanUp;
