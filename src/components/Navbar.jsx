import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src="/src/assets/Logo-USA.jpeg" alt="AAVE USA" className="navbar-logo-img" />
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/mission">Our Mission</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div className="tricolor">
        <div className="tricolor-gold" />
        <div className="tricolor-blue" />
        <div className="tricolor-red" />
      </div>
    </>
  )
}