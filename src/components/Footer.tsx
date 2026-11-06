import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contact } from '../data'
import Logo from './Logo'

const exploreLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why choose us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Book a service', href: '#book' },
]

const jobLinks = [
  { label: 'A/C gas charging', href: '#services' },
  { label: 'Compressor repair', href: '#services' },
  { label: 'Cooling coil service', href: '#services' },
  { label: 'Leak detection', href: '#services' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const mapLink = `https://maps.google.com/?q=${encodeURIComponent(contact.mapQuery)}`

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Car air-conditioning specialists in P.E.C.H.S, Karachi. Cold air, honest work and a
            family name behind every job.
          </p>
          <a className="footer-wa" href={contact.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={15} />
            WhatsApp the workshop
          </a>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          {exploreLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Popular jobs</h4>
          {jobLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-col footer-visit">
          <h4>Visit us</h4>
          <a href={mapLink} target="_blank" rel="noreferrer">
            <MapPin size={15} />
            <span>
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </span>
          </a>
          <a href={contact.phoneHref}>
            <Phone size={15} />
            <span>{contact.phoneDisplay}</span>
          </a>
          <span className="footer-hours">
            <Clock size={15} />
            <span>
              {contact.hoursWeek}
              <br />
              {contact.hoursSunday}
            </span>
          </span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {year} Irfan Sons Car A/C. All rights reserved.</span>
        <span>P.E.C.H.S · Karachi · Pakistan</span>
      </div>
    </footer>
  )
}
