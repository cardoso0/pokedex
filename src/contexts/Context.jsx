import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {
  const [pokemon, setPokemon] = useState()
  const [isSearched, setIsSearched] = useState(false)
  const [pokemonSaved, setPokemonSaved] = useState(null)
  const [favorites, setFavorites] = useState([])

  return (
    <Context.Provider value={{ pokemon, setPokemon, isSearched, setIsSearched, pokemonSaved, setPokemonSaved, favorites, setFavorites }}>
      {props.children}
    </Context.Provider>
  )
}