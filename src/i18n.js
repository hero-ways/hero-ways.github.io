import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation';
import de from './locales/de/translation';

// Translation resources
const resources = {
  en: { translation: en },
  de: { translation: de },
};

i18n
  .use(LanguageDetector) // auto-detect language
  .use(initReactI18next) // connect to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;