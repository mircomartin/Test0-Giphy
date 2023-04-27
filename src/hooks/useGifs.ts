import { useContext, useEffect, useState } from 'react'
import { GifsContext } from '../context/GifsContext'
import { getGifs } from '../services/gifs'
import { type IGif } from '../interfaces/types'

interface Props {
  keyword?: string | null
}

export const useGifs = ({ keyword = null }: Props) => {

  const { setGifs, gifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const keywordToUse = keyword ?? localStorage.getItem('lastKeyword') ?? 'random'
 
  useEffect(() => {
    setLoading(true)
  
    getGifs({ keyword: keywordToUse })
      .then((newGifs) => {
        if (newGifs) {
          setGifs(newGifs)
          if (keyword) localStorage.setItem('lastKeyword', keyword)
        }
      })
      .catch((error: Error) => console.error(error))
      .finally(() => setLoading(false))
  }, [keyword, keywordToUse])

  useEffect(() => {
    setLoading(true)
    if (page > 0) {
      getGifs({ keyword: keywordToUse, limit: 10, page })
        .then((newGifs) => {
          if (newGifs) {
            setGifs((prevGifs: IGif[]) => (prevGifs.concat(newGifs)))
          }
        })
        .catch((error: Error) => console.error(error))
        .finally(() => setLoading(false))
    }
  }, [page, keyword])

  return {
    gifs,
    loading,
    setPage
  }
}
