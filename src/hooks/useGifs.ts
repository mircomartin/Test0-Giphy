import { useEffect, useState } from 'react'
import { type IGif } from '../interfaces/types'
import { getGifs } from '../services/gifs'

export const useGifs = ({ keyword = 'batman' }: { keyword: string | undefined }) => {

  const [gifs, setGifs] = useState<IGif[] | []>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then((newGifs) => {
        if (newGifs !== undefined) setGifs(prevGifs => newGifs)
      })
      .catch((error: Error) => console.error(error))
      .finally(() => setLoading(false))
  }, [keyword])

  return {
    gifs,
    loading
    
  }
}
