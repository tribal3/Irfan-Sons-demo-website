import {
  Car,
  Droplets,
  Fan,
  Gauge,
  Snowflake,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const images = {
  hero: '/images/hero.jpg',
  aboutMain: '/images/about-main.jpg',
  aboutSmall: '/images/about-small.jpg',
  galleryVent: '/images/gallery-vent.jpg',
  galleryDashboard: '/images/gallery-dashboard.jpg',
  galleryMechanicTall: '/images/gallery-mechanic-tall.jpg',
  galleryMechanicWide: '/images/gallery-mechanic-wide.jpg',
  galleryWorkshop: '/images/gallery-workshop.jpg',
  galleryEngine: '/images/gallery-engine.jpg',
}

export type Service = {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Snowflake,
    title: 'A/C Gas Charging',
    description:
      'Measured R134a and R1234yf refills, pressure-tested before and after. No guesswork, no overcharging.',
  },
  {
    icon: Wrench,
    title: 'Compressor Repair',
    description:
      'Denso, Sanden and OEM compressors diagnosed, rebuilt or replaced with genuine-grade parts.',
  },
  {
    icon: Wind,
    title: 'Cooling Coil Service',
    description:
      'Evaporator and cooling coil cleaning, leak repair and airflow restoration for a fresher cabin.',
  },
  {
    icon: Gauge,
    title: 'Leak Detection',
    description:
      'UV dye, nitrogen and pressure testing to find the leak once — instead of topping up gas every month.',
  },
  {
    icon: Fan,
    title: 'Condenser & Fan',
    description:
      'Condenser cleaning, fan motor and relay repairs that keep the system cooling in Karachi traffic.',
  },
  {
    icon: Droplets,
    title: 'Cabin Filter & Airflow',
    description:
      'Filter replacement and duct cleaning to clear dust, musty smells and weak airflow from the vents.',
  },
  {
    icon: Zap,
    title: 'Electrical & Controls',
    description:
      'Blower motors, resistors, climate switches and wiring faults traced and repaired properly.',
  },
  {
    icon: Car,
    title: 'Jeep, SUV & Import',
    description:
      'Dual-zone, rear A/C and imported vehicles serviced by technicians who know the systems inside out.',
  },
]

export type Brand = string

export const brands: Brand[] = [
  'Toyota',
  'Honda',
  'Suzuki',
  'Kia',
  'Hyundai',
  'Nissan',
  'Mitsubishi',
  'Daihatsu',
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Volkswagen',
]

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Book or walk in',
    description:
      'Call, WhatsApp or drop by the workshop. We will find a slot that works — most cars are seen the same day.',
  },
  {
    number: '02',
    title: 'Cooling system check',
    description:
      'We test vent temperature, pressures, refrigerant and airflow to find the real cause, not just the symptom.',
  },
  {
    number: '03',
    title: 'Approve the quote',
    description:
      'You get a clear, itemised quote before we touch anything. No surprise charges and no pressure to proceed.',
  },
  {
    number: '04',
    title: 'Cold air, verified',
    description:
      'We repair, recharge and re-test the system, then hand your car back with the vents blowing properly cold.',
  },
]

export type GalleryItem = {
  src: string
  alt: string
  caption: string
  className: string
}

export const gallery: GalleryItem[] = [
  {
    src: images.galleryMechanicTall,
    alt: 'Mechanic inspecting a car engine bay at Irfan Sons Car A/C',
    caption: 'Engine bay diagnostics',
    className: 'g-a',
  },
  {
    src: images.galleryWorkshop,
    alt: 'Car on a lift inside the Irfan Sons workshop',
    caption: 'The workshop, P.E.C.H.S',
    className: 'g-b',
  },
  {
    src: images.galleryVent,
    alt: 'Close-up of a car air conditioning vent',
    caption: 'Vent temperature testing',
    className: 'g-c',
  },
  {
    src: images.galleryMechanicWide,
    alt: 'Technician working on a car air conditioning system',
    caption: 'Compressor & coil work',
    className: 'g-d',
  },
  {
    src: images.galleryDashboard,
    alt: 'Car dashboard with air vents and climate controls',
    caption: 'Blower & climate controls',
    className: 'g-e',
  },
  {
    src: images.galleryEngine,
    alt: 'Hands repairing a car engine in the workshop',
    caption: 'On the tools',
    className: 'g-f',
  },
]

