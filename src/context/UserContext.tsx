import { createContext } from 'react'

interface ContextProps {
  token: string
  isLogged: boolean
  
  // Methods
  setToken: React.Dispatch<React.SetStateAction<string>>
  login: (userName: string, password: string) => void
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext({} as ContextProps)
