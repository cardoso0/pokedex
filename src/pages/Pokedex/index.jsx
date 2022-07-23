import * as S from './style'
import ReactPaginate from 'react-paginate'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer, Form, Header, Pokemon } from '../../components'
import { usePagination } from '../../hooks/usePagination'
import { getAllPokemons } from '../../services/getPokemons'
import { Context } from '../../contexts/Context'

export const Pokedex = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(false)

  const { setPokemon, setIsSearched } = useContext(Context)
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

  const handlePokemon = (pokemon) => {
    setPokemon(pokemon)
    setIsSearched(true)
    navigate("/pokedex/searchpokemon")
  }

  const displayPokemons = param => {
    return param.slice(pagesVisited, pagesVisited + itensPerPage)
    .map((pokemon) => {
      return (
        <Pokemon
          pokemon={pokemon}
          key={pokemon.id}
          handlePokemon={() => handlePokemon(pokemon)}
        />
      )
    })
  }

  return (
    <div>
      <Header />
      <S.Bg>
        <Form placeholder={'Digite um Pokemon'} />
        {error && <div>Não encontramos os pokemons :/</div>}
        {loading ? (
          <S.Loading />
        ) : (
          <S.Container>
            <div className='pokemons'>{displayPokemons(pokemons)}</div>
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