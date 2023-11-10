import React, { useEffect, useState } from 'react';
import { FiMoon } from "react-icons/fi";
import {LuSunMoon} from "react-icons/lu"
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
    <div>
      <button className="nav_ac" onClick={themetoggle}>
      {theme === "light" ? (<FiMoon size={25} />) : (<LuSunMoon size={25} />)  }
        
      </button>
    </div>
  );
};

export default ThemeToggle;