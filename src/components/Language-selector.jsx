import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "ur", lang: "Urdu" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      className="p-2 border rounded"
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
