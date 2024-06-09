import i18n from "i18next";
// import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import en from "./i18n/en.json"
import ru from "./i18n/ru.json"
import id from "./i18n/id.json"
import ph from "./i18n/ph.json"

i18n
  // .use(i18nBackend)
  .use(initReactI18next)
  .init({
    // resources,
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      },
      id: {
        translation: id
      },
      ph: {
        translation: ph
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    // backend: {
    //   loadPath: `i18n/{{lng}}.json`,
    // },
  });

export default i18n;
