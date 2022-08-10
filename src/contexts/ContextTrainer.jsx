import { createContext, useState } from 'react'

export const ContextTrainer = createContext()

export const ContextTrainerProvider = (props) => {
  
  const [trainer, setTrainer] = useState('')

  return (
    <ContextTrainer.Provider value={{ trainer, setTrainer }}>
      {props.children}
    </ContextTrainer.Provider>
  )
}