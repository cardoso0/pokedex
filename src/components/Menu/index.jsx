import * as S from './style'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Menu = () => {

  const { t } = useTranslation()

  return (
    <S.Menu>
      <Link to='/'>Home</Link>
      <Link to='/pokedex'>Pokédex</Link>
      <Link to='/favorites'>{t('Menu.fav')}</Link>
    </S.Menu>
  )
}
