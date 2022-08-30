import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { normal, size1 } from '../style/themes/textSize/theme'

export const ContextTextSize = createContext()

export const ContextTextSizeProvider = ({ children }) => {
  
  const theme = JSON.parse(localStorage.getItem('textSize'))
  const verifyTheme = theme === null ? normal : theme

  const [textTheme, setTextTheme] = useState(normal)

  return (
    <ContextTextSize.Provider value={{ textTheme, setTextTheme }}>
      <ThemeProvider theme={textTheme}>
        {children}
      </ThemeProvider>
    </ContextTextSize.Provider>
  )
}