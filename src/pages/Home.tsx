import { useGifs } from '../hooks/useGifs'
import { SearchForm } from '../components/SearchForm'
import { ListGifs } from '../components/ListGifs'
import { LazyTrending } from '../components/LazyTrending'
import { Loading } from '../components/Loading'

export const Home = () => {

  const { gifs, loading } = useGifs({})

  if (loading) return <Loading />
  
  return (
    <>
      <SearchForm />
      <div className="app-main">
        <div className="app-results">
          <h3 className="app-title">Última búsqueda:</h3>
          <ListGifs gifs={gifs}/>
        </div>
        <LazyTrending />
      </div>
    </>
  )
}
