import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

api.interceptors.response.use(
  response => response,
  error => {
      return Promise.reject(error)
  }
)

export default api;

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

/* Requisições direcionadas ao Cards */

const paginationPokemons = (limit, offset) => 
`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

export const getPokemons = () => fetchData(paginationPokemons(250, 0))

export const fetchPokemons = async (setLoading, setPokemons) => {
  try {
    setLoading(true)
    const data = await getPokemons()
    const promises = data.results.map(async (pokemon) => {
      return fetchData(pokemon.url)
    })
    const results = await Promise.all(promises)
    setPokemons(results)
    setLoading(false)
  } catch (error) {
    console.log("fetchPokemons error: ", error)
  }
}