import api from "./api"

export const getPokemonData = async (pokemon) => {
  try {
    const { data } = await
      api.get(`pokemon/${pokemon}/`)
    return data

  } catch (error) {
    throw Error(console.log(error))
  }
}