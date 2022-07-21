import { Footer, Form, Header } from '../../components'
import { ContextProvider } from '../../contexts/Context'

export const SearchPokemon = () => {

  return (
    <ContextProvider>
      <Header />
      <Form />
      <Footer />
    </ContextProvider>
  )
}