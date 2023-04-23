import { useParams } from 'react-router-dom'
import { Gif } from './Gif'
import { useGifs } from '../hooks/useGifs'

export const ListGifs = () => {
  const { keyword } = useParams()
  const { gifs, loading } = useGifs({ keyword })
  
  if (loading) return <h1>Loading...</h1>
  return (
    <>
      {
        gifs.map((gif) => (
          <Gif key={gif.id} gif={gif}/>
        ))
      }
    </>
  )
}
