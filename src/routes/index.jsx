import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from '../contexts/Context'
import { Home, SearchPokemon } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/pokedex/' element={<Home />} />
        <Route path='/pokedex/searchpokemon' element={<SearchPokemon />} />
      </Routes>
    </ContextProvider>
  )
}