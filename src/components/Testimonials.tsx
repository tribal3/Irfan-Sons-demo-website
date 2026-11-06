import { Star } from 'lucide-react'
import { testimonials } from '../data'
import Reveal from './Reveal'

function Stars() {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((star) => (
        <Star key={star} size={13} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="section section-light reviews">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dash" aria-hidden="true" />
              Word of mouth
            </div>
            <h2>Karachi drivers keep coming back.</h2>
          </div>
          <div className="section-head-side rating-side">
            <div className="rating-line">
              <Stars />
              <strong>4.9/5</strong>
            </div>
            <p>From 300+ customers across P.E.C.H.S, Tariq Road and beyond.</p>
          </div>
        </div>

        <div className="review-grid">
          {testimonials.map((review, index) => (
            <Reveal key={review.name} className="review-item" delay={index * 80}>
              <figure className="review-card">
                <span className="review-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <Stars />
                <blockquote>{review.quote}</blockquote>
                <figcaption>
                  <span className={`review-avatar ${review.tone}`}>{review.initials}</span>
                  <span>
                    <strong>{review.name}</strong>
                    <small>{review.car}</small>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
