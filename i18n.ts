import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";
import translationFR from "./locales/fr/translation.json";

const resources = {
  en: {
    nav: translationEN.nav,
    home: translationEN.home,
    pages: translationEN.pages,
    portfolio: translationEN.portfolio,
    blog: translationEN.blog,
    shop: translationEN.shop,
    contacts: translationEN.contacts,
  },
  it: {
    nav: translationIT.nav,
    home: translationIT.home,
    pages: translationIT.pages,
    portfolio: translationIT.portfolio,
    blog: translationIT.blog,
    shop: translationIT.shop,
    contacts: translationIT.contacts,
  },
  fr: {
    nav: translationFR.nav,
    home: translationFR.home,
    pages: translationFR.pages,
    portfolio: translationFR.portfolio,
    blog: translationFR.blog,
    shop: translationFR.shop,
    contacts: translationFR.contacts,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    ns: ["common", "form"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
