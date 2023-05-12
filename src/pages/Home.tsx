import { Helmet } from 'react-helmet'
import { useGifs } from '../hooks/useGifs'
import { SearchForm } from '../components/SearchForm'
import { ListGifs } from '../components/ListGifs'
import { LazyTrending } from '../components/LazyTrending'
import { Loading } from '../components/Loading'

export const Home = () => {

  const { gifs, loading } = useGifs({ keyword: '', rating: 'g' })

  if (loading) return <Loading />
  
  return (
    <>
      <Helmet>
        <title>Giffy || App que busca Gifs Ondemand</title>
      </Helmet>
      <header className='o-header'>
        <SearchForm initialKeyword={''} initialRating={'g'} />
      </header>
      <div className="app-main">
        <div className="app-results">
          <h3 className="app-title">Última búsqueda: 
            { 
              localStorage.getItem('lastKeyword') ? localStorage.getItem('lastKeyword') : 'No hay búsquedas'
            }
          </h3>
          <ListGifs gifs={gifs}/>
        </div>
        <LazyTrending />
      </div>
    </>
  )
}
