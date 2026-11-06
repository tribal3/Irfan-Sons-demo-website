import { useState } from 'react'
import { Minus, Phone, Plus } from 'lucide-react'
import { contact, faqs } from '../data'
import Reveal from './Reveal'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section section-light faq">
      <div className="container">
        <div className="faq-layout">
          <Reveal className="faq-intro">
            <div className="eyebrow">
              <span className="eyebrow-dash" aria-hidden="true" />
              Good questions
            </div>
            <h2>Before you bring the car in.</h2>
            <p>
              A few things customers usually ask us. If your question is not here, call the workshop
              — we are happy to talk it through.
            </p>

            <a className="faq-call" href={contact.phoneHref}>
              <span className="faq-call-icon">
                <Phone size={18} />
              </span>
              <span>
                <small>Talk to the workshop</small>
                <strong>{contact.phoneDisplay}</strong>
              </span>
            </a>

            <span className="faq-hours">{contact.hoursWeek}</span>
          </Reveal>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <Reveal key={faq.question} delay={index * 40}>
                  <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle" aria-hidden="true">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <div className="faq-answer" id={`faq-panel-${index}`} aria-hidden={!isOpen}>
                      <div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
