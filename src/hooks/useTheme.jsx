import { normal, contrast } from '../style/themes/highContrast/theme'
import { useState } from "react"

export const useTheme = () => {

  const theme = JSON.parse(localStorage.getItem('hightContrast'))
  
  const [tema, setTema] = useState(normal)
  
  const verifyTheme = theme === null ? tema : theme
  
  const switchTheme = () => {
    if (tema.title === 'contrast') {
      setTema(normal)
      localStorage.setItem('hightContrast', JSON.stringify(normal))
    } else {
      setTema(contrast)
      localStorage.setItem('hightContrast', JSON.stringify(contrast))
    }
  }
  // console.log('Storage',theme)
  // console.log('State',tema)
  
  return {
    theme,
    tema,
    switchTheme,
    verifyTheme
  }
}