import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchForm = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(
      `/search/${keyword}`,
      {
        replace: true
      }
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
    </form>
  )
}
