import contrast from '../../style/themes/contrast'
import normal from '../../style/themes/normal'
import { GlobalStyle } from "../../style/global"
import { ThemeProvider } from "styled-components"
import { useState } from "react"

export const MenuAccessibility = () => {


  const [tema, setTema] = useState(normal)

  const theme = JSON.parse(localStorage.getItem('hightContrast'))
  const switchTheme = () => {
    if (theme.title === "contrast") {
      localStorage.setItem('hightContrast', JSON.stringify(normal))
      setTema(theme)
    } else {
      localStorage.setItem('hightContrast', JSON.stringify(contrast))
      setTema(theme)
    }
  }

  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <div>
        <button onClick={() => switchTheme()}>Tema atual: {tema.title}</button>
      </div>
    </ThemeProvider>
  )
}