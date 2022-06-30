const searchPokemon = pokemon =>
  `https://pokeapi.co/api/v2/pokemon/${pokemon}/`

const fetchData = async url => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Não foi possivel obter os dados')
    }

    return response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

export const searchPokemonData = pokemon => fetchData(searchPokemon(pokemon))

export const getPokemons = async (limit = 5, offset = 0) => {
  try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      const response = await fetch(url)
      return await response.json()
  } catch (error) {
      console.log("error: ", error)
  }
}

export const getPokemonData = async (url) => {
  try {
      const response = await fetch(url)
      return await response.json()
  } catch (error) {
      console.log("error: ", error)
  }
}