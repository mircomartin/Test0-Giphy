import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GifsContext } from '../context/GifsContext'
import { Fav } from './Fav'
import { type IGif } from '../interfaces/types'

const Gif = ({ gif }: { gif: IGif }) => {

  const { setActiveGif } = useContext(GifsContext)
  const handleClick = () => {
    setActiveGif(gif)
  }

  return (
    <div className="gif">
      <div className='gif-buttons'>
        <Fav id={gif.id} />
      </div>
      <Link to={`/gif/${gif.id}`} className="gif-link" onClick={handleClick}>
        <h4>{gif.title}</h4>
        <figure>
          <img loading="lazy" src={gif.image} alt={gif.title} />
        </figure>
      </Link>
    </div>
  )
}

export default React.memo(Gif)
