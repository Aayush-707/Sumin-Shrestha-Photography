import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/Hero'
import Portfolio from './pages/Portfolio'
import Clients from './pages/Clients'
import Connect from './pages/Connect'
import About from './pages/About'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Toaster } from 'react-hot-toast'
import './App.css'

export default function App() {
  return(
    <>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/portfolio/*' element={<Portfolio />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/connect' element={<Connect />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Toaster position="bottom-right" reverseOrder={false} />
    <Footer />
  </>
  )
}
