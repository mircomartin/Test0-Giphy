import React, { Suspense } from 'react'
import { useNearScreen } from '../hooks/useNearScreen'
import { Loading } from './Loading'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export const LazyTrending = () => {
  const { isNearScreen, elementRef } = useNearScreen({ distance: '200px' })
  
  return (
    <div className="app-category" ref={elementRef}>
      <Suspense fallback={<Loading />}>
        {isNearScreen ? <TrendingSearches /> : <Loading />}
      </Suspense>
    </div>
  )
}
