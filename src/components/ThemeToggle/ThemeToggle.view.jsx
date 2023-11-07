import React, { useEffect, useState } from 'react';
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="nav_ac" onClick={themetoggle}>
        <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default ThemeToggle;