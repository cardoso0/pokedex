import { useState } from "react"

export const usePagination = props => {
  const { pokemons } = props

  const [pageNumber, setPageNumber] = useState(0)

  const itensPerPage = 24
  const pagesVisited = pageNumber * itensPerPage
  const pageCount = Math.ceil(pokemons.length / itensPerPage)
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