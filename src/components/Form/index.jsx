import * as S from './style'
import { Pokemon, Pokemons } from '../index'
import { useState } from 'react'
import { onSearchHandle } from '../../services/searchPokemon'

export const Form = () => {

  const [inputValue, setInputValue] = useState("")
  const [pokemon, setPokemon] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    onSearchHandle(inputValue, setPokemon)
  }
  console.log(inputValue)
  return (
    <S.Bg id='busca'>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text"
          autoFocus="on"
          placeholder='Digite um Pokemon'
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
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
