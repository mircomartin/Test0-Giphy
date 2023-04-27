import { useCallback, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import debounce from 'just-debounce-it'
import { useGifs } from '../hooks/useGifs'
import { useNearScreen } from '../hooks/useNearScreen'
import { ListGifs } from '../components/ListGifs'

export const SearchResults = () => {
  const { keyword = null } = useParams()

  const { gifs, loading, setPage } = useGifs({ keyword })

  const externalRef = useRef(null)
  const { isNearScreen } = useNearScreen({ 
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 300
  ), [])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])
  
  return (
    <div style={{ width: '100%' }}>
      {
        keyword && <h3 className="app-title">{decodeURI(keyword)}</h3>
      }
      <ListGifs gifs={gifs}/>
      <div id="visor" ref={externalRef}></div>
    </div>
  )
}
