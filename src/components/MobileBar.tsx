import { CalendarCheck, MessageCircle, Phone } from 'lucide-react'
import { contact } from '../data'

export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <a className="mobile-bar-link" href={contact.phoneHref}>
        <Phone size={17} />
        <span>Call</span>
      </a>
      <a
        className="mobile-bar-link is-wa"
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={17} />
        <span>WhatsApp</span>
      </a>
      <a className="mobile-bar-link is-book" href="#book">
        <CalendarCheck size={17} />
        <span>Book</span>
      </a>
    </div>
  )
}
