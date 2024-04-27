import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { HEADER_HEIGHT, useWindowDimensions } from "../../utils";
import style from "./Home.module.css";

const Home = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { height } = useWindowDimensions();

  return (
    <div
      className={style["container"]}
      style={{ height: height - HEADER_HEIGHT }}
      ref={ref}
    >
      <div className={style["subContainer"]}>
        <h5>{t("Home.Greetings")}</h5>
        <h1>
          {t("Home.Name")}
          <br />
          {t("Home.Surname")}
        </h1>
        <h6>{t("Home.Career")}</h6>
        <p>{t("Home.Description")}</p>
        {/* <ProgressBar /> */}
        <button className={style["button"]}>{t("Home.HireMe")}</button>
      </div>
      <img src="./src/assets/images/memoji.png"></img>
    </div>
  );
});

export default Home;
