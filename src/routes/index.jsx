import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from '../contexts/Context'
import { Favorites, Pokedex, DetailsPokemon, Trainers } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/trainers/pokedex' element={<Pokedex />} />
        <Route path='/trainers/detailspokemon' element={<DetailsPokemon />} />
        <Route path='/trainers/favorites' element={<Favorites />} />
      </Routes>
    </ContextProvider>
  )
}