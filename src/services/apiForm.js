import { searchPokemonData } from "./api"

export const onSearchHandle = async (pokemon, setPokemon) => {
  const result = await searchPokemonData(pokemon)
  setPokemon(result)
  console.log("pokemon: ", pokemon)
}