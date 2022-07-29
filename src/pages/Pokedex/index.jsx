import * as S from './style'
import ReactPaginate from 'react-paginate'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer, Form, Header, Pokemon } from '../../components'
import { usePagination } from '../../hooks/usePagination'
import { getAllPokemons } from '../../services/getPokemons'
import { Context } from '../../contexts/Context'
import { verifyFavorite, handleFavorite, loadFavoritePokemons, navigateToSearchPokemon } from '../../shared'
import { Title } from '../../components/Title'

export const Pokedex = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(false)

  const { setPokemon, setIsSearched, pokemonSaved, setPokemonSaved, favorites, setFavorites } = useContext(Context)
  const { pageCount, changePage, pagesVisited, itensPerPage } = usePagination({ pokemons })

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await
        getAllPokemons()
      setPokemons(response)
      setPokemonSaved(response)
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadFavoritePokemons(setFavorites)
  }, [])

  useEffect(() => {
    if (!pokemonSaved)
      fetchData()
  }, [])

  const displayPokemons = param => {
    return param.slice(pagesVisited, pagesVisited + itensPerPage)
      .map((pokemon) => {
        return (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            handlePokemon={() => navigateToSearchPokemon(pokemon, setPokemon, setIsSearched, navigate)}
            handleFavorite={() => handleFavorite(pokemon, favorites, setFavorites)}
            heart={verifyFavorite(pokemon, favorites)}
          />
        )
      })
  }

  const verifyPokemonItIsSaved =
    pokemonSaved
      ? <div className='pokemons'>{displayPokemons(pokemonSaved)}</div>
      : <div className='pokemons'>{displayPokemons(pokemons)}</div>

  return (
    <div>
      <Header />
      <S.Bg>
        <Title 
          title={'Está preparado para essa jornada?'}
          subtitle={'Forme sua equipe pokémon!'}
        />
        <Form placeholder={'Digite um Pokemon'} />
        {error && <div>Não encontramos os pokemons :/</div>}
        {loading ? (
          <S.Loading />
        ) : (
          <S.Container>
            {verifyPokemonItIsSaved}
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