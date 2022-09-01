import { useContext } from 'react';
import { CustomTheme } from '../contexts/CustomTheme'
import { normal, contrast } from '../style/themes/highContrast/theme'

export const useThemeContext = () => {

  const { tema, setTema } = useContext(CustomTheme);
  
  const switchTheme = () => {
    if (tema.title === 'contrast') {
      setTema(normal)
      localStorage.setItem('hightContrast', JSON.stringify(normal))
    } else {
      setTema(contrast)
      localStorage.setItem('hightContrast', JSON.stringify(contrast))
    }
  }
  
  return {
    switchTheme
  }
}