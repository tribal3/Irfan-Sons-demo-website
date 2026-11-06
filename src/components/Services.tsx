import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services } from '../data'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="section section-light services">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dash" aria-hidden="true" />
              What we do
            </div>
            <h2>Complete car A/C care, under one roof.</h2>
          </div>
          <div className="section-head-side">
            <p>
              Diagnosis, repair and seasonal servicing for every part of your car&rsquo;s cooling
              system — no guesswork, no unnecessary parts.
            </p>
            <a className="text-link" href="#book">
              Not sure what&rsquo;s wrong? Book a cooling check
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} className="service-item" delay={index * 55}>
                <article className="service-card">
                  <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
                  <span className="service-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#book" className="service-link">
                    Book this
                    <ArrowUpRight size={13} />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
