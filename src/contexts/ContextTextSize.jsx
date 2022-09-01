import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { normal } from '../style/themes/textSize/theme'

export const ContextTextSize = createContext()

export const ContextTextSizeProvider = ({ children }) => {

  const [textSize, setTextSize] = useState(normal)

  return (
    <ContextTextSize.Provider value={{ textSize, setTextSize }}>
      <ThemeProvider theme={textSize}>
        {children}
      </ThemeProvider>
    </ContextTextSize.Provider>
  )
}