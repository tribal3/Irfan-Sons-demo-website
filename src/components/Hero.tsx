import { ArrowRight, Check, Phone, Snowflake } from 'lucide-react'
import { contact, images } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            Car A/C workshop · P.E.C.H.S, Karachi
          </div>

          <h1>
            Serious cooling
            <br />
            for <span className="hl">Karachi summers.</span>
          </h1>

          <p className="hero-lede">
            From weak airflow to a full compressor rebuild — we diagnose the problem, explain it
            clearly, and get your cabin cold again. Family-run, off Tariq Road.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#book">
              Book a service
              <ArrowRight size={17} />
            </a>
            <a className="btn btn-ghost" href={contact.phoneHref}>
              <Phone size={16} />
              {contact.phoneDisplay}
            </a>
          </div>

          <ul className="hero-points">
            <li>
              <Check size={14} /> Same-day service
            </li>
            <li>
              <Check size={14} /> R134a &amp; R1234yf
            </li>
            <li>
              <Check size={14} /> All car brands
            </li>
          </ul>

          <div className="hero-note">
            <span className="live-dot" aria-hidden="true" />
            Walk-ins welcome · Open today until 9:00 PM
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src={images.hero}
              alt="Close-up of a car air conditioning vent inside a premium cabin"
              width={1100}
              height={1650}
              fetchPriority="high"
            />
            <div className="hero-photo-shade" aria-hidden="true" />
            <div className="hero-cold-glow" aria-hidden="true" />

            <div className="hero-tag">
              <span>Cooling specialists</span>
              <strong>P.E.C.H.S · Karachi</strong>
            </div>
          </div>

          <div className="glass-card temp-card">
            <div className="temp-card-top">
              <span>Vent temperature</span>
              <Snowflake size={15} />
            </div>
            <strong>
              6.4<sup>°C</sup>
            </strong>
            <div className="temp-bar" aria-hidden="true">
              <span />
            </div>
            <small>Within factory spec · R134a</small>
          </div>

          <div className="glass-card check-card">
            <span className="check-icon">
              <Check size={15} />
            </span>
            <div>
              <strong>A/C health check</strong>
              <small>Leak test · Gas charge · Filter</small>
            </div>
          </div>

          <div className="hero-seal">
            <Snowflake size={15} />
            <span>All brands serviced</span>
          </div>

          <div className="hero-side" aria-hidden="true">
            Off Tariq Road — Karachi 75100
          </div>
        </div>
      </div>
    </section>
  )
}
