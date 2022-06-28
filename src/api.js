const getPokemon = pokemon =>
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

export const getPokemonData = pokemon => fetchData(getPokemon(pokemon))
