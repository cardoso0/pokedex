import * as S from './style'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Footer, Form, Header, Pokemon } from '../../components'
import { Context } from '../../contexts/Context'
import whosThatPokemon from '../../assets/whosThatPokemon.png'
import { handleFavorite, verifyFavorite } from '../../shared'

export const DetailsPokemon = () => {

  const { pokemon, isSearched, favorites, setFavorites } = useContext(Context)
  const { t } = useTranslation()

  let move = []
  if (pokemon) pokemon.moves
  .map(item => move.push(item.move.name))

  const firstLetterUpperCase = (n) =>
    move[n][0].toUpperCase() + move[n].substring(1)

  return (
    <div>
      <Header />
      <S.Height>
        <Form placeholder={t('placeholder')} />
        {isSearched &&
          <div>
            {pokemon
              ? <S.Card>
                <S.Details pokemonType={pokemon.types[0].type.name}>
                  <li><span>HP:</span> {pokemon.stats[0]['base_stat']}</li>
                  <li><span>Ataque:</span> {pokemon.stats[1]['base_stat']}</li>
                  <li><span>Velocidade:</span> {pokemon.stats[5]['base_stat']}</li>
                  <li><span>Atq¹:</span> {firstLetterUpperCase(0)}</li>
                  <li><span>Atq²:</span> {firstLetterUpperCase(1)}</li>
                  <li><span>Atq³:</span> {firstLetterUpperCase(2)}</li>
                  <li><span>Atq⁴:</span> {firstLetterUpperCase(3)}</li>
                </S.Details>
                <Pokemon pkBg={'pokemonBg'}
                  pokemon={pokemon}
                  large={'20%'}
                  medium={'25%'}
                  handleFavorite={() => handleFavorite(pokemon, favorites, setFavorites)}
                  heart={verifyFavorite(pokemon, favorites)}
                />
              </S.Card>
              : <S.Error><img src={whosThatPokemon} alt='Quem é esse Pokemon?' /></S.Error>
            }
          </div>
        }
      </S.Height>
      <Footer />
    </div>
  )
}