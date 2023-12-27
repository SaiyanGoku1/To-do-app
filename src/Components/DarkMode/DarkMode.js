import React from "react";
import Moon from "../svg/MoonIcon";
import Sun from "../svg/SunIcon";
import "./DarkMode.css";
const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className={`dark_mode ${darkMode ? "light_mode" : ""}`}
    >
      {!darkMode ? <Moon /> : <Sun />}
    </div>
  );
};

export default DarkMode;
