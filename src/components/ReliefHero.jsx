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

        <div className="relief-mission-update">
          <p className="relief-mission-eyebrow">Mission Update</p>

          <div className="relief-mission-stats">
            <div className="relief-mission-stat">
              <div className="relief-mission-number">15</div>
              <div className="relief-mission-label">Survivors Rescued</div>
            </div>

            <div className="relief-mission-stat">
              <div className="relief-mission-number">50</div>
              <div className="relief-mission-label">Families Given Closure</div>
            </div>
          </div>

          <p className="relief-mission-text">
            Our rescue operators from the UNIMET team have rescued
            <strong> 15 survivors </strong>
            and respectfully returned
            <strong> 50 victims </strong>
            to their families so they may be laid to rest with dignity.
            <br />
            <br />
            We are deeply grateful for the incredible support we have received.
            Your generosity has allowed us to continue our boots-on-the-ground
            emergency operations during this crisis. Together, we will keep
            working tirelessly to help those affected.
          </p>
        </div>

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