import * as S from './style'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import { fetchPokemons } from '../../services/api'

export const Pokemons = () => {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  
  useEffect(() => {
    fetchPokemons(setLoading, setPokemons)
  }, [])

  const pokemonsPerPage = 24
  const pagesVisited = pageNumber * pokemonsPerPage
  const firstLetterUpperCase = (pokemon) => pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
  const pageCount = Math.ceil(pokemons.length / pokemonsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayPokemons = pokemons
    .slice(pagesVisited, pagesVisited + pokemonsPerPage)
    .map((pokemon) => {
      return (
        <div className='pokemon' key={pokemon.id}>
          <div className='pokemonName'>{firstLetterUpperCase(pokemon)}</div>
          <div className='pokemonId'>#{pokemon.id}</div>
          <div className='img'>
            <img src={pokemon.sprites.front_default} alt="imagem do pokemon" />
          </div>
          <div className='pokemonType'>Tipo: {pokemon.types[0].type.name}</div>
        </div>
      )
    })

  return (
    <S.Bg>
      {loading ? (
        <div>Carregando...Aguarde</div>
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