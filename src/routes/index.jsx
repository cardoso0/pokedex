import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from '../contexts/Context'
import { Favorites, Pokedex, SearchPokemon } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/pokedex/' element={<Pokedex />} />
        <Route path='/pokedex/searchpokemon' element={<SearchPokemon />} />
        <Route path='/pokedex/favorites' element={<Favorites />} />
      </Routes>
    </ContextProvider>
  )
}