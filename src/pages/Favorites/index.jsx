import * as S from './style'
import { useContext } from 'react'
import { Footer, Header, Pokemon } from '../../components'
import { Context } from '../../contexts/Context'
import { verifyFavorite } from '../../shared/verifyFavorite'

export const Favorites = () => {

  const { favorites, setFavorites } = useContext(Context)

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