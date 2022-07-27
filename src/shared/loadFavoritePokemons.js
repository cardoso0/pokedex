export const loadFavoritePokemons = (setState) => {
  const pokemon = JSON.parse(localStorage.getItem("favorites")) || []
  setState(pokemon)
}