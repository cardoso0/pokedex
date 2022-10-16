import * as S from './style'
import { useThemeContext } from "../../hooks/useThemeContext"
import { useTextSize } from "../../hooks/useTextSize"
import { useContext } from 'react'
import { ContextAccessibility } from '../../contexts/ContextAccessibility'

export const MenuAccessibility = () => {

  const { switchTheme } = useThemeContext()
  const { textSizeIncrease, textSizeDecrease, textSizeDefault } = useTextSize()
  const { showMenu, setShowMenu } = useContext(ContextAccessibility)

  return (
    <S.Bg showMenu={showMenu} >
      <div className='close' onClick={() => setShowMenu(false)}>X</div>
      <div>
      <S.Theme>
        <button tabIndex={4} onClick={switchTheme}>Altere o Tema</button>
      </S.Theme>
      <S.TextSize>
        <button tabIndex={5} onClick={textSizeDecrease}>A-</button>
        <button tabIndex={6} onClick={textSizeDefault}>A</button>
        <button tabIndex={7} onClick={textSizeIncrease}>A+</button>
      </S.TextSize>
      </div>
    </S.Bg>
  )
}