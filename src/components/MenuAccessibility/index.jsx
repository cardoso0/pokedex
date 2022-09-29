import { useThemeContext } from "../../hooks/useThemeContext"
import { useTextSize } from "../../hooks/useTextSize"

export const MenuAccessibility = () => {

  const { switchTheme } = useThemeContext()
  const { textSizeIncrease, textSizeDecrease, textSizeDefault } = useTextSize()

  return (
    <div>
      <button tabIndex={4} onClick={switchTheme}>Altere o Tema</button>
      <div>
        <button tabIndex={5} onClick={textSizeDecrease}>A-</button>
        <button tabIndex={6} onClick={textSizeDefault}>A</button>
        <button tabIndex={7} onClick={textSizeIncrease}>A+</button>
      </div>
    </div>
  )
}