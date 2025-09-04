import './App.css'
import Main from './pages/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Clients from './pages/Clients'
import Connect from './pages/Connect'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'

function App() {

  return(
    <>
    <Navbar /> 
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/connect' element={<Connect />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App
