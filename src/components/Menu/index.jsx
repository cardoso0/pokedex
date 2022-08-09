import * as S from './style'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Menu = () => {

  const { t } = useTranslation()

  return (
    <S.Menu>
      <Link to='/pokedex/'>Home</Link>
      <Link to='/pokedex/pokedexx'>Pokédex</Link>
      <Link to='/pokedex/favorites'>{t('Menu.fav')}</Link>
    </S.Menu>
  )
}
