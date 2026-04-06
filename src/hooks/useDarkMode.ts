import { useEffect, useState } from "react";

export default function useDarkMode(): [boolean, () => void] {
    const [dark, setDark] = useState<boolean>(() => {
        const saved = localStorage.getItem("theme");
        return saved === "dark";
    });

    const toggleDarkMode = () => setDark(prev => !prev);

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return [dark, toggleDarkMode];
}