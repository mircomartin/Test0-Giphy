import { useContext } from 'react'
import { GifsContext } from '../context/GifsContext'
import { Gif } from '../components/Gif'

export const Details = () => {

  const { activeGif: gif } = useContext(GifsContext)

  return (
    gif && <Gif gif={gif} />
  )
}
