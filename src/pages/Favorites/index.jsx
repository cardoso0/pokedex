import * as S from './style'
import { useContext, useEffect } from 'react'
import { Footer, Header, Pokemon, Trainer } from '../../components'
import { verifyFavorite, getItemToLocalStorage, navigateToDetailsPokemon } from '../../shared'
import { useNavigate } from 'react-router-dom'
import { Context, ContextTrainer } from '../../contexts/index'

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

  const checkEnterKeyPressedToPokemon = (event, pokemon, setPokemon, setIsSearched, navigate) => {
    let key = event.key === "Enter" || event.keyCode === 13
    if (key) {
      navigateToDetailsPokemon(pokemon, setPokemon, setIsSearched, navigate)
    }
  }

  const checkEnterKeyPressed = (event, pokemon) => {
    let key = event.key === "Enter" || event.keyCode === 13
    if (key) {
      removeFavorite(pokemon)
    }
  }

  useEffect(() => {
    getItemToLocalStorage(setFavorites, "favorites")
    getItemToLocalStorage(setTrainer, "trainer")
  }, [])

  return (
    <div>
      <Header />
      <S.Height>
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
        />
        <S.Pokemons>
          {favorites.map((pokemon) => {
            return (
              <Pokemon pkBg={'pokemonBg'}
                tab={9}
                pokemon={pokemon}
                key={pokemon.id}
                handlePokemon={() => navigateToDetailsPokemon(pokemon, setPokemon, setIsSearched, navigate)}
                pokemonKeyUp={(event) => checkEnterKeyPressedToPokemon(event, pokemon, setPokemon, setIsSearched, navigate)}
                handleFavorite={() => removeFavorite(pokemon)}
                favoriteKeyUp={(event) => checkEnterKeyPressed(event, pokemon)}
                heart={verifyFavorite(pokemon, favorites)}
              />)
          })}
        </S.Pokemons>
      </S.Height>
      <Footer />
    </div>
  )
}