import { GlobalStyle } from "../../style/global"
import { ThemeProvider } from "styled-components"
import { useTheme } from '../../hooks/useTheme'

export const MenuAccessibility = () => {

  const { switchTheme, verifyTheme } = useTheme()

  return (
    <ThemeProvider theme={verifyTheme}>
      <GlobalStyle />
      <div>
        <button onClick={() => switchTheme()}>Tema atual: </button>
      </div>
    </ThemeProvider>
  )
}