import { useGifs } from './hooks/useGifs'
import { ListGifs } from './components/ListGifs'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App () {
  const { gifs } = useGifs()

  return (
    <div className="container">
      <section className="app-content">
        <Routes>
          <Route index path="/gif/:keyword" element={<ListGifs gifs={gifs} />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
