export const addFav = ({ id }: { id: string }) => {
  const resp = localStorage.getItem('favs')
  if (resp) {
    const favs = JSON.parse(resp)
    const favFiltered = favs.filter((fav: any) => fav.id !== id)
    return localStorage.setItem('favs', JSON.stringify([...favFiltered, id]))
  } else {
    return localStorage.setItem('favs', JSON.stringify([id]))
  }
}
