import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from '../contexts/Context'
import { Favorites, Pokedex, DetailsPokemon, Trainers } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Trainers />} />
        <Route path='/pokedexx' element={<Pokedex />} />
        <Route path='/detailspokemon' element={<DetailsPokemon />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </ContextProvider>
  )
}