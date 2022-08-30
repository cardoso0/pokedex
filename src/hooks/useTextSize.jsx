import { useContext, useState, useEffect } from 'react'
import { ContextTextSize } from '../contexts/ContextTextSize'
import { normal, size1, size2, size3, size4 } from '../style/themes/textSize/theme'

export const useTextSize = () => {

  const { textTheme, setTextTheme } = useContext(ContextTextSize)

  const textSize = JSON.parse(localStorage.getItem('textSize'))
  const verifyCount = textSize === null ? 0 : textSize

  const [count, setCount] = useState(verifyCount)

  const applyTheme = () => {
    if (count === 0)  setTextTheme(normal)
    if (count === 1)  setTextTheme(size1)
    if (count === 2)  setTextTheme(size2)
    if (count === 3)  setTextTheme(size3)
    if (count === 4)  setTextTheme(size4)
  }

  const textSizeIncrease = () => {
    if (count < 4) {
      setCount(count + 1)
      localStorage.setItem('textSize', JSON.stringify(count + 1))
    }
  }

  const textSizeDecrease = () => {
    if (count >= 1) {
      setCount(count - 1)
      localStorage.setItem('textSize', JSON.stringify(count - 1))
    }
  }

  const normalTheme = () => {
    setCount(0)
    setTextTheme(normal)
    localStorage.setItem('textSize', JSON.stringify(0))
  }

  useEffect(() => {
    applyTheme()
  }, [count])

  return {
    textSizeIncrease,
    textSizeDecrease,
    normalTheme,
    textTheme
  }
}