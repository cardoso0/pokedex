import { MainRoutes } from './routes'
import { GlobalStyle } from './style/global'
import { CustomThemeProvider } from './contexts/CustomTheme'
import { ContextTextSizeProvider } from './contexts/ContextTextSize'

const App = () => {

  return (
    <ContextTextSizeProvider>
      <CustomThemeProvider>
        <GlobalStyle />
        <MainRoutes />
      </CustomThemeProvider>
    </ContextTextSizeProvider>
  )
}

export default App
