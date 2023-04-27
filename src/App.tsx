import { Link, Route, Routes } from 'react-router-dom'
import { GifsProvider } from './context/GifsProvider'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { Details } from './pages/Details'
import LOGO from './assets/logo.png' 
import './App.css'

function App () {

  return (
    <GifsProvider>
      <div className="app">
        <section className="app-content">
          <Link to='/'>
            <img src={LOGO} className="app-logo" alt="Ghiffhy Logo" />
          </Link>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/search/:keyword' element={<SearchResults />} />
            <Route path='/gif/:id' element={<Details />} />
          </Routes>
        </section>
      </div>
    </GifsProvider>
  )
}

export default App
