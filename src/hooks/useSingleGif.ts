import { useContext, useEffect, useState } from 'react'
import { GifsContext } from '../context/GifsContext'
import { getSingleGif } from '../services/getSingleGif'

export const useSingleGif = ({ id }: { id: string | null }) => {

  const { activeGif: gif, setActiveGif } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!gif && id) {
      setLoading(true)
      getSingleGif({ id })
        .then(gif => setActiveGif(gif))
        .catch(err => {
          setError(err)
          console.error(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [gif, id])
  
  return {
    gif,
    loading,
    error
  }
}
