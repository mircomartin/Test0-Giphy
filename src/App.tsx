import { useEffect, useState } from 'react'
import { getGifs } from './services/gifs'
import { type IGif } from './interfaces/types'
import './App.css'

function App () {
  const [gifs, setGifs] = useState<IGif[] | []>([])

  useEffect(() => {

    getGifs()
      .then((newGifs) => {
        if (newGifs !== undefined) setGifs(newGifs)
      })
      .catch((error: Error) => console.error(error))
      
  }, [])
  
  return (
    <div className='app'>
      <section className='app-content'>
        {
          gifs.map((gif: IGif) => (
            <figure key={gif.id}>
              <img src={gif.image} alt={gif.title} />
            </figure>
          ))
        }
      </section>
    </div>
  )
}

export default App
