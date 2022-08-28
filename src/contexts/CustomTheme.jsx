import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { normal } from '../style/themes/highContrast/theme'

export const CustomTheme = createContext()

export const CustomThemeProvider = ({ children }) => {
  
  const theme = JSON.parse(localStorage.getItem('hightContrast'))
  const verifyTheme = theme === null ? normal : theme

  const [tema, setTema] = useState(verifyTheme)

  return (
    <CustomTheme.Provider value={{ tema, setTema }}>
      <ThemeProvider theme={verifyTheme}>
        {children}
      </ThemeProvider>
    </CustomTheme.Provider>
  )
}