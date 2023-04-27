import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGifs } from '../hooks/useGifs'
import { ListGifs } from '../components/ListGifs'
import { LazyTrending } from '../components/LazyTrending'
import { Loading } from '../components/Loading'

export const Home = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const { gifs, loading } = useGifs({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(
      `/search/${keyword}`,
      {
        replace: true
      }
    )
  }

  if (loading) return <Loading />
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
      </form>
      <div className="app-main">
        <div className="app-results">
          <h3 className="app-title">Última búsqueda:</h3>
          <ListGifs gifs={gifs}/>
        </div>
        <LazyTrending />
      </div>
    </>
  )
}
