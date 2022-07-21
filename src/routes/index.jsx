import { Routes, Route } from 'react-router-dom'
import { Home, SearchPokemon } from '../pages'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/pokedex/' element={<Home />} />
      <Route path='/pokedex/searchpokemon' element={<SearchPokemon />} />
    </Routes>
  )
}