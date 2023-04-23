import { type IGif } from '../interfaces/types'

export const Gif = ({ gif }: { gif: IGif }) => {
  return (
    <a href={gif.id} className="gif">
      <h4>{gif.title}</h4>
      <figure>
        <img src={gif.image} alt={gif.title} />
      </figure>
    </a>
  )
}
