import './App.css'
import Main from './components/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import People from './pages/People'
import Places from './pages/Places'
import Things from './pages/Things'
import Clients from './pages/Clients'
import Connect from './pages/Connect'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

function App() {

  return(
    <>
    <Navbar /> 
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/people' element={<People />} />
      <Route path='/places' element={<Places />} />
      <Route path='/things' element={<Things />} />
      <Route path='/clients' element={<Clients />} />
      <Route path='/connect' element={<Connect />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App
