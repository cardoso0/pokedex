import * as S from './style'
import { Error } from '../../components/Form/style'
import { useContext } from 'react'
import { Footer, Form, Header, Pokemon } from '../../components'
import { Context } from '../../contexts/Context'
import whosThatPokemon from '../../assets/whosThatPokemon.png'
import { handleFavorite, verifyFavorite } from '../../shared'

export const SearchPokemon = () => {

  const { pokemon, isSearched, favorites, setFavorites } = useContext(Context)

  return (
    <div>
      <Header />
      <S.Height>
        <Form placeholder={'Digite um Pokemon'} />
        {isSearched &&
          <div>
            {pokemon
              ? <Pokemon
                pokemon={pokemon}
                large={'20%'}
                medium={'25%'}
                handleFavorite={() => handleFavorite(pokemon, favorites ,setFavorites)}
                heart={verifyFavorite(pokemon, favorites)}
              />
              : <Error><img src={whosThatPokemon} alt='Quem é esse Pokemon?' /></Error>
            }
          </div>
        }
      </S.Height>
      <Footer />
    </div>
  )
}