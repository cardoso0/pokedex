import * as S from './style'
import { useState } from 'react'
import { getPokemonData } from '../../services/searchPokemon'
import { Pokemon } from '../Pokemon'

export const Form = () => {

  const [inputValue, setInputValue] = useState("")
  const [pokemon, setPokemon] = useState()
  const [erro, setErro] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await getPokemonData(inputValue)
      return setPokemon(result)
    } catch {
      setPokemon("")
      setErro("Pokemon não encontrado")
    }
  }
  // console.log(pokemon)
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
        ? <Pokemon pokemon={pokemon} large={'20%'} medium={'25%'}/>
        : erro
      }
    </S.Bg>
  )
}
