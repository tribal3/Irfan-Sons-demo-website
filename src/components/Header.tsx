import { useEffect, useState } from 'react'
import { ArrowUpRight, Clock, MapPin, Menu, Phone, X } from 'lucide-react'
import { contact } from '../data'
import Logo from './Logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#book' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-item">
              <MapPin size={12} />
              {contact.addressShort}
            </span>
            <span className="topbar-item topbar-hide-md">
              <Clock size={12} />
              {contact.hoursWeek}
            </span>
          </div>
          <div className="topbar-right">
            <span className="topbar-dot" aria-hidden="true" />
            <span className="topbar-hide-sm">Walk-ins welcome</span>
            <a href={contact.phoneHref}>
              <Phone size={12} />
              {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <Logo />

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-phone" href={contact.phoneHref}>
              <Phone size={15} />
              {contact.phoneDisplay}
            </a>
            <a className="btn btn-primary btn-sm" href="#book">
              Book a service
              <ArrowUpRight size={15} />
            </a>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-head">
          <Logo />
          <button
            type="button"
            className="menu-btn light"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-links" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-foot">
          <a className="btn btn-primary" href={contact.phoneHref}>
            <Phone size={16} />
            Call {contact.phoneDisplay}
          </a>
          <p>{contact.addressLine1} {contact.addressLine2}</p>
          <span>{contact.hoursWeek}</span>
        </div>
      </div>
    </>
  )
}
