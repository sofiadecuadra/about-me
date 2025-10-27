import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import Card from "@components/Card/Card";
import cleanupImg from "@images/cleanup/cleanup.png";
import alertsImg from "@images/cleanup/alerts.png";
import calendarImg from "@images/cleanup/calendar.png";
import proceduresImg from "@images/cleanup/procedures.png";

import style from "./CleanUp.module.css";

const CleanUp = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  const handleCleanUpDemoClick = () => {
    window.open("https://www.cleanupweb.com/index", "_blank");
  };

  return (
    <div className={style.background} ref={ref}>
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h2 className={style.text}>{t("CleanUp.Title")}</h2>
          <h3 className={style.workExperienceTitle}>
            {t("CleanUp.WorkExperience.Title")}
          </h3>
          <p>{t("CleanUp.WorkExperience.Period")}</p>
          <p className={style.text}>{t("CleanUp.Description")}</p>
        </div>
        <div className={style.problemContainer}>
          <img src={cleanupImg} className={style.image} alt="Img" />
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
          {t("CleanUp.WebsiteButton")}
        </button>

        <div className={style.achievementsContainer}>
          <span className={style.workExperiencePeriod}>
            {t("CleanUp.WorkExperience.Achievements.Title")}
          </span>
          <p className={style.achievementText}>
            {t("CleanUp.WorkExperience.Achievements.First")}
          </p>
          <p className={style.achievementText}>
            {t("CleanUp.WorkExperience.Achievements.Second")}
          </p>
          <p className={style.achievementText}>
            {t("CleanUp.WorkExperience.Achievements.Third")}
          </p>
        </div>
      </div>
    </div>
  );
});

export default CleanUp;
