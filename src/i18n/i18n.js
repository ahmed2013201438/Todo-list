import i18n from 'i18next'
import en from './locales/en/translation.json'
import ar from './locales/ar/translation.json'

const lang = localStorage.getItem("site-lang") || "en"
i18n.init({
  lng: lang,
  keySeparator: false,
  fallbackLng: "en",
  supportedLngs: ["en", "ar"],
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
})

export default i18n