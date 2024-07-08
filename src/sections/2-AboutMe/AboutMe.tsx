import { useEffect, useRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel/Carousel";
import { HEADER_HEIGHT, observeElement, useWindowDimensions } from "../../utils";
import style from "./AboutMe.module.css";
import meImg from "../../assets/images/me.png"

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();

  const containerStyle =
    width > 768 ? { height: height - HEADER_HEIGHT } : undefined;

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const unobserve = observeElement(imgRef, style["visible"]);
    return () => unobserve();
  }, []);

  const handleCVClick = () => {
    window.open("https://drive.google.com/file/d/1s5L3BgKtMXnsKDw_ITIw0B5WisQnjf1m/view?usp=sharing", "_blank");
  };

  return (
    <div className={style["container"]} style={containerStyle} ref={ref}>
      <img
        src={meImg}
        className={style["image"]}
        alt="Me"
        ref={imgRef}
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
        <button onClick={handleCVClick} className={style["button"]}>{t("Home.OpenCV")}</button>
      </div>
    </div>
  );
});

export default AboutMe;
