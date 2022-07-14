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