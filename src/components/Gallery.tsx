import { ArrowUpRight, MapPin } from 'lucide-react'
import { contact, gallery } from '../data'
import Reveal from './Reveal'

export default function Gallery() {
  return (
    <section id="gallery" className="section section-dark gallery">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dash" aria-hidden="true" />
              Inside the workshop
            </div>
            <h2>Real work. Real cold air.</h2>
          </div>
          <div className="section-head-side">
            <p>A look at the cars, tools and hands behind Irfan Sons Car A/C.</p>
            <a
              className="text-link light"
              href={`https://maps.google.com/?q=${encodeURIComponent(contact.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={14} />
              Visit the workshop
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <Reveal className="gallery-grid">
          {gallery.map((item) => (
            <figure className={`gallery-item ${item.className}`} key={item.caption}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={900}
                height={600}
              />
              <figcaption>
                <span className="gallery-dot" aria-hidden="true" />
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
