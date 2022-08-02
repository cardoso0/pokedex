import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enUSJson from './translations/enUS.json'
import ptBRJson from './translations/ptBR.json'

i18n.use(initReactI18next).init({
  lng: navigator.language,
  // fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    'en-US': enUSJson,
    'pt-BR': ptBRJson,
  },
})

export default i18n