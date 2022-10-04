import * as S from './style'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Menu = () => {

  const { t } = useTranslation()

  return (
    <S.Menu>
      <Link tabIndex={1} to='/'>Home</Link>
      <Link tabIndex={2} to='/pokedexx'>Pokédex</Link>
      <Link tabIndex={3} to='/favorites'>{t('Menu.fav')}</Link>
    </S.Menu>
  )
}