import { Clock } from 'lucide-react'
import { processSteps } from '../data'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="process" className="section section-light process">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dash" aria-hidden="true" />
              How it works
            </div>
            <h2>From warm air to cold air, in four clear steps.</h2>
          </div>
          <div className="section-head-side">
            <p>
              You always know what is happening, what it costs and why. That is how a workshop
              should feel.
            </p>
          </div>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} className="process-step" delay={index * 90}>
              <span className="step-num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="process-note">
          <span className="process-note-icon">
            <Clock size={18} />
          </span>
          <p>
            Most A/C jobs are completed the same day — you are never left waiting for a part without
            an update.
          </p>
        </div>
      </div>
    </section>
  )
}
