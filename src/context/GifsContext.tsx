import { createContext } from 'react'
import { type IGif } from '../interfaces/types'

interface ContextProps {
  activeGif: IGif | null
  gifs: IGif[] | []
  lang: string

  //  Mehtods
  setActiveGif: React.Dispatch<React.SetStateAction<IGif | null>>
  setGifs: React.Dispatch<React.SetStateAction<[] | IGif[]>>
  changeLang: (lang: string) => void
}

export const GifsContext = createContext({} as ContextProps)
