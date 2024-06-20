import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel/Carousel";
import { HEADER_HEIGHT, useWindowDimensions } from "../../utils";
import style from "./AboutMe.module.css";

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

  const containerStyle =
    width > 768 ? { height: height - HEADER_HEIGHT } : undefined;

  return (
    <div className={style["container"]} style={containerStyle} ref={ref}>
      <img
        src="./src/assets/images/me.jpg"
        className={style["image"]}
        alt="Me"
      />
      <div className={style["subContainer"]}>
        <h2>{t("AboutMe.Title")}</h2>
        <p className={style["text"]}>
          {t("AboutMe.Description.First")}
          <br />
          <br />
          {t("AboutMe.Description.Second")}
          <br />
          <br />
          {t("AboutMe.Description.Third")}
        </p>
        <Carousel />
        {/* <button className={style["button"]}>{t("Home.DownloadCV")}</button> */}
      </div>
    </div>
  );
});

export default AboutMe;
