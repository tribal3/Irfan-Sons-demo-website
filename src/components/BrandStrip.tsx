import { brands } from '../data'

export default function BrandStrip() {
  return (
    <section className="brands" aria-label="Car brands we service">
      <div className="container brands-inner">
        <span className="brands-label">We service</span>
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {brands.map((brand) => (
                  <span key={`${copy}-${brand}`}>{brand}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
