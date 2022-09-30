import { Routes, Route } from 'react-router-dom'
import { ContextProvider, ContextTrainerProvider} from '../contexts/index'
import { Favorites, Pokedex, DetailsPokemon, Trainers } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <ContextTrainerProvider>
        <Routes>
          <Route path='/pokedex/' element={<Trainers />} />
          <Route path='/pokedexx' element={<Pokedex />} />
          <Route path='/detailspokemon' element={<DetailsPokemon />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </ContextTrainerProvider>
    </ContextProvider>
  )
}