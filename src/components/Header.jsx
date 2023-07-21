import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import translations from "./translations";

const Header = ({ SomeComponent }) => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = (key) => translations[language][key];

  return (
    <header className="header">
      <div className="language-buttons">
        <button
          className={`language-button ${language === "en" ? "active" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className={`language-button ${language === "ge" ? "active" : ""}`}
          onClick={() => changeLanguage("ge")}
        >
          Georgian
        </button>
      </div>
      <SomeComponent />
    </header>
  );
};

export default Header;
