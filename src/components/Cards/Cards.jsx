import * as S from './style'
import { Pokemons } from '../Pokemons/Pokemons'
import { getPokemonData, getPokemons } from '../../api'
import { useEffect, useState } from 'react'

export const Cards = () => {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      console.log(results)
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons()
  }, [])

  return (
    <S.Bg>
      <S.Card>
        <Pokemons pokemons={pokemons} loading={loading} />
      </S.Card>
    </S.Bg>
  )
}