import * as S from './style'
import { useState } from 'react'
import { onSearchHandle } from '../../services/searchPokemon'

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
          placeholder='Procure um Pokemon'
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Enviar</button>
      </form>
      {pokemon ? (
        <div>
          <div>Nome: {pokemon.name}</div>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
      ) : null}
    </S.Bg>
  )
}
