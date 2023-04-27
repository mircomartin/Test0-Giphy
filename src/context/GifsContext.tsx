import { createContext } from 'react'
import { type IGif } from '../interfaces/types'

interface ContextProps {
  activeGif: IGif | null
  gifs: IGif[] | []

  //  Mehtods
  setActiveGif: React.Dispatch<React.SetStateAction<IGif | null>>
  setGifs: React.Dispatch<React.SetStateAction<[] | IGif[]>>
}

export const GifsContext = createContext({} as ContextProps)
