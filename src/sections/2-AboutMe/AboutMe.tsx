import { useEffect, useRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";

import Carousel from "@components/Carousel/Carousel";
import { HEADER_HEIGHT } from "@/utils";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import meImg from "@images/me.png";

import style from "./AboutMe.module.css";

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { height, isMobile } = useWindowSize();
  const { observeElement } = useIntersectionObserver();

  const containerStyle = !isMobile
    ? { height: height - HEADER_HEIGHT }
    : undefined;

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const unobserve = observeElement(imgRef, style.visible);
    return () => unobserve();
  }, [observeElement]);

  const handleCVClick = () => {
    window.open(import.meta.env.VITE_REACT_APP_CV_LINK || "", "_blank");
  };

  return (
    <div className={style.container} style={containerStyle} ref={ref}>
      <img src={meImg} className={style.image} alt="Me" ref={imgRef} />
      <div className={style.subContainer}>
        <h2>{t("AboutMe.Title")}</h2>
        <p className={style.text}>
          {t("AboutMe.Description.First")}
          <br />
          <br />
          {t("AboutMe.Description.Second")}
          <br />
          <br />
          {t("AboutMe.Description.Third")}
        </p>
        <Carousel />
        <button onClick={handleCVClick} className={style.button}>
          {t("Home.OpenCV")}
        </button>
      </div>
    </div>
  );
});

export default AboutMe;
