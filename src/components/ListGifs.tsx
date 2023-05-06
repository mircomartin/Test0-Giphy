import Gif from './Gif'
import { type IGif } from '../interfaces/types'

export const ListGifs = ({ gifs }: { gifs: IGif[] }) => {

  return (
    <div className="listOfGifs">
      {
        gifs.map((gif) => (
          <Gif key={gif.id} gif={gif}/>
        ))
      }
    </div>  
  )
}
