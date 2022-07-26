import * as S from './style'
import { Error } from '../../components/Form/style'
import { useContext } from 'react'
import { Footer, Header, Pokemon } from '../../components'
import { Context } from '../../contexts/Context'
import whosThatPokemon from '../../assets/whosThatPokemon.png'
import { verifyFavorite } from '../../shared/verifyFavorite'

export const Favorites = () => {

  const { pokemon, isSearched, favorites } = useContext(Context)

  return (
    <div>
      <Header />
      <S.Height>
        {isSearched &&
          <div>
            {pokemon
              ? <Pokemon pokemon={pokemon} large={'20%'} medium={'25%'} heart={verifyFavorite(pokemon, favorites)} />
              : <Error><img src={whosThatPokemon} alt='Quem é esse Pokemon?' /></Error>
            }
          </div>
        }
      </S.Height>
      <Footer />
    </div>
  )
}