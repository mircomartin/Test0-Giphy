import { useCallback, useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

  const [token, setToken] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  const login = useCallback((userName: string, password: string) => {
    setToken('123456')
    console.log(token)
  }, [setToken])

  return (
    <UserContext.Provider value={{
      token,
      isLogged,

      // Methods
      setToken,
      login,
      setIsLogged
    }}>
      { children }
    </UserContext.Provider>
  )
}
