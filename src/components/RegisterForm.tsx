import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { UserContext } from '../context/UserContext'
import { Loading } from './Loading'

interface Inputs {
  userName: string
  password: string
}

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const { registerUser, error, loading, isLogged } = useContext(UserContext)
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = data => {
    registerUser({ userName: data.userName, password: data.password })
  }

  useEffect(() => {
    if (isLogged) {
      navigate('/', { replace: true })
    }
  }, [isLogged])

  if (loading) return <Loading />

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
      {
        !loading && error && <p className='error'>{error}</p>
      }
      <label>User Name
        <input type="text" placeholder='User name' {...register('userName', { required: true, minLength: 5 })} />
      </label>
      {
        errors.userName && <p className='error'>User name is required</p>
      }
      <label>Password
        <input type="password" placeholder='Password' {...register('password', { required: true, minLength: 5 })} />
      </label>
      {
        errors.password && <p className='error'>Password is required</p>
      }
      <button type='submit' className='btn'>Registrarse</button>
    </form>
  )
}
