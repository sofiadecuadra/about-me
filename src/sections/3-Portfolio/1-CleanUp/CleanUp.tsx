import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import style from "./CleanUp.module.css";
import Card from "../../../components/Card/Card";
import cleanupImg from "../../../assets/images/cleanup/cleanup.png";
import alertsImg from "../../../assets/images/cleanup/alerts.png"; 
import calendarImg from "../../../assets/images/cleanup/calendar.png"; 
import proceduresImg from "../../../assets/images/cleanup/procedures.png"; 


const CleanUp = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const handleCleanUpDemoClick = () => {
    window.open("https://www.youtube.com/watch?v=yFOnTAac8FI", "_blank");
  };

  return (
    <div className={style.background} ref={ref}>
      <div className={style.container} >
        <div className={style["title-container"]}>
          <h2 className={style.text}>{t("CleanUp.Title")}</h2>
          <p className={style.text}>{t("CleanUp.Description")}</p>
        </div>
        <div className={style["problem-container"]}>
        <img
            src={cleanupImg}
            className={style.image}
            alt="Img"
          />
          <div>
            <Card
              title={t("CleanUp.Problem.Title")}
              description={t("CleanUp.Problem.Description")}
              variant="cleanup"
            />
          </div>
        </div>

        <Card
          title={t("CleanUp.Solution.Title")}
          description={t("CleanUp.Solution.Description")}
          variant="cleanup"
        />
        <Card
          title={t("CleanUp.Procedures.Title")}
          description={t("CleanUp.Procedures.Description")}
          variant="cleanup"
          image={proceduresImg}
          imagePosition="right"
        />
        <Card
          title={t("CleanUp.Alerts.Title")}
          description={t("CleanUp.Alerts.Description")}
          variant="cleanup"
          image={alertsImg}
        />
        <Card
          title={t("CleanUp.Calendar.Title")}
          description={t("CleanUp.Calendar.Description")}
          variant="cleanup"
          image={calendarImg}
          imagePosition="right"
        />
        <button onClick={handleCleanUpDemoClick} className={style.button}>
          {t("CleanUp.WatchDemo")}
        </button>
      </div>
    </div>
  );
});

export default CleanUp;
