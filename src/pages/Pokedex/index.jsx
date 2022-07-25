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
  const [favorites, setFavorites] = useState([])

  const { setPokemon, setIsSearched, pokemonSaved, setPokemonSaved } = useContext(Context)
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
  const favoritesKey = "favorites"
  const loadFavoritePokemons = () => {
    const pokemon = JSON.parse(localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemon)
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, [loading])

  useEffect(() => {
    if (!pokemonSaved)
      fetchData()
  }, [])


  const handlePokemon = (pokemon) => {
    setPokemon(pokemon)
    setIsSearched(true)
    navigate("/pokedex/searchpokemon")
  }

  const handleFavorite = (param) => {
    let updatedFavorites = [...favorites]
    const favorite = favorites.map(item => item.name)
    const favoriteInclude = favorite.includes(param.name)

    if (favorites.length >= 6 && !favoriteInclude) {
      alert('Você excedeu o limite de Pokemons')
    } else {
      favoriteInclude
        ? updatedFavorites = updatedFavorites.filter(item => item.name !== param.name)
        : updatedFavorites.push(param)
    }
    localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const verifyFavorite = (param) => {
    const favorite = favorites.map(item => item.name)
    return favorite.includes(param.name) ? '❤️' : '🤍'
  }

  const displayPokemons = param => {
    return param.slice(pagesVisited, pagesVisited + itensPerPage)
      .map((pokemon) => {
        return (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            handlePokemon={() => handlePokemon(pokemon)}
            handleFavorite={() => handleFavorite(pokemon)}
            heart={verifyFavorite(pokemon)}
          />
        )
      })
  }

  const verifyPokemon =
    pokemonSaved
      ? <div className='pokemons'>{displayPokemons(pokemonSaved)}</div>
      : <div className='pokemons'>{displayPokemons(pokemons)}</div>

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
            {verifyPokemon}
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