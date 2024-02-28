import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel/Carousel";
import { HEADER_HEIGHT, useWindowDimensions } from "../../utils";
import style from "./AboutMe.module.css";

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { height } = useWindowDimensions();

  return (
    <div
      className={style["container"]}
      style={{ height: height - HEADER_HEIGHT }}
      ref={ref}
    >
      <img src="./src/assets/images/me.png"></img>
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
      </div>
    </div>
  );
});

export default AboutMe;
