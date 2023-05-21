import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: Props) => {
  return (
    <div className='modal'>
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
         {children}
      </div>
    </div>
  )
}

export const ModalPortal = ({ children, onClose }: Props) => {
  const el = document.getElementById('root')
  if (!el) return null
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>
      {children}
    </Modal>,
    document.getElementById('root') as HTMLElement
  )
}
