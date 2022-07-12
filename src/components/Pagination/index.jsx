import * as S from './style'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import { fetchPokemons } from '../../services/api'
import { Pokemon } from '../index'

export const Pagination = () => {

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
        <Pokemon pokemon={pokemon} key={pokemon.id}/>
      )
    })

  return (
    <S.Bg>
      {loading ? (
        <S.Loading></S.Loading>
      ) : (
        <S.Container>
          <div className='pokemons'>{displayPokemons}</div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={0}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            onClick={() => window.scrollTo(0, 0)}
          />
        </S.Container>
      )}
    </S.Bg>
  )
}