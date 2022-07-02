import * as S from './style'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

export const Pokemons = (props) => {

  const { pokemons, loading } = props

  const [pageNumber, setPageNumber] = useState(0)

  const pokemonsPerPage = 24
  const pagesVisited = pageNumber * pokemonsPerPage

  const firstLetterUpperCase = (pokemon) => pokemon.name[0].toUpperCase() + pokemon.name.substring(1)

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

  const pageCount = Math.ceil(pokemons.length / pokemonsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <S.Bg id='main'>
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
            onClick={() => window.scrollTo(0,0)}
          />
        </S.Container>
      )}
    </S.Bg>
  )
}