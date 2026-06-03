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
  <div className="mission-video-row">
    <div className="mission-video-wrap">
      <iframe
        src="https://player.vimeo.com/video/1197163160"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="catatumbo">
      <p className="section-eyebrow" style={{ textAlign: 'left', marginBottom: '12px' }}>Watch Our Story</p>
      <h2 className="mission-video-title">See the impact <em>we are making</em></h2>
      <p className="section-eyebrow catatumbo-eyebrow" style={{ marginTop: '32px' }}>Featured Project</p>
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
    </div>
  )
}