import { useEffect, useState } from "react"
import { Pokemon } from "../components"
import { fetchPokemons } from "../services/api"

export const usePagination = () => {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    fetchPokemons(setLoading, setPokemons)
  }, [])

  const pokemonsPerPage = 24
  const pagesVisited = pageNumber * pokemonsPerPage
  const pageCount = Math.ceil(pokemons.length / pokemonsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayPokemons = pokemons
    .slice(pagesVisited, pagesVisited + pokemonsPerPage)
    .map((pokemon) => {
      return (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      )
    })

  return {
    loading: loading,
    pageCount: pageCount,
    changePage: changePage,
    // changePage: ({ selected }) => {setPageNumber(selected)},
    displayPokemons: displayPokemons
  }
}