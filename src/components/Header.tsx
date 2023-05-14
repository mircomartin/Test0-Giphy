import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'

export const Header = () => {

  const { isLogged, logout } = useContext(UserContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <header className='gf-header'>
      {
        isLogged
          ? <button onClick={handleLogout}>Logout</button>
          : <Link to="/login">Login</Link>
      }
    </header>
  )
}
