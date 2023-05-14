import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const Login = () => {

  const { login, isLogged, error } = useContext(UserContext)

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

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-login'>
        {
          error && <p className='error'>{error}</p>
        }
        <label>User Name</label>
        <input type="text" placeholder='User name' name='userName' value={form.userName} onChange={handleInputChange} />
        <label>Password</label>
        <input type="password" placeholder='Password' name='password' value={form.password} onChange={handleInputChange} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
