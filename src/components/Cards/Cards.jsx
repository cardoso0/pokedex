import * as S from './style'
import { Pokemons } from '../Pokemons/Pokemons'
import { fetchPokemons } from '../../services/api'
import { useEffect, useState } from 'react'

export const Cards = () => {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons(setLoading, setPokemons)
  }, [])

  return (
    <S.Bg>
      <S.Card>
        <Pokemons pokemons={pokemons} loading={loading} />
      </S.Card>
    </S.Bg>
  )
}