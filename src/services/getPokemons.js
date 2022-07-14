import axios from "axios";
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

export const getAllPokemons = async () => {
  try {
    const { results } = await getPokemons(250, 0)
    const promises = results.map(async pokemon => {
      return axios.get(pokemon.url)
    })
    const response = await Promise.all(promises)
    const result = response.map(item => item.data)
    return result
  } catch (error) {
    throw Error(error)
  }
}
console.log(getAllPokemons())