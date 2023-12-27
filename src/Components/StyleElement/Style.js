const Style = ({ darkMode, setDarkMode }) => {
  if (darkMode) {
    document.documentElement.style.setProperty(
      "--background-color-dark-light",
      "#232323"
    );
    document.documentElement.style.setProperty(
      "--font-color-dark-light",
      "white"
    );
    document.documentElement.style.setProperty(
      "--input-color-dark-light",
      "#3b3a3a"
    );
  } else {
    document.documentElement.style.setProperty(
      "--background-color-dark-light",
      "white"
    );
    document.documentElement.style.setProperty(
      "--font-color-dark-light",
      "black"
    );
    document.documentElement.style.setProperty(
      "--input-color-dark-light",
      "white"
    );
  }
  return;
};

export default Style;
