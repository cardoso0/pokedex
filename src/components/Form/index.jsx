import * as S from './style'
import { useState } from 'react'
import { searchPokemon } from '../../services/searchPokemon'
import { Pokemon } from '../Pokemon'
import qualPokemon from '../../assets/qualPokemon.jpg'

export const Form = () => {

  const [inputValue, setInputValue] = useState("")
  const [pokemon, setPokemon] = useState()
  const [isError, setIsError] = useState(false)
  const [isSearched, setIsSearched] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await searchPokemon(inputValue)
      setPokemon(result)
      setIsError(false)
      setIsSearched(true)
    } catch {
      setIsSearched(false)
      setPokemon("")
      setIsError(true)
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
        && <Pokemon pokemon={pokemon} large={'20%'} medium={'25%'} />
      }
      {isError === true
        && <S.Error><img src={qualPokemon} alt='Quem é esse Pokemon?' /></S.Error>
      }
    </S.Bg>
  )
}
