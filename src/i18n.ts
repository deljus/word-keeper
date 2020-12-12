import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locale/en/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEn,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
