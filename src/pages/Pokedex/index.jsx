import * as S from './style'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Footer, Form, Header, Pokemon } from '../../components'
import { usePagination } from '../../hooks/usePagination'
import { getAllPokemons } from '../../services/getPokemons'

export const Pokedex = () => {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(false)

  const { pageCount, changePage, pagesVisited, itensPerPage } = usePagination({ pokemons })

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await
        getAllPokemons()
      setPokemons(response)
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const displayPokemons = pokemons
    .slice(pagesVisited, pagesVisited + itensPerPage)
    .map((pokemon) => {
      return (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      )
    })

  return (
    <div>
      <Header />
      <S.Bg>
        {/* <Link to="/pokedex/searchpokemon"><div className="buscar">Buscar Pokemon</div></Link> */}
        <Form />
        {error && <div>Não encontramos os pokemons :/</div>}
        {loading ? (
          <S.Loading />
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
      <Footer />
    </div>
  )
}