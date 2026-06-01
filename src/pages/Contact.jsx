import { MdEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="contact-hero-bg">AAVE</div>
        <div className="contact-hero-inner">
          <p className="section-eyebrow contact-eyebrow">Get in Touch</p>
          <h1 className="contact-title">We would love to <em>hear from you</em></h1>
          <p className="contact-sub">Whether you have questions, want to get involved, or are interested in starting a chapter, reach out and we will get back to you.</p>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-left">
          <h2 className="contact-section-title">Reach us <em>directly</em></h2>
          <p className="contact-section-sub">For general inquiries, partnerships, and national matters.</p>
          <div className="contact-links">
            <a href="mailto:ramon@aave-usa.org" className="contact-link-card">
              <div className="clc-icon clc-gold"><MdEmail size={24} /></div>
              <div>
                <p className="clc-label">National Director</p>
                <p className="clc-value">ramon@aave-usa.org</p>
              </div>
            </a>
            <a href="mailto:fabio@aave-usa.org" className="contact-link-card">
              <div className="clc-icon clc-gold"><MdEmail size={24} /></div>
              <div>
                <p className="clc-label">National Director</p>
                <p className="clc-value">fabio@aave-usa.org</p>
              </div>
            </a>
            <a href="https://www.instagram.com/aave.us" target="_blank" rel="noreferrer" className="contact-link-card">
              <div className="clc-icon clc-blue"><FaInstagram size={22} /></div>
              <div>
                <p className="clc-label">Instagram</p>
                <p className="clc-value">aave.us</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-cta-box">
            <div className="contact-cta-flag">
              <div className="ccf-gold" />
              <div className="ccf-blue" />
              <div className="ccf-red" />
            </div>
            <div className="contact-cta-content">
              <h3>Want to start a chapter?</h3>
              <p>AAVE-USA is expanding across the United States. If you are a Venezuelan engineering student and want to bring AAVE to your university, we want to hear from you.</p>
              <a href="mailto:ramon@aave-usa.org" className="btn-gold-lg">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}