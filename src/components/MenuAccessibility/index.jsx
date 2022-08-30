import { useThemeContext } from "../../hooks/useThemeContext"
import { useTextSize } from "../../hooks/useTextSize"
import { normal } from '../../style/themes/textSize/theme'
import { useContext } from "react"
import { ContextTextSize } from "../../contexts/ContextTextSize"

export const MenuAccessibility = () => {

  const { switchTheme } = useThemeContext()
  const { setTextTheme } = useContext(ContextTextSize);
  const { textSizeIncrease, textSizeDecrease } = useTextSize()

  return (
    <div>
      <button onClick={switchTheme}>Altere o Tema</button>
      <div>
        <button onClick={textSizeDecrease}>A-</button>
        <button onClick={() => setTextTheme(normal)}>A</button>
        <button onClick={textSizeIncrease}>A+</button>
      </div>
    </div>
  )
}