import style from "./ProgressBar.module.css";
import { ProgressBarProps } from "./types";

const ProgressBar = ({}: ProgressBarProps = {}) => {
  return (
    <div className={style.row}>
      <div className={style.container}>
        <div className={style.progress}></div>
      </div>
      <p>98%</p>
    </div>
  );
};

export default ProgressBar;
