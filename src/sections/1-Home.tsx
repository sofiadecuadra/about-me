import { useTranslation } from "react-i18next";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t("Home.Name")}</h1>
            <h2>{t("Home.Name")}</h2>
            <h3>{t("Home.Name")}</h3>
            <h4>{t("Home.Name")}</h4>
            <h5>{t("Home.Name")}</h5>
            <h6>{t("Home.Name")}</h6>
            <p>{t("Home.Name")}</p>

            <div className="card">
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <ProgressBar />
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <button>Button</button>
        </>
    );
};

export default Home;
