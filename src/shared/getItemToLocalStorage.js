export const getItemToLocalStorage = (setState, keyStorage) => {
  const item = JSON.parse(localStorage.getItem(keyStorage)) || []
  setState(item)
}