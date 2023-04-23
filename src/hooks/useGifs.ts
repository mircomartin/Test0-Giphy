import { useEffect, useState } from 'react'
import { type IGif } from '../interfaces/types'
import { getGifs } from '../services/gifs'

export const useGifs = () => {

  const [gifs, setGifs] = useState<IGif[] | []>([])
  const [keyword, setKeyword] = useState('jhon john florence')

  useEffect(() => {

    getGifs({ keyword })
      .then((newGifs) => {
        if (newGifs !== undefined) setGifs(prevGifs => newGifs)
      })
      .catch((error: Error) => console.error(error))
      
  }, [keyword])

  return {
    gifs,
    setKeyword
  }
}
