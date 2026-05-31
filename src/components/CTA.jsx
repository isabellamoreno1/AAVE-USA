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
          <a href="mailto:info@aave-usa.org" className="btn-white">Join AAVE-USA</a>
          <a href="mailto:info@aave-usa.org" className="btn-outline-white">Contact us</a>
        </div>
      </div>
    </section>
  )
}