import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';

import EN from './en/en.json';
import COMPONENTS_EN from './en/components.json';
import HOME_EN from './en/home.json';
import PLANETS_EN from './en/planets.json';
import DETAIL_EN from './en/detail.json';
import SETTINGS_EN from './en/settings.json';

import ES from './es/es.json';
import COMPONENTS_ES from './es/components.json';
import HOME_ES from './es/home.json';
import PLANETS_ES from './es/planets.json';
import DETAIL_ES from './es/detail.json';
import SETTINGS_ES from './es/settings.json';

const resources = {
  es: {
    translation: {
      ...ES,
      ...COMPONENTS_ES,
      ...HOME_ES,
      ...PLANETS_ES,
      ...DETAIL_ES,
      ...SETTINGS_ES,
    },
  },
  en: {
    translation: {
      ...EN,
      ...COMPONENTS_EN,
      ...HOME_EN,
      ...PLANETS_EN,
      ...DETAIL_EN,
      ...SETTINGS_EN,
    },
  },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: 'es',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
