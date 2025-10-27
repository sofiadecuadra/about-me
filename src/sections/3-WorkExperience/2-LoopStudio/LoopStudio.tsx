import { forwardRef, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import loopstudioImg from "@images/loopstudio/loopstudio.jpeg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import style from "./LoopStudio.module.css";

const LoopStudio = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const { observeElement } = useIntersectionObserver();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const unobserve = observeElement(imgRef, style.visible);
    return () => unobserve();
  }, [observeElement]);

  return (
    <div className={style.background}>
      <div className={style.container} ref={ref}>
        <div className={style.titleContainer}>
          <h2 className={style.text}>{t("LoopStudio.Title")}</h2>
          <h3 className={style.workExperienceTitle}>
            {t("LoopStudio.WorkExperience.Title")}
          </h3>
          <p>{t("LoopStudio.WorkExperience.Period")}</p>
          <p className={style.text}>
            {t("LoopStudio.WorkExperience.Description")}
          </p>
        </div>

        <div className={style.teamImageContainer}>
          <img
            src={loopstudioImg}
            alt="LoopStudio Team"
            className={style.teamImage}
            ref={imgRef}
          />
        </div>

        <div className={style.achievementsContainer}>
          <span className={style.workExperiencePeriod}>
            {t("CleanUp.WorkExperience.Achievements.Title")}
          </span>
          <p className={style.achievementText}>
            {t("LoopStudio.Achievements.Payroll.Description")}
          </p>
          <p className={style.achievementText}>
            {t("LoopStudio.Achievements.DaysOff.Description")}
          </p>
          <p className={style.achievementText}>
            {t("LoopStudio.Achievements.Cybersecurity.Description")}
          </p>
          <p className={style.achievementText}>
            {t("LoopStudio.Achievements.Awards.Description")}
          </p>
        </div>
      </div>
    </div>
  );
});

export default LoopStudio;
