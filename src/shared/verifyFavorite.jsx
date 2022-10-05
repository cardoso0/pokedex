import heart from "../assets/favorites/heart-red.png"
import white from "../assets/favorites/heart-white.png"

export const verifyFavorite = (param, favorites) => {
  const favorite = favorites.map(item => item.name)
  const verify = favorite.includes(param.name) 
  ? <img src={heart} /> 
  : <img src={white} />

  return verify
}
//return favorite.includes(param.name) ? '❤️' : '🤍'