import { Link, Route, Routes } from 'react-router-dom'
import { ListGifs } from './components/ListGifs'
import './App.css'

function App () {

  return (
    <div className="container">
      <section className="app-content">
        <h1>Gif App</h1>
        <ul className="nav">
          <li>
            <Link to='/gif/messi'>Messi</Link>
          </li>
        </ul>
        <Routes>
          <Route index path='/gif/:keyword' element={<ListGifs />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
