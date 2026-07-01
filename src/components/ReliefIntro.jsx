import { useEffect, useState } from 'react'
import './ReliefIntro.css'

function ReliefIntro() {
  const galleryImages = [
    '/UNIMET-Home.jpg',
    '/UNIMET-Home1.jpg',
    '/UNIMET-Home2.jpg',
    '/UNIMET-Teamfoto.jpg',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % galleryImages.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <section className="relief-intro">
      <div className="relief-intro-container">
        <div className="relief-intro-content">
          <p className="relief-intro-eyebrow">
            Earthquake Relief Effort
          </p>

          <h2 className="relief-intro-title">
            Helping Families <em>Recover</em>
          </h2>

          <p className="relief-intro-text">
            Right now, Venezuela needs our support more than ever. Following the
            devastating earthquake in Caracas, <strong>AAVE</strong> has
            partnered directly with the incredible rescue team from{' '}
            <strong>Universidad Metropolitana de Caracas (UNIMET)</strong> to
            help provide immediate, life-saving aid to the communities affected
            on the ground.
          </p>

          <p className="relief-intro-text">
            The brave student rescuers and local teams have been working
            tirelessly through the debris since the disaster struck. Your
            support translates directly into essential medical supplies, first
            aid, food, clean water, and other critical resources for families
            who have lost everything.
          </p>

          <p className="relief-intro-text">
            <strong>Every single contribution makes a tangible difference.</strong>{' '}
            Together, we can help provide relief today while giving hope to the
            communities that will be rebuilding for months to come.
          </p>
        </div>

        <div className="relief-gallery">
          {galleryImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Venezuela earthquake relief efforts"
              className={`relief-gallery-image ${
                index === currentImage ? 'active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReliefIntro