import * as S from './style'
import { useState } from 'react'
import { searchPokemon } from '../../services/searchPokemon'
import { Pokemon } from '../Pokemon'
import qualPokemon from '../../assets/qualPokemon.png'

export const Form = () => {

  const [inputValue, setInputValue] = useState("")
  const [pokemon, setPokemon] = useState()
  const [isSearched, setIsSearched] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await searchPokemon(inputValue)
      setPokemon(result)
      setIsSearched(true)
    } catch {
      setPokemon("")
      setIsSearched(true)
    }
  }
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
      {isSearched &&
        <div>
          {pokemon
            ? <Pokemon pokemon={pokemon} large={'20%'} medium={'25%'} />
            : <S.Error><img src={qualPokemon} alt='Quem é esse Pokemon?' /></S.Error>
          }
        </div>
      }
    </S.Bg>
  )
}
