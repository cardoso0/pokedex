import { useContext, useState, useEffect } from 'react'
import { ContextTextSize } from '../contexts/ContextTextSize'
import { normal, size1, size2, size3, size4 } from '../style/themes/textSize/theme'

export const useTextSize = () => {

  const { textSize, setTextSize } = useContext(ContextTextSize)

  const getTextSize = JSON.parse(localStorage.getItem('textSize'))
  const verifyCount = getTextSize === null ? 0 : getTextSize

  const [count, setCount] = useState(verifyCount)

  const applyTheme = () => {
    if (count === 0)  setTextSize(normal)
    if (count === 1)  setTextSize(size1)
    if (count === 2)  setTextSize(size2)
    if (count === 3)  setTextSize(size3)
    if (count === 4)  setTextSize(size4)
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

  const textSizeDefault = () => {
    setCount(0)
    setTextSize(normal)
    localStorage.setItem('textSize', JSON.stringify(0))
  }

  useEffect(() => {
    applyTheme()
  }, [count])

  return {
    textSizeIncrease,
    textSizeDecrease,
    textSizeDefault,
    textSize
  }
}