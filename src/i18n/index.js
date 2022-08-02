import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enJson from './translations/en.json'
import ptBRJson from './translations/ptBR.json'

i18n.use(initReactI18next).init({
  lng: navigator.language,
  // fallbackLng: "ptBR",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    'en-US': enJson,
    'pt-BR': ptBRJson,
  },
})

export default i18n