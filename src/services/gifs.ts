import { type IGif, type Gif } from '../interfaces/types'

const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=of51dI75FWxkmchK1oGr5T4YDOwLo9ib&q='

interface Props { 
  keyword: string
  limit?: number
  page?: number
  rating: string 
  lang: string
}

export const getGifs = async ({ keyword, limit = 10, page = 0, rating, lang = 'en' }: Props) => {
  
  try {
    const response = await fetch(`${API_URL}${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${lang}`)
    // Manejo el error
    if (!response.ok) throw new Error('Error al obtener los gifs')

    // Obtengo los datos
    const { data }: { data: Gif[] } = await response.json()
    const gifsMapped: IGif[] = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        image: gif.images.downsized_medium.url
      }
    })
    return gifsMapped
  } catch (err) {
    console.log(err)  
    throw new Error('Error al obtener los gifs')
  }
}
