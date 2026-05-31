import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src="/Logo-USA.jpeg" alt="AAVE USA" className="navbar-logo-img" />
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/mission">Our Mission</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/mission" onClick={() => setOpen(false)}>Our Mission</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}

      <div className="tricolor">
        <div className="tricolor-gold" />
        <div className="tricolor-blue" />
        <div className="tricolor-red" />
      </div>
    </>
  )
}