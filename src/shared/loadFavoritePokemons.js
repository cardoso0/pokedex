export const loadFavoritePokemons = (setState, keyStorage) => {
  const item = JSON.parse(localStorage.getItem(keyStorage)) || []
  setState(item)
}