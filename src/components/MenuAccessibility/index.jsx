import { useThemeContext } from "../../hooks/useThemeContext"
import { useTextSize } from "../../hooks/useTextSize"

export const MenuAccessibility = () => {

  const { switchTheme } = useThemeContext()
  const { textSizeIncrease, textSizeDecrease, textSizeDefault } = useTextSize()

  return (
    <div>
      <button onClick={switchTheme}>Altere o Tema</button>
      <div>
        <button onClick={textSizeDecrease}>A-</button>
        <button onClick={textSizeDefault}>A</button>
        <button onClick={textSizeIncrease}>A+</button>
      </div>
    </div>
  )
}