import { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { normal, contrast } from '../style/themes/highContrast/theme'

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

export const useThemeContext = () => {

  const { tema, setTema } = useContext(CustomTheme);
  
  const switchTheme = () => {
    if (tema.title === 'contrast') {
      setTema(normal)
      localStorage.setItem('hightContrast', JSON.stringify(normal))
    } else {
      setTema(contrast)
      localStorage.setItem('hightContrast', JSON.stringify(contrast))
    }
  }
  
  return {
    switchTheme
  }
}