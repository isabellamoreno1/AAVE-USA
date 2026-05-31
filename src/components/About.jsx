import './About.css'

const highlights = [
  'Join a dynamic community of Venezuelan engineering professionals',
  'Network with industry leaders who value your background',
  'Participate in cultural events celebrating Venezuelan heritage',
  'Access professional development workshops nationwide',
]

const dotColors = ['var(--gold)', 'var(--blue)', 'var(--red)', 'var(--gold)']

export default function About() {
  return (
    <section className="about" id="about-section">
      <div className="about-bg-word">AAVE</div>

      <div className="about-inner">
        <div className="about-image-col">
          <div className="about-img-wrap">
            <img
              src="/src/assets/Group.jpg"
              alt="AAVE community members"
            />
            <div className="about-img-badge">Est. in the USA</div>
          </div>
        </div>

        <div className="about-text-col">
          <p className="section-eyebrow about-eyebrow">About AAVE-USA</p>
          <h2 className="section-title about-section-title">
            A home away<br />from <em>home</em>
          </h2>

          <p className="about-body">
            AAVE-USA brings together Venezuelan engineers and students united
            by shared heritage and the drive to succeed, across every state
            and every discipline.
          </p>
          <p className="about-body">
            Whether you are a recent graduate or a seasoned professional,
            AAVE-USA is your national network.
          </p>

          <ul className="about-list">
            {highlights.map((item, i) => (
              <li key={i}>
                <span
                  className="about-dot"
                  style={{ background: dotColors[i] }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}