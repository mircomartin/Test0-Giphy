import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Loading } from './Loading'

export const LoginForm = () => {

  const { login, isLogged, error, loading } = useContext(UserContext)

  const navigate = useNavigate()
  const [form, setForm] = useState({
    userName: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')

    const { userName, password } = form
    login({ userName, password })

  }

  useEffect(() => {
    if (isLogged) {
      navigate('/', { replace: true })
    }
  }, [isLogged])

  if (loading) return <Loading />

  return (
    <form onSubmit={handleSubmit} className='form-login'>
      {
        !loading && error && <p className='error'>{error}</p>
      }
      <label>User Name
        <input type="text" placeholder='User name' name='userName' value={form.userName} onChange={handleInputChange} />
      </label>
      <label>Password
        <input type="password" placeholder='Password' name='password' value={form.password} onChange={handleInputChange} />
      </label>
      <button type='submit' className='btn'>Login</button>
    </form>
  )
}
