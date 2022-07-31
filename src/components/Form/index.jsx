import * as S from './style'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchPokemon } from '../../services/searchPokemon'
import { Context } from '../../contexts/Context'

export const Form = props => {

  const { placeholder } = props

  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("")
  const { setPokemon, setIsSearched } = useContext(Context)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const result = await searchPokemon(inputValue)
      setPokemon(result)
    } catch {
      setPokemon("")
    }
    navigate("/pokedex/detailspokemon")
    setIsSearched(true)
  }
   
  return (
    <S.Bg id='busca'>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text"
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
        />
        <button>Enviar</button>
      </form>
    </S.Bg>
  )
}
