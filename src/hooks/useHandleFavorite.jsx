import { useContext } from "react"
import { Context } from "../contexts/Context"

export const useHandleFavorite = () => {

  const { pokemon, favorites } = useContext(Context)

  let updatedFavorites = [...favorites]
  const favorite = favorites.map(item => item.name)
  const favoriteInclude = favorite.includes(pokemon.name)

  return {
    updatedFavorites,
    favoriteInclude
  }
}