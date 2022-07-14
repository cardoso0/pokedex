import api from "./api"

export const searchPokemon = async (pokemon) => {
  try {
    const { data } = await
      api.get(`pokemon/${pokemon}/`)
    return data

  } catch (error) {
    throw Error(error)
  }
}