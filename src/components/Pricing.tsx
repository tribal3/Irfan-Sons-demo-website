import { ArrowRight, Check, Info } from 'lucide-react'
import { pricePlans } from '../data'
import Reveal from './Reveal'

export default function Pricing() {
  return (
    <section id="pricing" className="section section-dark pricing">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dash" aria-hidden="true" />
              Service menu
            </div>
            <h2>Straight prices. No surprises.</h2>
          </div>
          <div className="section-head-side">
            <p>
              Indicative starting prices for the most common jobs. Every car is different — we
              confirm the final quote after a quick inspection.
            </p>
          </div>
        </div>

        <div className="pricing-grid">
          {pricePlans.map((plan, index) => (
            <Reveal key={plan.name} className="price-item" delay={index * 90}>
              <article className={`price-card ${plan.featured ? 'is-featured' : ''}`}>
                {plan.badge && <span className="price-badge">{plan.badge}</span>}
                <span className="price-name">{plan.name}</span>
                <div className="price-amount">
                  <small>{plan.prefix}</small>
                  <strong>{plan.price}</strong>
                </div>
                <p className="price-summary">{plan.summary}</p>
                <ul className="price-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} strokeWidth={2.4} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-block`}
                  href="#book"
                >
                  {plan.cta}
                  <ArrowRight size={15} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="pricing-note">
          <Info size={14} />
          Prices are indicative and exclude major parts unless stated. Final quote confirmed after
          inspection. All prices in PKR.
        </p>
      </div>
    </section>
  )
}
