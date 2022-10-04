import { Routes, Route } from 'react-router-dom'
import { ContextProvider, ContextTrainerProvider} from '../contexts/index'
import { Favorites, Pokedex, DetailsPokemon, Trainers } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <ContextTrainerProvider>
        <Routes>
          <Route path='/' element={<Trainers />} />
          <Route path='/pokedex/pokedexx' element={<Pokedex />} />
          <Route path='/pokedex/detailspokemon' element={<DetailsPokemon />} />
          <Route path='/pokedex/favorites' element={<Favorites />} />
        </Routes>
      </ContextTrainerProvider>
    </ContextProvider>
  )
}