export type Testimonial = {
  quote: string
  name: string
  car: string
  initials: string
  tone: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'AC bilkul theek ho gayi. Pehle pura check kiya, phir quote diya — koi extra charge nahi. Gas bhi original lagayi. Highly recommended.',
    name: 'Hamza Ali',
    car: 'Toyota Corolla',
    initials: 'HA',
    tone: 'ice',
  },
  {
    quote:
      'My City\u2019s cooling had almost died. They found a leaking condenser, showed me the part, and had it sorted the same afternoon. Cold air again — and the cabin smells fresh.',
    name: 'Ayesha Siddiqui',
    car: 'Honda City',
    initials: 'AS',
    tone: 'orange',
  },
  {
    quote:
      'Been taking my family cars here for years. Straightforward people, fair rates, and the work is done properly the first time. That is rare in Karachi.',
    name: 'Bilal Sheikh',
    car: 'Suzuki Every',
    initials: 'BS',
    tone: 'sand',
  },
]

export type PricePlan = {
  name: string
  price: string
  prefix: string
  summary: string
  features: string[]
  cta: string
  featured?: boolean
  badge?: string
}

export const pricePlans: PricePlan[] = [
  {
    name: 'Cool Check',
    prefix: 'PKR',
    price: '1,500',
    summary: 'A quick, no-guesswork diagnosis for a system that is not cooling right.',
    features: [
      '20-minute A/C inspection',
      'Vent temperature test',
      'Visual leak and pressure check',
      'Itemised repair quote',
      'Fee adjusted against repair',
    ],
    cta: 'Book a check',
  },
  {
    name: 'Full A/C Service',
    prefix: 'from PKR',
    price: '6,500',
    summary: 'Our most-booked seasonal service. Ideal before summer really bites.',
    features: [
      'Refrigerant top-up (R134a)',
      'Cooling coil and condenser clean',
      'Cabin filter check or replacement',
      'Leak and pressure test',
      'Final cooling performance test',
    ],
    cta: 'Book full service',
    featured: true,
    badge: 'Most booked',
  },
  {
    name: 'Major Repair',
    prefix: 'from PKR',
    price: '18,000',
    summary: 'Compressor and hard-part repairs, done with parts you can trust.',
    features: [
      'Full system diagnosis',
      'Compressor repair or replacement',
      'Genuine or OEM-grade parts',
      'System flush and recharge',
      'Workmanship warranty',
    ],
    cta: 'Request a quote',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'How long does a car A/C service take?',
    answer:
      'A standard gas charge and service takes 2–4 hours. Compressor or cooling coil work can take a full day. We always give you a realistic time before you leave the car with us.',
  },
  {
    question: 'My A/C is blowing warm air. What could be wrong?',
    answer:
      'Usually it is low refrigerant from a small leak, a failing compressor, a blocked condenser or a faulty condenser fan. Our pressure and leak tests tell us which — so you do not pay for parts you do not need.',
  },
  {
    question: 'Do you use genuine refrigerant?',
    answer:
      'Yes. We use measured R134a, and R1234yf where the car requires it. Systems are charged by weight, not by guesswork. Cheap gas is a false economy.',
  },
  {
    question: 'Which cars do you work on?',
    answer:
      'Japanese, Korean, European and local cars — from Suzuki and Toyota to Honda, Kia, Hyundai and imported SUVs. Dual-zone and rear A/C systems are all handled in-house.',
  },
  {
    question: 'Do you offer a warranty?',
    answer:
      'Workmanship is covered by our own warranty. Parts carry the manufacturer or supplier warranty, and we explain exactly what is covered before fitting anything.',
  },
  {
    question: 'Can I wait while my car is serviced?',
    answer:
      'Yes — there is a waiting area, and Tariq Road is a short walk away. For longer jobs you can drop the car and we will call you with updates.',
  },
]

export const contact = {
  phoneDisplay: '0300 9279564',
  phoneHref: 'tel:+923009279564',
  whatsapp: 'https://wa.me/923009279564',
  addressShort: 'Plot #230/C, Central Commercial Area, Block 2, P.E.C.H.S',
  addressLine1: 'Plot #230/C, Central Commercial Area, Block 2,',
  addressLine2: 'P.E.C.H.S, Off Tariq Road, Karachi 75100',
  hoursWeek: 'Mon – Sat · 9:00 AM – 9:00 PM',
  hoursSunday: 'Sunday · 11:00 AM – 5:00 PM',
  mapQuery:
    'Irfan Sons Car AC, Plot 230-C, Central Commercial Area, Block 2, PECHS, Off Tariq Road, Karachi 75100, Pakistan',
}
