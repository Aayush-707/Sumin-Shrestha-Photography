import './App.css'
import Main from './pages/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Clients from './pages/Clients'
import Connect from './pages/Connect'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'

export default function App() {
  return(
    <>
    <Navbar />
    <PageLoader />
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/portfolio/*' element={<Portfolio />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/connect' element={<Connect />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
  </>
  )
}
