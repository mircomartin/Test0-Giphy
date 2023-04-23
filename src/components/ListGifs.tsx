import { type IGif } from '../interfaces/types'
import { Gif } from './Gif'

export const ListGifs = ({ gifs }: { gifs: IGif[] }) => {
  return (
    <>
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif}/>
      ))}
    </>
  )
}
