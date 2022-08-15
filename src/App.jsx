import { MainRoutes } from './routes'
import { GlobalStyle } from './style/global'
import { CustomThemeProvider } from './contexts/CustomTheme'
import { useTheme } from './hooks/useTheme'
import { Header } from './components'
const App = () => {

  const { switchTheme } = useTheme()

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Header switch={switchTheme}/>
      <MainRoutes />
    </CustomThemeProvider>
  )
}

export default App
