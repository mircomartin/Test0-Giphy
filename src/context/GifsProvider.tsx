import { useState } from 'react'
import { GifsContext } from './GifsContext'
import { type IGif } from '../interfaces/types'

export interface GifsState {
  activeGif: IGif | null
  gifs: IGif[] | []
  lang: string
}

export const GifsProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

  const [gifs, setGifs] = useState<GifsState['gifs']>([])
  const [activeGif, setActiveGif] = useState<GifsState['activeGif']>(null)
  const [lang, setLang] = useState<GifsState['lang']>('en')

  const changeLang = (lang: string) => {
    setLang(lang)
  }

  return (
    <GifsContext.Provider value={{
      gifs,
      activeGif,
      lang,
      
      // Methods
      setActiveGif,
      setGifs,
      changeLang
    }}>
      { children }
    </GifsContext.Provider>
  )
}
