import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/useTheme'
import { MainRoutes } from './routes'
import { GlobalStyle } from './style/global'

const App = () => {

  const { verifyTheme } = useTheme()

  return (
    <div>
      <ThemeProvider theme={verifyTheme}>
        <GlobalStyle />
        <MainRoutes />
      </ThemeProvider>
    </div>
  )
}

export default App
