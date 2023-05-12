import { Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSingleGif } from '../hooks/useSingleGif'
import { useSEO } from '../hooks/useSEO'
import Gif from '../components/Gif'
import { Loading } from '../components/Loading'

export const Details = () => {

  const { id = null } = useParams()
  const { gif, error, loading } = useSingleGif({ id })

  const title = gif ? gif.title : ''
  useSEO({ title, description: `Detail of ${title}` })
  
  if (loading) return <Loading />
  if (!loading && error) return <Navigate to='/404' replace={true} />

  return (
    <>
    <Helmet>
      <title>{title} || Giffy</title>
    </Helmet>
    {
      gif && <Gif gif={gif} />
    }
    </>
  )
}
