import { useEffect, useState } from 'react'
import './ReliefHero.css'

function ReliefHero() {
  const images = [
    '/UNIMET-Home.jpg',
    '/UNIMET-Home1.jpg',
    '/UNIMET-Home2.jpg',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relief-hero">
      {images.map((image, index) => (
        <div
          key={image}
          className={`relief-hero-bg ${
            index === currentImage ? 'active' : ''
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="relief-hero-overlay">
        <p className="relief-eyebrow">AAVE Venezuelan Relief</p>

        <h1 className="relief-title">
          Standing with <em>Venezuela</em>
        </h1>

        <p className="relief-description">
          Following the devastating earthquake, AAVE-USA is working alongside
          local communities to provide emergency assistance, essential
          supplies, and long-term recovery support for families affected by the
          disaster.
        </p>

        <a
          href="https://gofund.me/970d6b5f1"
          target="_blank"
          rel="noopener noreferrer"
          className="relief-button"
        >
          Donate Now
        </a>
        <div className="relief-hero-partner">
          <div className="relief-hero-partner-logos">
            <img
              src="/UNIMET-Logo.png"
              alt="Universidad Metropolitana"
              className="relief-hero-partner-logo"
            />

            <span className="relief-hero-partner-x">×</span>

            <img
              src="/Logo-USA.jpeg"
              alt="AAVE-USA"
              className="relief-hero-partner-logo"
            />
          </div>
        </div>
      </div>

      <div className="relief-stripes">
        <span className="gold"></span>
        <span className="blue"></span>
        <span className="red"></span>
      </div>
    </section>
  )
}

export default ReliefHero