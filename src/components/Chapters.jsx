import './Chapters.css'

export default function Chapters() {
  return (
    <section className="chapters">
      <div className="chapters-inner">
        <p className="section-eyebrow chapters-eyebrow">Student Chapters</p>
        <h2 className="chapters-title">Our chapters across <em>Florida</em></h2>
        <p className="chapters-sub">AAVE-USA is growing through student-led chapters at universities across the state, uniting the next generation of Venezuelan engineers.</p>
        <div className="chapters-grid">
          <div className="chapter-card">
            <div className="chapter-top">
              <div className="chapter-dot" style={{ background: 'var(--gold)' }} />
              <span className="chapter-uni">University of Central Florida</span>
            </div>
            <h3>AAVE UCF</h3>
            <p>Orlando, Florida</p>
            <div className="chapter-links">
              <a href="https://www.instagram.com/aaveucf" target="_blank" rel="noreferrer" className="chapter-link chapter-link-ig">Instagram</a>
              <a href="https://aaveucf.club" target="_blank" rel="noreferrer" className="chapter-link chapter-link-web">Website</a>
              <a href="mailto:greco@aave-usa.org" className="chapter-link chapter-link-email">greco@aave-usa.org</a>
            </div>
          </div>

          <div className="chapter-card">
            <div className="chapter-top">
              <div className="chapter-dot" style={{ background: 'var(--blue)' }} />
              <span className="chapter-uni">Florida International University</span>
            </div>
            <h3>AAVE FIU</h3>
            <p>Miami, Florida</p>
            <div className="chapter-links">
              <a href="https://www.instagram.com/aavefiu" target="_blank" rel="noreferrer" className="chapter-link chapter-link-ig">Instagram</a>
              <a href="mailto:sofia@aave-usa.org" className="chapter-link chapter-link-email">sofia@aave-usa.org</a>
            </div>
          </div>

          <div className="chapter-card">
            <div className="chapter-top">
              <div className="chapter-dot" style={{ background: 'var(--red)' }} />
              <span className="chapter-uni">University of Florida</span>
            </div>
            <h3>AAVE UF</h3>
            <p>Gainesville, Florida</p>
            <div className="chapter-links">
              <span className="chapter-link chapter-link-soon">Coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}