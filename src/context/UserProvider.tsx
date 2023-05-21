import { useCallback, useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { loginWithUserAndPassword } from '../services/login'
import { addFav } from '../services/addFav'
import { registerUserToApi } from '../services/register'

export const UserProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

  const [token, setToken] = useState(window.sessionStorage.getItem('token') ?? '')
  const [isLogged, setIsLogged] = useState(false)
  const [favs, setFavs] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (token) {
      setIsLogged(true)
      window.sessionStorage.setItem('token', token)
      const resp = localStorage.getItem('favs')
      setFavs(JSON.parse(resp ?? '[]'))
    }
  }, [token])
  
  const login = useCallback(({ userName, password }: { userName: string, password: string }) => {
    setLoading(true)
    const res = loginWithUserAndPassword({ userName, password })
    console.log('login', res)
    if (!res) {
      setError('Invalid user or password')
      setToken('')
      window.sessionStorage.removeItem('token')
      setLoading(false)
    } else {
      setError(null)
      setToken('123456')
      setIsLogged(true)
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('token')
    setIsLogged(false)
    setToken('')
    setFavs([])
  }, [])

  const registerUser = useCallback(({ userName, password }: { userName: string, password: string }) => {
    setLoading(true)
    const res = registerUserToApi({ userName, password })
    if (res === null) {
      setError('User already exists')
      setToken('')
      window.sessionStorage.removeItem('token')
      setLoading(false)
    } else {
      setError(null)
      setToken('123456')
      setIsLogged(true)
      setLoading(false)
    }
  }, [])

  const fav = useCallback(({ id }: { id: string }) => {
    addFav({ id })
    const resp = localStorage.getItem('favs')
    setFavs(JSON.parse(resp ?? '[]'))
    console.log('favs', favs)
  }, [setFavs])

  return (
    <UserContext.Provider value={{
      token,
      isLogged,

      // Methods
      setToken,
      login,
      registerUser,
      setIsLogged,
      logout,
      error,
      loading,
      fav,
      favs
    }}>
      { children }
    </UserContext.Provider>
  )
}
