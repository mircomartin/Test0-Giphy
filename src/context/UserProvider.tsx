import { useCallback, useState } from 'react'
import { UserContext } from './UserContext'
import { loginWithUserAndPassword } from '../services/login'

export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

  const [token, setToken] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(({ userName, password }: { userName: string, password: string }) => {

    const res = loginWithUserAndPassword({ userName, password })
    if (!res) {
      setError('Invalid user or password')
    } else {
      setToken('123456')
      localStorage.setItem('token', token)
      setIsLogged(true)
    }
  
  }, [setToken])

  const logout = useCallback(() => {
    setToken('')
    setIsLogged(false)
  }, [setToken])

  return (
    <UserContext.Provider value={{
      token,
      isLogged,

      // Methods
      setToken,
      login,
      setIsLogged,
      logout,
      error
    }}>
      { children }
    </UserContext.Provider>
  )
}
