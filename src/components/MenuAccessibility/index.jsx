import { useThemeContext } from "../../contexts/CustomTheme"

export const MenuAccessibility = () => {

  const { switchTheme } = useThemeContext()

  return (
    <div>
      <button onClick={switchTheme}>Altere o Tema</button>
    </div>
  )
}