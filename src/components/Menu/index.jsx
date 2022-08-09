import * as S from './style'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Menu = () => {

  const { t } = useTranslation()

  return (
    <S.Menu>
      <Link to='/trainers/'>Home</Link>
      <Link to='/trainers/pokedex'>Pokédex</Link>
      <Link to='/trainers/favorites'>{t('Menu.fav')}</Link>
    </S.Menu>
  )
}
