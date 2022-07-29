export const navigateToDetailsPokemon = (pokemon, setStatePokemon, setStateIsSearched, navigate) => {
  setStatePokemon(pokemon)
  setStateIsSearched(true)
  navigate("/pokedex/searchpokemon")
}