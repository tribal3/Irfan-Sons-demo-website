import About from './components/About'
import Booking from './components/Booking'
import BrandStrip from './components/BrandStrip'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import MobileBar from './components/MobileBar'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <BrandStrip />
        <Services />
        <About />
        <Process />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
