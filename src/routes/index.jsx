import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from '../contexts/Context'
import { Favorites, Pokedex, DetailsPokemon } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/pokedex/' element={<Pokedex />} />
        <Route path='/pokedex/searchpokemon' element={<DetailsPokemon />} />
        <Route path='/pokedex/favorites' element={<Favorites />} />
      </Routes>
    </ContextProvider>
  )
}