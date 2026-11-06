import { Check } from 'lucide-react'
import { images } from '../data'
import Reveal from './Reveal'

const stats = [
  { value: '20+', label: 'Years in P.E.C.H.S' },
  { value: '8,000+', label: 'Cars cooled' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '6', label: 'Days open a week' },
]

const points = [
  'Air-conditioning specialists — not a general garage',
  'Genuine and OEM-grade compressors, coils and parts',
  'Clear diagnosis and an itemised quote before work begins',
  'Comfortable waiting area, or leave the car and we call you',
]

export default function About() {
  return (
    <section id="about" className="section section-dark about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-media">
            <div className="about-media-main">
              <img
                src={images.aboutMain}
                alt="Technician working on a car engine at Irfan Sons Car A/C"
                loading="lazy"
                decoding="async"
                width={1100}
                height={733}
              />
              <span className="photo-label">Inside the workshop</span>
            </div>
            <div className="about-media-small">
              <img
                src={images.aboutSmall}
                alt="Close-up of a car air vent"
                loading="lazy"
                decoding="async"
                width={700}
                height={1050}
              />
            </div>
            <div className="about-badge">
              <strong>20+</strong>
              <span>
                years
                <br />
                under the hood
              </span>
            </div>
          </Reveal>

          <Reveal className="about-copy" delay={120}>
            <div className="eyebrow">
              <span className="eyebrow-dash" aria-hidden="true" />
              The workshop
            </div>
            <h2>A family-run garage in the heart of P.E.C.H.S.</h2>
            <p className="about-lead">
              Irfan Sons Car A/C has been keeping Karachi drivers comfortable through the city&rsquo;s
              toughest summers. We are a hands-on, family-run workshop — the kind of place where the
              person who inspects your car is the person who fixes it.
            </p>
            <p className="about-body">
              We work on Japanese, Korean and European cars, use genuine or OEM-grade parts, and never
              start a job without your approval. No upselling. No mystery charges. Just cold air and
              honest work.
            </p>

            <ul className="about-points">
              {points.map((point) => (
                <li key={point}>
                  <span className="tick">
                    <Check size={13} strokeWidth={2.4} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="about-sign">
              <span className="sign-line" aria-hidden="true" />
              <div>
                <strong>Irfan &amp; Sons</strong>
                <span>Owners &amp; technicians</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="stats" delay={80}>
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
