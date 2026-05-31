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
            <a href="#about">About</a>
            <a href="#chapters">Chapters</a>
            <a href="#events">Events</a>
            <a href="#resources">Resources</a>
            <a href="mailto:info@aave-usa.org">Contact</a>
          </nav>
          <p className="footer-copy">© 2026 AAVE-USA. All rights reserved.</p>
          <p className="footer-tagline">Unidos por la ingeniería</p>
        </div>
      </footer>
    </>
  )
}