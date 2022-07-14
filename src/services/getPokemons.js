import api from "./api"

export const getPokemons = async (limit, offset) => {
  try {
    const { data } = await
      api.get(`pokemon?limit=${limit}&offset=${offset}`)
      return data
  } catch {
    throw Error(error)
  }
}