import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import { HEADER_HEIGHT } from "@/utils";
import { useWindowSize } from "@/hooks/useWindowSize";

import style from "./Home.module.css";
import memojiImg from "@images/memoji.png";
import { HomeProps } from "./types";

const Home = forwardRef<HTMLDivElement, HomeProps>(
  ({ scrollToContactMe }, ref) => {
    const { t } = useTranslation();
    const { height } = useWindowSize();

    return (
      <div
        className={style.container}
        style={{ height: height - HEADER_HEIGHT }}
        ref={ref}
      >
        <div className={style.subContainer}>
          <h5>{t("Home.Greetings")}</h5>
          <h1>
            {t("Home.Name")}
            <br />
            {t("Home.Surname")}
          </h1>
          <img
            src={memojiImg}
            alt="Memoji"
            className={style["memoji-mobile"]}
          />
          <h6>{t("Home.Career")}</h6>
          <p>{t("Home.Description")}</p>
          <button className={style.button} onClick={scrollToContactMe}>
            {t("Home.ContactMe")}
          </button>
        </div>
        <img src={memojiImg} alt="Memoji" className={style["memoji-web"]} />
      </div>
    );
  }
);

export default Home;
