import { createContext } from 'react'

interface ContextProps {
  token: string
  isLogged: boolean
  error: string | null
  loading: boolean

  // Methods
  setToken: React.Dispatch<React.SetStateAction<string>>
  login: ({ userName, password }: { userName: string; password: string; }) => void
  registerUser: ({ userName, password }: { userName: string; password: string; }) => void
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
  logout: () => void
  fav: ({ id }: { id: string }) => void
  favs: string[]
}

export const UserContext = createContext({} as ContextProps)
