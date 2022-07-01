import * as S from './style'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

export const Pokemons = (props) => {

  const { pokemons, loading } = props

  const [pageNumber, setPageNumber] = useState(0)

  const pokemonsPerPage = 20
  const pagesVisited = pageNumber * pokemonsPerPage

  const displayPokemons = pokemons
    .slice(pagesVisited, pagesVisited + pokemonsPerPage)
    .map((pokemon) => {
      return (
        <div key={pokemon.id}>
          Nome: {pokemon.name}
          <div>Habilidade: {pokemon.abilities[0].ability.name}</div>
          <div>ID: {pokemon.id}</div>
          <div>Experiencia Base: {pokemon.base_experience}</div>
          <div>Altura: {pokemon.height}</div>
          <div>Peso: {pokemon.weight}</div>
          <div>Tipo: {pokemon.types[0].type.name}</div>
          <img src={pokemon.sprites.front_default} alt="imagem do pokemon" />
        </div>
      )
    })

  const pageCount = Math.ceil(pokemons.length / pokemonsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

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
            // marginPagesDisplayed={1}
            // pageRangeDisplayed={0}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </S.Container>
      )}
    </S.Bg>
  )
}