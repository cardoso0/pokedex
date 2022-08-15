import { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '../hooks/useTheme'

export const CustomTheme = createContext()

export const CustomThemeProvider = ({ children }) => {
  
  const { verifyTheme, switchTheme } = useTheme()

  return (
    <CustomTheme.Provider value={{ switchTheme, verifyTheme }}>
      <ThemeProvider theme={verifyTheme}>
        {children}
      </ThemeProvider>
    </CustomTheme.Provider>
  )
}

export default ThemeProvider;