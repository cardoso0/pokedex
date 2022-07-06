import * as S from './style'
import { useState } from 'react'
import { onSearchHandle } from '../../services/searchPokemon'
import { Pokemon } from '../Pokemon'
import { Pokemons } from '../Pokemons'

export const Form = () => {

  const [inputValue, setInputValue] = useState("")
  const [pokemon, setPokemon] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    onSearchHandle(inputValue, setPokemon)
  }

  return (
    <S.Bg id='busca'>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text"
          autoFocus="on"
          placeholder='Digite um Pokemon'
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Enviar</button>
      </form>
      {pokemon
        ? <Pokemon pokemon={pokemon} />
        : <Pokemons />
      }
    </S.Bg>
  )
}
