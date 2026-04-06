import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar(): JSX.Element {
    const { i18n, t } = useTranslation();
    const [dark, toggleDarkMode] = useDarkMode();

    const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

    return (
        <nav>
            <div>
                <Link to="/">{t("home")}</Link>
                <Link to="/projects">{t("projects")}</Link>
                <Link to="/about">{t("about")}</Link>
                <Link to="/contact">{t("contact")}</Link>
            </div>

            <div>
                <select onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="zh">中文</option>
                </select>

                <button onClick={toggleDarkMode}>
                    {dark ? "Light" : "Dark"}
                </button>
            </div>
        </nav>
    );
}