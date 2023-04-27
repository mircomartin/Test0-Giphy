import { useState } from 'react'
import { GifsContext } from './GifsContext'
import { type IGif } from '../interfaces/types'

export interface GifsState {
  activeGif: IGif | null
  gifs: IGif[] | []
}

export const GifsProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

  const [gifs, setGifs] = useState<IGif[] | []>([])
  const [activeGif, setActiveGif] = useState<GifsState['activeGif']>(null)

  return (
    <GifsContext.Provider value={{
      gifs,
      activeGif,

      // Methods
      setActiveGif,
      setGifs
    }}>
      { children }
    </GifsContext.Provider>
  )
}
