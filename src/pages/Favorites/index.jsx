import * as S from './style'
import { useContext } from 'react'
import { Footer, Header, Pokemon } from '../../components'
import { Context } from '../../contexts/Context'
import { verifyFavorite } from '../../shared/verifyFavorite'

export const Favorites = () => {

  const { favorites } = useContext(Context)
  console.log(favorites)
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
                heart={verifyFavorite(pokemon, favorites)}
              />)
          })}
        </S.Pokemons>
      </S.Height>
      <Footer />
    </div>
  )
}