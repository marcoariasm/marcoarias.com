import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import translate_es from "./locales/es/translate.json";
import translate_en from "./locales/en/translate.json";

i18n
  // .use(Backend)
  // .use(LanguageDetector)
  // .use(initReactI18next)
  .init({
    lng: 'en',
    // debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        global: translate_es
      },
      en: {
        global: translate_en
      }
    }
  });


export default i18n;