import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { HEADER_HEIGHT, useWindowDimensions } from "../../utils";
import style from "./Home.module.css";

interface HomeProps {
  scrollToContactMe: () => void;
}

const Home = forwardRef<HTMLDivElement, HomeProps>(({ scrollToContactMe }, ref) => {
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
        <img src="./src/assets/images/memoji.png" alt="Memoji" className={style["memoji-mobile"]} />
        <h6>{t("Home.Career")}</h6>
        <p>{t("Home.Description")}</p>
        <button className={style["button"]} onClick={scrollToContactMe}>{t("Home.HireMe")}</button>
      </div>
      <img src="./src/assets/images/memoji.png" alt="Memoji" className={style["memoji-web"]} />
    </div>
  );
});

export default Home;
