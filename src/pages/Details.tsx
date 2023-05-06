import { useParams } from 'react-router-dom'
import { useSingleGif } from '../hooks/useSingleGif'
import { Loading } from '../components/Loading'
import Gif from '../components/Gif'

export const Details = () => {

  const { id = null } = useParams()
  const { gif, error, loading } = useSingleGif({ id })
  
  if (loading) return <Loading />
  if (!loading && error) return <h3>Ups! Algo salió mal</h3>

  return (
    gif && <Gif gif={gif} />
  )
}
