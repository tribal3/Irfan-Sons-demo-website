import { Snowflake } from 'lucide-react'

export default function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Irfan Sons Car A/C — home">
      <span className="logo-mark" aria-hidden="true">
        <Snowflake strokeWidth={1.7} />
        <span className="logo-dot" />
      </span>
      <span className="logo-text">
        <strong>Irfan Sons</strong>
        <span>
          Car A/C <i /> P.E.C.H.S
        </span>
      </span>
    </a>
  )
}
