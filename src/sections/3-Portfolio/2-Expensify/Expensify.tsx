import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import style from "./Expensify.module.css";
import Card from "../../../components/Card/Card";
import categoriesImg from "../../../assets/images/expensify/categories.png"
import expensesImg from "../../../assets/images/expensify/expenses.png"


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
          image={categoriesImg}
        />
        <Card
          title={t("Expensify.Expenses.Title")}
          description={t("Expensify.Expenses.Description")}
          variant="expensify"
          image={expensesImg}
          imagePosition="right"
        />
      </div>
    </div>
  );
});

export default Expensify;
