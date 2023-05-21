import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {

  const { isLogged, logout } = useContext(UserContext)
  const { pathname } = useLocation()

  const handleLogout = () => {
    logout()
  }
  
  return (
    <header className='gf-header'>
      {
        pathname !== '/login' 
          ? isLogged
            ? <button onClick={handleLogout}>Logout</button>
            : <Link to="/login">Login</Link>
          : null
      }
    </header>
  )
}
