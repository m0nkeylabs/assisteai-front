import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translatationEN from './locales/en/translation.i18n.json';
import translatationBR from './locales/pt-br/translation.i18n.json';

const lngStorage = localStorage.getItem('lngAssisteAi');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      'en': {
        translations: translatationEN,
      },
      'pt-BR': {
        translations: translatationBR,
      },
    },
    lng: lngStorage || 'pt-BR',
    fallbackLng: ['en', 'pt-BR'],
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export function changeLanguage(lng) {
  i18n.changeLanguage(lng);
  localStorage.setItem('lngAssisteAi', lng);
}

export function getLanguage() {
  return localStorage.getItem('lngAssisteAi');
}
