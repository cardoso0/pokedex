import { MainRoutes } from './routes'
import { GlobalStyle } from './style/global'
import { CustomThemeProvider } from './contexts/CustomTheme'

const App = () => {

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <MainRoutes />
    </CustomThemeProvider>
  )
}

export default App
