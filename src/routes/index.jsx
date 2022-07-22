import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from '../contexts/Context'
import { Pokedex, SearchPokemon } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/pokedex/' element={<Pokedex />} />
        <Route path='/pokedex/searchpokemon' element={<SearchPokemon />} />
      </Routes>
    </ContextProvider>
  )
}