import { Link, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { GifsProvider } from './context/GifsProvider'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { Details } from './pages/Details'
import { Error404 } from './pages/404'
import { Login } from './pages/Login'
import LOGO from './assets/logo.png' 
import './App.css'

function App () {

  return (
    <UserProvider>
      <GifsProvider>
        <div className="app">
          <section className="app-content">
            <Header />
            <Link to='/'>
              <img src={LOGO} className="app-logo" alt="Ghiffhy Logo" />
            </Link>
            <Routes>
              <Route index path='/?' element={<Home />} />
              <Route path='/search/:keyword/:rating?' element={<SearchResults />} />
              <Route path='/gif/:id' element={<Details />} />
              <Route path='/login' element={<Login />} />

              <Route path='/*' element={<Error404 />} />
            </Routes>
          </section>
        </div>
      </GifsProvider>
    </UserProvider>
  )
}

export default App
