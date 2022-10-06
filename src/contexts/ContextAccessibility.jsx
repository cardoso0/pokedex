import { createContext, useState } from 'react'

export const ContextAccessibility = createContext()

export const ContextAccessibilityProvider = (props) => {
  
  const [showMenu, setShowMenu] = useState(false)

  return (
    <ContextAccessibility.Provider value={{ showMenu, setShowMenu }}>
      {props.children}
    </ContextAccessibility.Provider>
  )
}