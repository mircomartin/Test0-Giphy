import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const Login = () => {

  const { login } = useContext(UserContext)

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
    login(form.userName, form.password)
    navigate('/', { replace: true })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-login'>
        <label>User Name</label>
        <input type="text" placeholder='User name' name='userName' value={form.userName} onChange={handleInputChange} />
        <label>Password</label>
        <input type="password" placeholder='Password' name='password' value={form.password} onChange={handleInputChange} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
