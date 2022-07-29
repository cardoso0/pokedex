import * as S from './style'
import { Link } from 'react-router-dom'

export const Menu = () => {

  return (
    <S.Menu>
      <Link to='/pokedex/'>Home</Link>
      <Link to='/pokedex/favorites'>Favoritos</Link>
    </S.Menu>
  )
}
