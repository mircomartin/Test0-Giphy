import { type IGif } from '../interfaces/types'

const API_URL = 'https://api.giphy.com/v1/gifs/'

export const getSingleGif = async ({ id }: { id: string }) => {
  
  try {
    const response = await fetch(`${API_URL}${id}?api_key=of51dI75FWxkmchK1oGr5T4YDOwLo9ib&q=`)
    // Manejo el error
    if (!response.ok) throw new Error('Error al obtener los gifs')

    // Obtengo los datos
    const { data } = await response.json()
    const gif: IGif = {
      id: data.id,
      title: data.title,
      image: data.images.downsized_medium.url
    }
    return gif
  } catch (err) {
    console.log(err)  
    throw new Error('Error al obtener los gifs')
  }
}
