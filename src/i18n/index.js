import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { messages } from "./languages"

i18n.use(initReactI18next).init({
  lng: navigator.language,
  // fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
  defaultNS: ['translations'],
  ns: ['translations'],
  resources: messages,
})

export default i18n