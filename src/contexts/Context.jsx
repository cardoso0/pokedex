import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = (props) => {
  const [pokemon, setPokemon] = useState()
  const [isSearched, setIsSearched] = useState(false)
  
  return (
    <Context.Provider value={{ pokemon, setPokemon, isSearched, setIsSearched }}>
      {props.children}
    </Context.Provider>
  )
}