import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className="tricolor">
        <div className="tricolor-gold" />
        <div className="tricolor-blue" />
        <div className="tricolor-red" />
      </div>
      <footer className="footer">
        <div className="footer-left">
          <span className="footer-logo">AAVE <span>USA</span></span>
          <p>American Association of Venezuelan Engineers</p>
          <a href="https://www.aave-usa.org" className="footer-url">www.aave-usa.org</a>
        </div>
        <div className="footer-right">
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/mission">Our Mission</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <p className="footer-copy">© 2026 AAVE-USA. All rights reserved.</p>
          <p className="footer-tagline">Unidos por la ingeniería</p>
        </div>
      </footer>
    </>
  )
}