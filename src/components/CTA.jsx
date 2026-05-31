import { Link } from 'react-router-dom'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="join">
      <div className="cta-bg-word">AAVE</div>
      <div className="cta-inner">
        <h2>
          Ready to join<br />the <em>movement?</em>
        </h2>
        <p>
          Whether you are a student or a seasoned professional, AAVE-USA is
          your community. Let us build the future together.
        </p>
        <div className="cta-actions">
          <Link to="/contact" className="btn-white">Get in touch</Link>
        </div>
      </div>
    </section>
  )
}