import * as S from './style'
import { Error } from '../../components/Form/style'
import { useContext } from 'react'
import { Footer, Form, Header, Pokemon } from '../../components'
import { Context } from '../../contexts/Context'
import whosThatPokemon from '../../assets/whosThatPokemon.png'

export const SearchPokemon = () => {

  const { pokemon, isSearched } = useContext(Context)

  return (
    <div>
      <Header />
      <S.Height>
        <Form />
        {isSearched &&
          <div>
            {pokemon
              ? <Pokemon pokemon={pokemon} large={'20%'} medium={'25%'} />
              : <Error><img src={whosThatPokemon} alt='Quem é esse Pokemon?' /></Error>
            }
          </div>
        }
      </S.Height>
      <Footer />
    </div>
  )
}