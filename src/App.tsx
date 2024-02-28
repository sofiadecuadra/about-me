import { I18nextProvider } from "react-i18next";
import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/1-Home";
import i18n from "./translation";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Navbar />
            <Home />
        </I18nextProvider>
    );
}

export default App;
