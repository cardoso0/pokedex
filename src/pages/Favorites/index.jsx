import * as S from './style'
import { useContext, useEffect } from 'react'
import { Footer, Header, Pokemon } from '../../components'
import { Context } from '../../contexts/Context'
import { verifyFavorite, loadFavoritePokemons, navigateToSearchPokemon } from '../../shared'
import { useNavigate } from 'react-router-dom'

export const Favorites = () => {

  const navigate = useNavigate()

  const { favorites, setFavorites, setPokemon, setIsSearched } = useContext(Context)

  const removeFavorite = (pokemon) => {
    let updatedFavorites = [...favorites]
    const favorite = favorites.map(item => item.name)
    const favoriteInclude = favorite.includes(pokemon.name)

    if (favoriteInclude) {
      updatedFavorites = updatedFavorites.filter(item => item.name !== pokemon.name)
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  useEffect(() => {
    loadFavoritePokemons(setFavorites)
  },[])

  return (
    <div>
      <Header />
      <S.Height>
        <S.Pokemons>
          {favorites.map((pokemon) => {
            return (
              <Pokemon
                pokemon={pokemon}
                key={pokemon.id}
                handlePokemon={() => navigateToSearchPokemon(pokemon, setPokemon, setIsSearched, navigate)}
                handleFavorite={() => removeFavorite(pokemon)}
                heart={verifyFavorite(pokemon, favorites)}
              />)
          })}
        </S.Pokemons>
      </S.Height>
      <Footer />
    </div>
  )
}