import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import zh from "./translations/zh.json";
import hi from "./translations/hi.json";
import es from "./translations/es.json";

const sharedResources = {
  en: { translation: en },
  zh: { translation: zh },
  hi: { translation: hi },
  es: { translation: es },
};

export const initI18n = (appResources?: any) => {
  const finalResources = { ...sharedResources };

  if (appResources) {
    Object.keys(appResources).forEach((lang) => {
      const typedLang = lang as keyof typeof sharedResources;
      if (finalResources[typedLang]) {
        // Deep merge the 'common' object to prevent it from being overwritten by an empty local one
        finalResources[typedLang] = {
          ...finalResources[typedLang],
          translation: {
            ...finalResources[typedLang].translation,
            ...appResources[lang].translation,
            common: {
              ...(finalResources[typedLang].translation as any).common,
              ...(appResources[lang].translation as any).common,
            },
          },
        };
      } else {
        (finalResources as any)[lang] = appResources[lang];
      }
    });
  }

  i18n.use(initReactI18next).init({
    resources: finalResources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
};

export default i18n;
