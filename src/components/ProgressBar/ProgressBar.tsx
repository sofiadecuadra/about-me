import style from "./ProgressBar.module.css";

const ProgressBar = () => {
    return (
        <div className={style["row"]}>
            <div className={style["container"]}>
                <div className={style["progress"]}></div>
            </div>
            <p>98%</p>
        </div>
    );
};

export default ProgressBar;
