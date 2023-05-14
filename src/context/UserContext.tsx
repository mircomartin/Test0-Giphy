import { createContext } from 'react'

interface ContextProps {
  token: string
  isLogged: boolean
  error: string | null
  
  // Methods
  setToken: React.Dispatch<React.SetStateAction<string>>
  login: ({ userName, password }: {
    userName: string;
    password: string;
  }) => void
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
  logout: () => void
}

export const UserContext = createContext({} as ContextProps)
