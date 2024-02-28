import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import style from "./Expensify.module.css";
import Card from "../../../components/Card/Card";

const Expensify = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <div className={style["background"]}>
      <div className={style["container"]} ref={ref}>
        <div className={style["title-container"]}>
          <h2 className={style["text"]}>{t("Expensify.Title")}</h2>
          <p className={style["text"]}>{t("Expensify.Description")}</p>
        </div>
        <Card
          title={t("Expensify.Categories.Title")}
          description={t("Expensify.Categories.Description")}
          variant="expensify"
          image="./src/assets/images/expensify/categories.png"
          imageWidth="700px"
          maxTextWidth="320px"
        />
        <Card
          title={t("Expensify.Expenses.Title")}
          description={t("Expensify.Expenses.Description")}
          variant="expensify"
          image="./src/assets/images/expensify/expenses.png"
          imageWidth="700px"
          maxTextWidth="320px"
          imagePosition="right"
        />
      </div>
    </div>
  );
});

export default Expensify;
