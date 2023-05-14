import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const Header = () => {

  const { isLogged } = useContext(UserContext)

  return (
    <header className='gf-header'>
      {
        isLogged
          ? <Link to='/'>Logout</Link>
          : <Link to="/login">Login</Link>
      }
    </header>
  )
}
