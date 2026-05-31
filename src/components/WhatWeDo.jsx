import './WhatWeDo.css'

const pillars = [
  {
    num: '01',
    tag: 'Networking',
    title: 'Connect across the country',
    body: 'Build relationships with Venezuelan engineers and industry professionals in chapters across the United States.',
    accent: 'gold',
  },
  {
    num: '02',
    tag: 'Professional Dev',
    title: 'Grow your career',
    body: 'Access workshops, mentorship, and resources to sharpen your engineering skills and open new doors.',
    accent: 'blue',
  },
  {
    num: '03',
    tag: 'Culture',
    title: 'Celebrate our heritage',
    body: 'Keep Venezuelan traditions alive while building a future through events, community, and pride in who we are.',
    accent: 'red',
  },
]

export default function WhatWeDo() {
  return (
    <section className="whatwedo" id="about">
      <div className="whatwedo-header">
        <p className="section-eyebrow">What we do</p>
        <h2 className="section-title">
          Built for <em>Venezuelan</em> Engineers
        </h2>
        <p className="section-sub">
          From networking to professional development, we give Venezuelan
          engineers the tools and community to thrive in the U.S.
        </p>
      </div>

      <div className="pillars">
        {pillars.map((p) => (
          <div key={p.num} className={`pillar pillar-${p.accent}`}>
            <div className="pillar-top">
              <span className="pillar-num">{p.num}</span>
              <span className="pillar-tag">{p.tag}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}