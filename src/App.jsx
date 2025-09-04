import { Route, Routes } from 'react-router-dom'
import './App.css'
// Páginas
import Home from './pages/Home'
import ApiRickAndMorty from './pages/API-rick-and-morty'
// components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rick-and-morty' element={<ApiRickAndMorty />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App