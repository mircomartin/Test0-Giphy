const API_URL = 'https://api.giphy.com/v1/trending/searches?api_key=of51dI75FWxkmchK1oGr5T4YDOwLo9ib&q='

export const getTrendingTerms = async () => {
  
  try {
    const response = await fetch(`${API_URL}`)
    // Manejo el error
    if (!response.ok) throw new Error('Error al obtener los trending terms')

    // Obtengo los datos
    const { data }: { data: string[] } = await response.json()
    return data
  } catch (err) {
    console.log(err)  
    throw new Error('Error al obtener los gifs')
  }
}
