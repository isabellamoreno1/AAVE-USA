import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-flag-stripe">
        <div className="hfs-gold" />
        <div className="hfs-blue" />
        <div className="hfs-red" />
      </div>

      <div className="hero-bg-word">AAVE</div>

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          UNITING VENEZUELAN ENGINEERS ACROSS AMERICA
        </div>

        <h1 className="hero-title">
          Empowering <em>Venezuelan</em><br />
          Engineers Nationwide
        </h1>

        <p className="hero-sub">
          The American Association of Venezuelan Engineers unites professionals
          and students across the United States, building community, driving
          careers, and celebrating our heritage.
        </p>

        <div className="hero-actions">
          <a href="#about" className="btn-ghost">LEARN MORE</a>
          <a href="#join" className="btn-gold">CONTACT US</a>
        </div>
      </div>
    </section>
  )
}