export const verifyFavorite = (param, favorites) => {
  const favorite = favorites.map(item => item.name)
  return favorite.includes(param.name) ? '❤️' : '🤍'
}