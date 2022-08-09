import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from '../contexts/Context'
import { Favorites, Pokedex, DetailsPokemon, Trainers } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/pokedex/' element={<Trainers />} />
        <Route path='/pokedex/pokedexx' element={<Pokedex />} />
        <Route path='/pokedex/detailspokemon' element={<DetailsPokemon />} />
        <Route path='/pokedex/favorites' element={<Favorites />} />
      </Routes>
    </ContextProvider>
  )
}