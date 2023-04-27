import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTrendingTerms } from '../services/trendingTerms'

const TrendingSearches = () => {
  const [trends, setTrends] = useState<string[]>([])
  
  useEffect(() => {
    getTrendingTerms()
      .then(terms => {
        setTrends(terms)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <h3 className="category-title">
        Los gifs más populares
      </h3>
      <ul className="nav-category">
        {
          trends.map((trend) => (
            <li key={trend}>
              <Link to={`/search/${trend}`}>
                {trend}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default TrendingSearches
