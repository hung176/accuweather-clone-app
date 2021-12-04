import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translationEN.json";
import translationVI from "./locales/vi/translationVI.json";

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

const lngLocalStore = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: lngLocalStore,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
