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

/* Requisições direcionadas ao Cards */

const paginationPokemons = (limit, offset) => 
`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

export const getPokemons = () => fetchData(paginationPokemons(10, 0))

// export const getPokemonData = async (url) => {
//   try {
//     const response = await fetch(url)
//     return await response.json()
//   } catch (error) {
//     console.log("error: ", error)
//   }
// }

export const fetchPokemons = async (setLoading, setPokemons) => {
  try {
    setLoading(true)
    const data = await getPokemons()
    const promises = data.results.map(async (pokemon) => {
      return fetchData(pokemon.url)
    })
    const results = await Promise.all(promises)
    console.log(results)
    setPokemons(results)
    setLoading(false)
  } catch (error) {
    console.log("fetchPokemons error: ", error)
  }
}