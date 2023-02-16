import * as S from './style'
import { useContext, useEffect } from 'react'
import { Footer, Header, Pokemon, Title, Trainer } from '../../components'
import { verifyFavorite, getItemToLocalStorage, navigateToDetailsPokemon, handleEnterKey } from '../../shared'
import { useNavigate } from 'react-router-dom'
import { Context, ContextTrainer } from '../../contexts/index'
import { t } from 'i18next'

export const Favorites = () => {

  const navigate = useNavigate()

  const { favorites, setFavorites, setPokemon, setIsSearched } = useContext(Context)
  const { trainer, setTrainer } = useContext(ContextTrainer)

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
    getItemToLocalStorage(setFavorites, "favorites")
    getItemToLocalStorage(setTrainer, "trainer")
  }, [])

  return (
    <div>
      <Header />
      <Title
          title={t('Favoritos.title')}
        />
      <S.Height>
        {trainer.name !== undefined &&
          <Trainer
            tab={8}
            name={trainer.name}
            image={trainer.image}
            age={'Idade'}
            textAge={trainer.textAge}
            region={'Região'}
            textRegion={trainer.textRegion}
            city={'Cidade'}
            textCity={trainer.textCity}
            obsA={trainer.obsA}
            obsB={trainer.obsB}
          />}
        <S.Pokemons>
          {favorites && favorites.map((pokemon) => {
            return (
              <Pokemon pkBg={'pokemonBg'}
                tab={9}
                pokemon={pokemon}
                key={pokemon.id}
                handlePokemon={() => navigateToDetailsPokemon(pokemon, setPokemon, setIsSearched, navigate)}
                pokemonKeyUp={(event) => handleEnterKey(event, () =>
                  navigateToDetailsPokemon(pokemon, setPokemon, setIsSearched, navigate))}
                handleFavorite={() => removeFavorite(pokemon)}
                favoriteKeyUp={(event) => handleEnterKey(event, () =>
                  removeFavorite(pokemon))}
                heart={verifyFavorite(pokemon, favorites)}
              />)
          })}
        </S.Pokemons>
      </S.Height>
      <Footer />
    </div>
  )
}