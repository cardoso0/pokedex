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
  const [fav, setFav] = useState([])

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
    const updateFavorites = [...fav]
    const favorite = fav.map(item => item.name)
    const favInclude = favorite.includes(param.name)
    if (fav.length >= 6 && !favInclude) {
      alert('Você excedeu o limite de Pokemons')
    } else {
      favInclude
        ? alert('Já existe')
        : updateFavorites.push(param)
    }
    localStorage.setItem('favorite', JSON.stringify(updateFavorites))
    setFavorites(updateFavorites)
  }
  const verifyFavorite = (param) => {
    const favorite = fav.map(item => item.name)
    return favorite.includes(param.name) ? '❤️' : '🤍'
  }

  const fetchLocal = () => {
    let localFavStr = localStorage.getItem('favorite')
    let localFavObj = JSON.parse(localFavStr) || []
    setFav(localFavObj)
  }

  useEffect(() => {
    fetchLocal()
  }, [favorites])

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