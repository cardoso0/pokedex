import * as S from './style'
import { useContext, useEffect } from 'react'
import { Footer, Header, Pokemon, Trainer } from '../../components'
import { Context } from '../../contexts/Context'
import { verifyFavorite, loadFavoritePokemons, navigateToDetailsPokemon } from '../../shared'
import { useNavigate } from 'react-router-dom'
import { ContextTrainer } from '../../contexts/ContextTrainer'

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
    loadFavoritePokemons(setFavorites, "favorites")
    loadFavoritePokemons(setTrainer, "trainer")
  }, [])

  return (
    <div>
      <Header />
      <S.Height>
        <Trainer
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
                pokemon={pokemon}
                key={pokemon.id}
                handlePokemon={() => navigateToDetailsPokemon(pokemon, setPokemon, setIsSearched, navigate)}
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