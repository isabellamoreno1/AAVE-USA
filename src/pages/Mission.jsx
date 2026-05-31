import './Mission.css'

export default function Mission() {
  return (
    <div className="mission">
      <div className="mission-hero">
        <div className="mission-hero-bg-word">AAVE</div>
        <div className="mission-hero-inner">
          <p className="section-eyebrow mission-eyebrow">Our Mission</p>
          <h1 className="mission-title">
            Engineering a better<br /><em>Venezuela</em>
          </h1>
          <p className="mission-sub">
            AAVE-USA is committed to giving back to the country that shaped us.
            Through fundraising, outreach, and community action, we work to
            support Venezuela and its people from across the United States.
          </p>
        </div>
      </div>

      <div className="mission-video-section">
        <p className="section-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>Watch Our Story</p>
        <h2 className="mission-video-title">See the impact <em>we are making</em></h2>
        <div className="mission-video-row">
          <div className="mission-video-wrap">
            <iframe
                src="https://drive.google.com/file/d/1mRmwBmYiXfNH82-tHD94gltWHbn8_akE/preview"
                allow="autoplay"
                allowFullScreen
            />
            </div>
          <div className="catatumbo">
            <p className="section-eyebrow catatumbo-eyebrow">Featured Project</p>
            <h3 className="catatumbo-title">The Catatumbo Project</h3>
            <p className="catatumbo-location">Maracaibo, Venezuela</p>
            <p className="catatumbo-body">
              AAVE-USA raised funds for the community of Maracaibo and sent one of our own members on the ground to purchase and install new equipment for the town, turning donations into direct real-world impact.
            </p>
          </div>
        </div>
      </div>

      <div className="mission-cards">
        <div className="mission-card mission-card-gold">
          <div className="mission-card-num">01</div>
          <h3>Raise Funds</h3>
          <p>We organize national fundraising efforts to support communities in Venezuela in need of resources and aid.</p>
        </div>
        <div className="mission-card mission-card-blue">
          <div className="mission-card-num">02</div>
          <h3>Build Bridges</h3>
          <p>We connect Venezuelan engineers in the U.S. with opportunities to contribute their skills back home.</p>
        </div>
        <div className="mission-card mission-card-red">
          <div className="mission-card-num">03</div>
          <h3>Spread Awareness</h3>
          <p>We use our platform to shed light on the challenges facing Venezuela and rally our community to take action.</p>
        </div>
      </div>

      <div className="mission-chapters">
        <div className="mission-chapters-inner">
          <p className="section-eyebrow" style={{ textAlign: 'center', marginBottom: '12px', color: 'var(--gold)' }}>Student Chapters</p>
          <h2 className="mission-chapters-title">Our chapters across <em>Florida</em></h2>
          <p className="mission-chapters-sub">AAVE-USA is growing through student-led chapters at universities across the state, uniting the next generation of Venezuelan engineers.</p>
          <div className="mission-chapters-grid">
            <div className="mission-chapter-card">
              <div className="mission-chapter-top">
                <div className="mission-chapter-dot" style={{ background: 'var(--gold)' }} />
                <span className="mission-chapter-uni">University of Central Florida</span>
              </div>
              <h3>AAVE UCF</h3>
              <p>Orlando, Florida</p>
              <div className="mission-chapter-links">
                <a href="https://www.instagram.com/aaveucf" target="_blank" rel="noreferrer" className="chapter-link chapter-link-ig">Instagram</a>
                <a href="https://aaveucf.club" target="_blank" rel="noreferrer" className="chapter-link chapter-link-web">Website</a>
              </div>
            </div>

            <div className="mission-chapter-card">
              <div className="mission-chapter-top">
                <div className="mission-chapter-dot" style={{ background: 'var(--blue)' }} />
                <span className="mission-chapter-uni">Florida International University</span>
              </div>
              <h3>AAVE FIU</h3>
              <p>Miami, Florida</p>
              <div className="mission-chapter-links">
                <a href="https://www.instagram.com/aavefiu" target="_blank" rel="noreferrer" className="chapter-link chapter-link-ig">Instagram</a>
              </div>
            </div>

            <div className="mission-chapter-card">
              <div className="mission-chapter-top">
                <div className="mission-chapter-dot" style={{ background: 'var(--red)' }} />
                <span className="mission-chapter-uni">University of Florida</span>
              </div>
              <h3>AAVE UF</h3>
              <p>Gainesville, Florida</p>
              <div className="mission-chapter-links">
                <span className="chapter-link chapter-link-soon">Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-donate">
        <div className="mission-donate-bg">AAVE</div>
        <div className="mission-donate-inner">
          <h2>Ready to make a <em>difference?</em></h2>
          <p>Every contribution brings us closer to a stronger Venezuela. Join us in giving back.</p>
          <a href="mailto:info@aave-usa.org" className="btn-gold-lg">Donate now</a>
        </div>
      </div>
    </div>
  )
}