export const handleFavorite = (pokemon, favorites, setState) => {
  let updatedFavorites = [...favorites]
  const favorite = favorites.map(item => item.name)
  const favoriteInclude = favorite.includes(pokemon.name)

  if (favorites.length >= 6 && !favoriteInclude) {
    alert('Você excedeu o limite de Pokemons')
  } else {
    favoriteInclude
      ? updatedFavorites = updatedFavorites.filter(item => item.name !== pokemon.name)
      : updatedFavorites.push(pokemon)
  }
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  setState(updatedFavorites)
}