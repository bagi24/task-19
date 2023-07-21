import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import translations from "./translations";

export const SomeComponent = () => {
  const { language } = useContext(LanguageContext);
  const t = (key) => translations[language][key];

  return <div className="some-component">{t("greeting")}</div>;
};
