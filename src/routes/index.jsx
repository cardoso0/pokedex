import { Routes, Route } from 'react-router-dom'
import { ContextAccessibilityProvider } from '../contexts/ContextAccessibility'
import { ContextProvider, ContextTrainerProvider } from '../contexts/index'
import { Favorites, Pokedex, DetailsPokemon, Trainers } from '../pages'

export const MainRoutes = () => {
  return (
    <ContextProvider>
      <ContextTrainerProvider>
        <ContextAccessibilityProvider>
          <Routes>
            <Route path='/' element={<Trainers />} />
            <Route path='/pokedexx' element={<Pokedex />} />
            <Route path='/detailspokemon' element={<DetailsPokemon />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </ContextAccessibilityProvider>
      </ContextTrainerProvider>
    </ContextProvider>
  )
}