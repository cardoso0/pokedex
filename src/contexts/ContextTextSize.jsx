import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { normal } from '../style/themes/textSize/theme'

export const ContextTextSize = createContext()

export const ContextTextSizeProvider = ({ children }) => {

  const [textTheme, setTextTheme] = useState(normal)

  return (
    <ContextTextSize.Provider value={{ textTheme, setTextTheme }}>
      <ThemeProvider theme={textTheme}>
        {children}
      </ThemeProvider>
    </ContextTextSize.Provider>
  )
}