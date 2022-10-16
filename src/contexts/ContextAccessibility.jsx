import { createContext, useState } from 'react'

export const ContextAccessibility = createContext()

export const ContextAccessibilityProvider = (props) => {
  
  const [showMenu, setShowMenu] = useState(false)
  const [closeMenu, setCloseMenu] = useState(false)

  return (
    <ContextAccessibility.Provider value={{ showMenu, setShowMenu, closeMenu, setCloseMenu }}>
      {props.children}
    </ContextAccessibility.Provider>
  )
}