import { useContext, useState, useEffect } from 'react'
import { ContextTextSize } from '../contexts/ContextTextSize'
import { normal, size1, size2, size3, size4 } from '../style/themes/textSize/theme'

export const useTextSize = () => {

  const { textTheme, setTextTheme } = useContext(ContextTextSize);
  const [count, setCount] = useState(0)

  const testeCount = () => {
    if (count === 0) setTextTheme(normal)
    if (count === 1) setTextTheme(size1)
    if (count === 2) setTextTheme(size2)
    if (count === 3) setTextTheme(size3)
    if (count === 4) setTextTheme(size4)
  }

  const textSizeIncrease = () => {
    if (count < 4) {
      setCount(count + 1)
    }
    console.log(count)
  }
  
  const textSizeDecrease = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
    console.log(count)
  }
  
  useEffect(() => {
    testeCount()
  },[count])

  return {
    textSizeIncrease,
    textSizeDecrease,
    textTheme
  }
}