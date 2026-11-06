import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { contact } from '../data'
import Reveal from './Reveal'

type FormState = {
  name: string
  phone: string
  car: string
  service: string
  date: string
  time: string
  message: string
}

const emptyForm: FormState = {
  name: '',
  phone: '',
  car: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

type ContactTile = {
  icon: typeof Phone
  label: string
  value: string
  href?: string
}

const serviceOptions = [
  'A/C not cooling',
  'Gas charging',
  'Full A/C service',
  'Compressor / major repair',
  'Leak detection',
  'Other / not sure',
]

const mapLink = `https://maps.google.com/?q=${encodeURIComponent(contact.mapQuery)}`
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`

const contactTiles: ContactTile[] = [
  { icon: Phone, label: 'Call us', value: contact.phoneDisplay, href: contact.phoneHref },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with the workshop',
    href: contact.whatsapp,
  },
  {
    icon: MapPin,
    label: 'Workshop',
    value: 'Block 2, P.E.C.H.S, Karachi',
    href: mapLink,
  },
  { icon: Clock, label: 'Open today', value: '9:00 AM – 9:00 PM' },
]

export default function Booking() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [sent, setSent] = useState(false)

  const update =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((previous) => ({ ...previous, [key]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  const waMessage = encodeURIComponent(
    [
      'Assalam o Alaikum Irfan Sons Car A/C.',
      '',
      'I would like to book a service.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Car: ${form.car || 'Not specified'}`,
      `Service: ${form.service || 'A/C check'}`,
      `Preferred: ${form.date || 'Any day'} ${form.time || ''}`.trim(),
      `Notes: ${form.message || '—'}`,
    ].join('\n'),
  )

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="book" className="section section-dark booking">
      <div className="container">
        <div className="booking-grid">
          <Reveal className="booking-intro">
            <div className="eyebrow">
              <span className="eyebrow-dash" aria-hidden="true" />
              Book your visit
            </div>
            <h2>Let&rsquo;s get your A/C cold again.</h2>
            <p className="booking-lede">
              Tell us about your car and the problem. We will call you back — usually within 30
              minutes during workshop hours — to confirm a time and give you an idea of the cost.
            </p>

            <div className="contact-cards">
              {contactTiles.map((tile) => {
                const Icon = tile.icon
                const inner = (
                  <>
                    <span className="contact-icon">
                      <Icon size={17} />
                    </span>
                    <span className="contact-text">
                      <small>{tile.label}</small>
                      <strong>{tile.value}</strong>
                    </span>
                  </>
                )

                return tile.href ? (
                  <a
                    className="contact-tile"
                    href={tile.href}
                    key={tile.label}
                    target={tile.href.startsWith('http') ? '_blank' : undefined}
                    rel={tile.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="contact-tile" key={tile.label}>
                    {inner}
                  </div>
                )
              })}
            </div>

            <div className="map-block">
              <div className="map-frame">
                <iframe
                  title="Map showing Irfan Sons Car A/C in P.E.C.H.S, Karachi"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a className="map-caption" href={mapLink} target="_blank" rel="noreferrer">
                <span>
                  <MapPin size={13} />
                  Off Tariq Road, P.E.C.H.S
                </span>
                <span>
                  Open in Google Maps
                  <ArrowUpRight size={13} />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal className="booking-form-wrap" delay={120}>
            <div className="booking-card">
              {sent ? (
                <div className="form-success">
                  <span className="success-icon">
                    <Check size={26} strokeWidth={2.4} />
                  </span>
                  <h3>Request received.</h3>
                  <p>
                    Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we will call you on{' '}
                    <strong>{form.phone}</strong> shortly to confirm a time.
                  </p>

                  <div className="success-summary">
                    <span>
                      <small>Service</small>
                      <strong>{form.service || 'A/C check'}</strong>
                    </span>
                    <span>
                      <small>Vehicle</small>
                      <strong>{form.car || 'Not specified'}</strong>
                    </span>
                  </div>

                  <a
                    className="btn btn-whatsapp btn-block"
                    href={`${contact.whatsapp}?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={16} />
                    Send details on WhatsApp
                  </a>

                  <button
                    type="button"
                    className="link-button"
                    onClick={() => {
                      setSent(false)
                      setForm(emptyForm)
                    }}
                  >
                    Make another request
                  </button>

                  <p className="success-note">
                    No advance payment needed. We will confirm everything on the call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-head">
                    <span className="form-kicker">Request a call back</span>
                    <h3>Tell us about your car</h3>
                    <p>Takes less than a minute.</p>
                  </div>

                  <div className="form-grid">
                    <label className="field">
                      <span>Full name</span>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="e.g. Ahmed Raza"
                        autoComplete="name"
                        required
                      />
                    </label>

                    <label className="field">
                      <span>Phone / WhatsApp</span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="0300 0000000"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                      />
                    </label>

                    <label className="field">
                      <span>Car make &amp; model</span>
                      <input
                        type="text"
                        name="car"
                        value={form.car}
                        onChange={update('car')}
                        placeholder="e.g. Toyota Corolla 2019"
                      />
                    </label>

                    <label className="field">
                      <span>Service needed</span>
                      <select name="service" value={form.service} onChange={update('service')} required>
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((option) => (
                          <option value={option} key={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="field">
                      <span>Preferred date</span>
                      <input type="date" name="date" value={form.date} min={today} onChange={update('date')} />
                    </label>

                    <label className="field">
                      <span>Preferred time</span>
                      <select name="time" value={form.time} onChange={update('time')}>
                        <option value="">Any time</option>
                        <option value="Morning (9am – 12pm)">Morning (9am – 12pm)</option>
                        <option value="Afternoon (12pm – 4pm)">Afternoon (12pm – 4pm)</option>
                        <option value="Evening (4pm – 9pm)">Evening (4pm – 9pm)</option>
                      </select>
                    </label>

                    <label className="field field-full">
                      <span>Anything we should know?</span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={update('message')}
                        placeholder="e.g. A/C cools only while driving, slight noise from the blower..."
                        rows={3}
                      />
                    </label>
                  </div>

                  <button className="btn btn-primary btn-block" type="submit">
                    Request a call back
                    <ArrowRight size={16} />
                  </button>

                  <p className="form-note">
                    <ShieldCheck size={14} />
                    No advance payment. We confirm every booking by phone.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
