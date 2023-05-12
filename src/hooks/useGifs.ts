import { useContext, useEffect, useState } from 'react'
import { GifsContext } from '../context/GifsContext'
import { getGifs } from '../services/gifs'
import { type IGif } from '../interfaces/types'

interface Props {
  keyword: string
  rating: string
}

export const useGifs = ({ keyword = '', rating = 'g' }: Props) => {

  const { setGifs, gifs, lang } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const keywordToUse = keyword !== '' ? keyword : localStorage.getItem('lastKeyword') ?? 'random'

  useEffect(() => {
    setLoading(true)
  
    getGifs({ keyword: keywordToUse, rating, lang })
      .then((newGifs) => {
        if (newGifs) {
          setGifs(newGifs)
          if (keyword) localStorage.setItem('lastKeyword', keyword)
        }
      })
      .catch((error: Error) => console.error(error))
      .finally(() => setLoading(false))
  }, [keyword, rating, lang])

  useEffect(() => {
    setLoading(true)
    if (page > 0) {
      getGifs({ keyword: keywordToUse, limit: 10, page, rating, lang })
        .then((newGifs) => {
          if (newGifs) {
            setGifs((prevGifs: IGif[]) => (prevGifs.concat(newGifs)))
          }
        })
        .catch((error: Error) => console.error(error))
        .finally(() => setLoading(false))
    }
  }, [page, keyword, rating, lang])

  return {
    gifs,
    loading,
    setPage
  }
}
