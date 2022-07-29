import * as S from './style'
import { Error } from '../../components/Form/style'
import { useContext } from 'react'
import { Footer, Form, Header, Pokemon } from '../../components'
import { Context } from '../../contexts/Context'
import whosThatPokemon from '../../assets/whosThatPokemon.png'
import { handleFavorite, verifyFavorite } from '../../shared'

export const DetailsPokemon = () => {

  const { pokemon, isSearched, favorites, setFavorites } = useContext(Context)
  console.log(pokemon)
  return (
    <div>
      <Header />
      <S.Height>
        <Form placeholder={'Digite um Pokemon'} />
        {isSearched &&
          <div>
            {pokemon
              ? <>
              <Pokemon
                pokemon={pokemon}
                large={'20%'}
                medium={'25%'}
                handleFavorite={() => handleFavorite(pokemon, favorites ,setFavorites)}
                heart={verifyFavorite(pokemon, favorites)}
                
              />
              <div>XP: {pokemon.base_experience}</div>
              <div>Habilidade: {pokemon.abilities[0].ability.name}</div>
              <div>Altura: {pokemon.height} m</div>
              <div>Peso: {pokemon.weight} Kg</div>
              </>
              : <Error><img src={whosThatPokemon} alt='Quem é esse Pokemon?' /></Error>
            }
          </div>
        }
      </S.Height>
      <Footer />
    </div>
  )
}