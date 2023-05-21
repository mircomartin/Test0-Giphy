import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { ModalPortal } from './Modal'
import { LoginForm } from './LoginForm'

export const Fav = ({ id }: { id: string }) => {

  const { isLogged, fav, favs } = useContext(UserContext)
  const [modal, setModal] = useState(false)

  const isFaved = favs.some(favId => favId === id)

  const handleFavorite = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!isLogged) {
      setModal(true)
    } else {
      fav({ id })
    }
  }

  const handleClose = () => {
    setModal(false)
  }

  return (
    <>
      <button onClick={handleFavorite} style={{ backgroundColor: isFaved ? 'red' : 'rgb(248, 166, 180, .5)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={ isFaved ? 'white' : 'currentColor'} style={{ width: 20, height: 20 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>
      {
        modal && 
          <ModalPortal onClose={handleClose}>
            <LoginForm />
          </ModalPortal>
      }
    </>
  )
}
