import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import trasENG from './en.json';
import trasUZ from './uz.json';

const resources = {
  en: {
    translation: trasENG,
  },
  uz: {
    translation: trasUZ,
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'uz',
  fallbackLng: 'uz',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;