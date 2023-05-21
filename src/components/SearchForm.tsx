import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { GifsContext } from '../context/GifsContext'
import { useContext } from 'react'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGS = ['en', 'es']

interface Props {
  initialKeyword: string
  initialRating: string
}

export const SearchForm = ({ initialKeyword, initialRating }: Props) => {

  const navigate = useNavigate()
  const { lang, changeLang } = useContext(GifsContext)
  const { dispatch, rating, keyword, times } = useForm({ initialKeyword, initialRating })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    navigate(
      `/search/${keyword}/${rating}`,
      {
        replace: true
      }
    )
  }

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_KEYWORD', payload: e.target.value })
  }

  const handleChangeRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'UPDATE_RATING', payload: e.target.value })
  }

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLang(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      <button disabled={keyword === '' && true} className='btn'>Buscar</button>
      <input type="text" value={keyword} onChange={handleChangeKeyword}/>
      <select value={rating} onChange={handleChangeRating}>
        {
          RATINGS.map(rating => (
            <option key={rating}>{rating}</option>
          ))
        }
      </select>
      <select value={lang} onChange={handleChangeLanguage}>
        {
          LANGS.map(lang => (
            <option key={lang}>{lang}</option>
          ))
        }
      </select>
      <span>{times}</span>
    </form>
  )
}
