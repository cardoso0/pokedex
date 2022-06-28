import * as S from './style'
import { useState } from 'react'
import { getPokemonData } from '../../api'

export const Form = () => {

  const [inputValue, setInputValue] = useState("")
  const [pokemonn, setPokemonn] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    onSearchHandle(inputValue)
  }

  const onSearchHandle = async pokemon => {
    const result = await getPokemonData(pokemon)
    setPokemonn(result)
    console.log("pokemon: ", pokemonn)
  }

  return (
    <S.Bg>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text"
          autoFocus="on"
          placeholder='Procure um Pokemon'
          id="teste"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Enviar</button>
      </form>
      {pokemonn ? (
        <div>
          <div>Nome: {pokemonn.name}</div>
          <div>Order: {pokemonn.moves[0].move.url}</div>
          <img src={pokemonn.sprites.front_default} alt="" />
        </div>
      ) : null}
    </S.Bg>
  )
}