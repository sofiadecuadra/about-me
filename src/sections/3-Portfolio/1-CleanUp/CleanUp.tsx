import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import style from "./CleanUp.module.css";
import Card from "../../../components/Card/Card";

const CleanUp = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div className={style.background}>
      <div className={style.container} ref={ref}>
        <div className={style["title-container"]}>
          <h2 className={style.text}>{t("CleanUp.Title")}</h2>
          <p className={style.text}>{t("CleanUp.Description")}</p>
        </div>
        <Card
          title={t("CleanUp.Problem.Title")}
          description={t("CleanUp.Problem.Description.First")}
          variant="cleanup"
          image="./src/assets/images/cleanup/cleanup.png"
          imageWidth="350px"
        />
        <div className={style.solution}>
          <Card
            title={t("CleanUp.Solution.Title")}
            description={t("CleanUp.Solution.Description")}
            variant="cleanup"
          />
        </div>
        <Card
          title={t("CleanUp.Procedures.Title")}
          description={t("CleanUp.Procedures.Description")}
          variant="cleanup"
          image="./src/assets/images/cleanup/procedures.png"
          imagePosition="right"
          imageWidth="700px"
          maxTextWidth="320px"
        />
        <Card
          title={t("CleanUp.Alerts.Title")}
          description={t("CleanUp.Alerts.Description")}
          variant="cleanup"
          image="./src/assets/images/cleanup/alerts.png"
          imageWidth="700px"
          maxTextWidth="320px"
        />
        <Card
          title={t("CleanUp.Calendar.Title")}
          description={t("CleanUp.Calendar.Description")}
          variant="cleanup"
          image="./src/assets/images/cleanup/calendar.png"
          imagePosition="right"
          imageWidth="700px"
          maxTextWidth="320px"
        />
        <button className={style.button}>{t("CleanUp.WatchDemo")}</button>
      </div>
    </div>
  );
});

export default CleanUp;
