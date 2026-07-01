import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Mission from './pages/Mission'
import Contact from './pages/Contact'
import VenezuelaRelief from './pages/VenezuelaRelief'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/venezuela-relief" element={<VenezuelaRelief />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App