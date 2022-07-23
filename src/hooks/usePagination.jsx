import { useContext, useState } from "react"
import { Context } from "../contexts/Context"

export const usePagination = props => {
  const { pokemons } = props

  const { pokemonSaved } = useContext(Context)
  const [pageNumber, setPageNumber] = useState(0)

  const verify = 
    pokemonSaved
      ? pokemonSaved
      : pokemons

  const itensPerPage = 24
  const pagesVisited = pageNumber * itensPerPage
  const pageCount = Math.ceil(verify.length / itensPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return {
    pageCount,
    changePage,
    pagesVisited,
    itensPerPage
  }
}