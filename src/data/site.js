// ============================================================
// SITE CONFIG — edit everything about the business here.
// ============================================================

export const SITE = {
  name: 'Premium Car Wash',
  tagline: 'Bengaluru’s Premium Car & Bike Wash and Detailing Studio',
  // Change this to your real domain once you connect one (e.g. https://www.premiumcarwash.in)
  url: 'https://premium-car-wash.vercel.app',
  city: 'Bengaluru',
  region: 'Karnataka',
  country: 'IN',
  phoneDisplay: '+91 89042 19680',
  phoneE164: '+918904219680',
  // WhatsApp uses the number without "+" and without spaces
  whatsappNumber: '918904219680',
  email: '',
  hours: 'Open daily · 8:00 AM – 8:00 PM',
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '20:00' },
  ],
  area: 'Bengaluru, Karnataka, India',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Premium+Car+Wash+Bengaluru',
};

export const whatsappLink = (message = 'Hi, I would like to book a car/bike wash at Premium Car Wash.') =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

// Pricing as given by the business owner.
export const CAR_PACKAGES = [
  {
    id: 'full',
    name: 'Complete Car Care',
    subtitle: 'Exterior + Interior',
    price: 4000,
    popular: true,
    features: [
      'Premium exterior hand wash & dry',
      'Complete interior cleaning',
      'Interior seat cleaning',
      'Powerful vacuum cleaning',
      'Dashboard, console & door-pad wipe-down',
      'Tyre & rim cleaning',
      'Glass cleaning inside & out',
    ],
  },
  {
    id: 'exterior',
    name: 'Exterior Wash',
    subtitle: 'Exterior only',
    price: 2000,
    popular: false,
    features: [
      'Premium exterior hand wash & dry',
      'Tyre & rim cleaning',
      'Exterior glass cleaning',
      'Wax-finish shine',
    ],
  },
  {
    id: 'seats',
    name: 'Interior Seat Care',
    subtitle: 'Seats only',
    price: 2000,
    popular: false,
    features: [
      'Deep seat shampoo & cleaning',
      'Stain & spot treatment',
      'Vacuuming of seats',
      'Fabric / leather conditioning',
    ],
  },
];

export const SERVICES = [
  {
    id: 'car-wash',
    title: 'Premium Car Wash',
    short: 'Hand-finished exterior and interior care that leaves your car spotless.',
    description:
      'Our signature hand wash uses pH-balanced, premium shampoos and soft microfibre mitts — never harsh brushes — to protect your paint. Every car is dried by hand and finished with a streak-free shine.',
    icon: '🚿',
    points: ['Touch-free pre-rinse', 'Hand wash with pH-balanced shampoo', 'Microfibre drying', 'Tyre & rim dressing'],
  },
  {
    id: 'detailing',
    title: 'Car Detailing',
    short: 'Deep restoration for paint, interior and glass — from polish to ceramic protection.',
    description:
      'Paint correction, swirl & scratch removal, ceramic coating, interior deep cleaning, odour removal and glass treatment. Ideal before resale, after monsoon or for a showroom-level finish.',
    icon: '✨',
    points: ['Paint polishing & swirl removal', 'Ceramic / paint protection', 'Deep interior detailing', 'Engine bay cleaning'],
  },
  {
    id: 'interior',
    title: 'Interior Cleaning & Vacuum',
    short: 'Deep vacuuming, seat shampooing and a fresh, hygienic cabin.',
    description:
      'Professional-grade vacuum cleaners reach every corner — under seats, between cushions and in the boot. Seats are shampooed, stains are treated and the cabin is sanitised for a fresh smell.',
    icon: '🧽',
    points: ['Powerful vacuum cleaning', 'Interior seat shampoo', 'Dashboard & console wipe-down', 'Odour-free sanitising'],
  },
  {
    id: 'bike',
    title: 'Bike Wash (Inside & Outside)',
    short: 'Careful, spotless bike wash for every make and model — inside and out.',
    description:
      'Gentle foam wash, chain and drivetrain care, seat and tank cleaning and a shine finish. Bikes are handled with care, with special attention to chrome, alloys and electricals.',
    icon: '🏍️',
    points: ['Outside foam wash & shine', 'Inside & under-body cleaning', 'Chain cleaning & lubrication', 'Seat & tank care'],
  },
];

// Sample gallery — replace with photos of your own work when you have them.
export const GALLERY = [
  { src: '/images/hero.jpg', alt: 'Premium black SUV being hand washed at Premium Car Wash, Bengaluru', caption: 'Signature hand wash' },
  { src: '/images/gallery-1.jpg', alt: 'Mirror-finish black car hood after ceramic-coating detailing', caption: 'Mirror-finish paint' },
  { src: '/images/gallery-2.jpg', alt: 'Spotless luxury car interior after professional deep cleaning', caption: 'Deep interior cleaning' },
  { src: '/images/gallery-3.jpg', alt: 'Motorcycle being washed at a professional bike wash bay', caption: 'Bike wash inside & outside' },
  { src: '/images/gallery-4.jpg', alt: 'White sports car in a premium detailing workshop', caption: 'Detailing workshop' },
  { src: '/images/gallery-5.jpg', alt: 'Car window and door being polished with a microfibre cloth', caption: 'Glass & door care' },
];

// ⚠️ SAMPLE REVIEWS — these are placeholders written for the design.
// Replace them with real, verified customer reviews before going live.
export const REVIEWS = [
  { name: 'Arjun R.', car: 'Honda City', rating: 5, text: 'The best car wash I have tried in Bengaluru. The car looked brand new after the complete care package. Staff were polite and punctual.' },
  { name: 'Sneha K.', car: 'Hyundai Creta', rating: 5, text: 'Seats were spotless after the interior seat care. The vacuuming is very thorough — they even cleaned under the seats. Highly recommended.' },
  { name: 'Vikram M.', car: 'Royal Enfield Classic 350', rating: 5, text: 'Took my bike for the inside and outside wash. Chain was cleaned and lubed, chrome shines like new. Very careful handling.' },
  { name: 'Priya S.', car: 'BMW 3 Series', rating: 5, text: 'Premium experience from booking to delivery. The detailing finish is outstanding and the team clearly knows luxury cars.' },
  { name: 'Rahul D.', car: 'Maruti Swift', rating: 4, text: 'Great exterior wash at a fair price. Booked on WhatsApp and got a quick reply. Will be coming back every month.' },
  { name: 'Ananya N.', car: 'Kia Seltos', rating: 5, text: 'Clean, professional and very transparent pricing. The place smells fresh and the car interior looks showroom-ready.' },
];

export const FAQS = [
  { q: 'What is included in the ₹4,000 Complete Car Care package?', a: 'It includes a premium exterior hand wash and dry, complete interior cleaning, interior seat cleaning, powerful vacuum cleaning, dashboard and door-pad wipe-down, tyre & rim cleaning and glass cleaning inside and out.' },
  { q: 'Do you offer exterior-only or seat-only cleaning?', a: 'Yes. Exterior Wash is ₹2,000 and Interior Seat Care is ₹2,000. You can book either service on its own.' },
  { q: 'Do you clean bikes as well?', a: 'Yes. We offer a complete bike wash for the inside and outside, including chain care and seat and tank cleaning. Message us on WhatsApp for a quote.' },
  { q: 'Is vacuum cleaning available?', a: 'Yes. Professional vacuum cleaners are available for every car package to clean carpets, mats, seats, boot and under-seat areas.' },
  { q: 'How do I book?', a: 'Tap the WhatsApp button and send us your car model, preferred date and time. We confirm your slot on WhatsApp.' },
];
