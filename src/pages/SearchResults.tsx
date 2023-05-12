import { useCallback, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import debounce from 'just-debounce-it'
import { useGifs } from '../hooks/useGifs'
import { useSEO } from '../hooks/useSEO'
import { useNearScreen } from '../hooks/useNearScreen'
import { ListGifs } from '../components/ListGifs'
import { SearchForm } from '../components/SearchForm'

export const SearchResults = () => {
  const { keyword = '', rating = 'g' } = useParams()
  
  const { gifs, loading, setPage } = useGifs({ keyword, rating })

  const externalRef = useRef(null)
  const { isNearScreen } = useNearScreen({ 
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''
  useSEO({ title, description: `Resultados de ${keyword}` })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 300
  ), [])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])
  
  return (
    <>
      <Helmet>
        <title>{title} || Giffy</title>
        <meta name="description" content={title} />
      </Helmet>
      <header className='o-header'>
        <SearchForm initialKeyword={keyword} initialRating={rating}/>
      </header>
      <div style={{ width: '100%' }}>
        {
          keyword && <h3 className="app-title">{decodeURI(keyword)}</h3>
        }
        <ListGifs gifs={gifs}/>
        <div id="visor" ref={externalRef}></div>
      </div>
    </>
  )
}
