// ---------------------------------------------------------------------------
// Premium Car Wash — Bengaluru
// Single source of truth for all site content (used by UI + SEO metadata).
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Premium Car Wash",
  city: "Bengaluru",
  tagline: "Premium Car Wash & Detailing Studio — Bengaluru",
  domain: "https://www.premiumcarwash.in", // change to your real domain before launch
  phoneDisplay: "+91 89042 19680",
  phoneRaw: "+918904219680",
  whatsapp: "918904219680", // WhatsApp director number (India, no leading 0)
  email: "booking@premiumcarwash.in",
  address: "Koramangala, Bengaluru, Karnataka 560034, India",
  hours: "9:00 AM – 8:00 PM · 7 Days a Week",
  areas: [
    "Koramangala",
    "HSR Layout",
    "Indiranagar",
    "Whitefield",
    "Jayanagar",
    "JP Nagar",
    "Electronic City",
    "Marathahalli",
  ],
};

/** Build a wa.me deep link with a pre-filled message. */
export const waLink = (text) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    text ||
      "Hi Premium Car Wash! I'd like to book a car wash / detailing service in Bengaluru. 🚗✨"
  )}`;

/** Format a number as Indian Rupees, e.g. 4000 -> ₹4,000 */
export const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

// --- Pricing (as per owner) ------------------------------------------------

export const PRICING = [
  {
    name: "Exterior Only",
    price: 2000,
    tagline: "Complete outside wash & showroom shine",
    popular: false,
    features: [
      "Snow-foam bath & hand wash",
      "High-pressure rinse",
      "Tyres, wheels & arches cleaned",
      "Tyre dressing & exterior glass",
      "Microfiber dry — zero scratches",
    ],
  },
  {
    name: "Interior Only",
    price: 2000,
    tagline: "Deep cabin & seat cleaning",
    popular: false,
    features: [
      "Industrial vacuum cleaning",
      "Seat shampoo & extraction",
      "Dashboard & console detailing",
      "Door panels, carpets & boot",
      "AC vent dusting & fragrance finish",
    ],
  },
  {
    name: "Exterior + Interior",
    price: 4000,
    tagline: "The complete premium detail — our signature",
    popular: true,
    features: [
      "Everything in Exterior Only",
      "Everything in Interior Only",
      "Wax & paint sealant polish",
      "Engine bay wipe-down",
      "Trim & chrome restoration",
      "Final showroom-quality inspection",
    ],
  },
  {
    name: "Bike Wash — Inside & Outside",
    price: null, // custom quote on WhatsApp
    tagline: "Full two-wheeler wash & care",
    popular: false,
    features: [
      "Gentle foam wash (inside & outside)",
      "Chain & engine degreasing",
      "Plastic & metal polish",
      "Seat & handlebar sanitising",
      "Rust-protection spray",
    ],
  },
];

// --- Services ---------------------------------------------------------------

export const SERVICES = [
  {
    icon: "droplet",
    title: "Premium Car Wash",
    desc: "Snow-foam hand wash, high-pressure rinse, tyre dressing and a streak-free showroom finish for every body type.",
  },
  {
    icon: "sparkles",
    title: "Full Car Detailing",
    desc: "Complete inside-out restoration — polish, wax, trim care, engine bay and a spotless cabin that feels brand new again.",
  },
  {
    icon: "bike",
    title: "Bike Wash (Inside & Outside)",
    desc: "Gentle foam wash for two-wheelers with chain degreasing, plastic polish and complete inside-outside cleaning.",
  },
  {
    icon: "wind",
    title: "Interior Deep Clean",
    desc: "Industrial vacuum cleaner, seat shampooing, dashboard detailing and odour-free cabin sanitisation.",
  },
];

// --- Why us -----------------------------------------------------------------

export const FEATURES = [
  {
    icon: "wind",
    title: "Industrial Vacuum Available",
    desc: "Powerful vacuum cleaning for seats, carpets, boot and floor mats — deep dust removal, every single visit.",
  },
  {
    icon: "shield",
    title: "Premium Products Only",
    desc: "pH-neutral shampoos, plush microfiber towels and professional-grade waxes that protect your paint.",
  },
  {
    icon: "pin",
    title: "Doorstep Service Across Bengaluru",
    desc: "We come to your home or office with water and power arrangements — zero hassle for you.",
  },
  {
    icon: "clock",
    title: "On-Time, Every Time",
    desc: "Book on WhatsApp and we reach on schedule. Open 9:00 AM – 8:00 PM, seven days a week.",
  },
];

// --- Hero stats --------------------------------------------------------------

export const STATS = [
  { value: "5,200+", label: "Cars & Bikes Detailed" },
  { value: "4.9★", label: "Google Rating" },
  { value: "127+", label: "Verified Reviews" },
  { value: "15+", label: "Bengaluru Areas Covered" },
];

// --- Gallery -----------------------------------------------------------------

export const GALLERY = [
  {
    src: "/gallery/foam-wash.jpg",
    title: "Snow-Foam Exterior Wash",
    tag: "Car Wash",
    alt: "Black luxury sedan covered in thick snow foam at Premium Car Wash Bengaluru",
  },
  {
    src: "/gallery/interior-detail.jpg",
    title: "Leather Seat Detailing",
    tag: "Detailing",
    alt: "Technician cleaning luxury car leather seats during premium interior detailing",
  },
  {
    src: "/gallery/bike-wash.jpg",
    title: "Bike Wash — Inside & Outside",
    tag: "Bike Wash",
    alt: "Motorcycle covered in wash foam at a premium bike wash in Bengaluru",
  },
  {
    src: "/gallery/alloy-wheel.jpg",
    title: "Alloy Wheel & Tyre Care",
    tag: "Detailing",
    alt: "Close-up of a car alloy wheel and tyre being detailed with a brush",
  },
  {
    src: "/gallery/showroom-shine.jpg",
    title: "Showroom Shine Finish",
    tag: "Car Wash",
    alt: "Freshly polished red sports car with a mirror-like showroom finish",
  },
  {
    src: "/gallery/cockpit.jpg",
    title: "Cockpit Restoration",
    tag: "Interior",
    alt: "Luxury car dashboard and steering wheel after premium interior restoration",
  },
  {
    src: "/gallery/studio.jpg",
    title: "Our Premium Studio",
    tag: "Studio",
    alt: "Premium car wash studio interior in Bengaluru with warm gold accent lighting",
  },
];

// --- Reviews (marketing testimonials) ----------------------------------------

export const RATING = { score: "4.9", count: 127 };

export const REVIEWS = [
  {
    name: "Rahul Sharma",
    meta: "Hyundai Creta · Exterior + Interior",
    date: "2 weeks ago",
    text: "Booked the ₹4,000 exterior + interior package for my Creta. The car looks better than the day I bought it — the industrial vacuum and seat shampoo are worth every rupee. Truly premium!",
  },
  {
    name: "Priya Nair",
    meta: "Honda City · Interior Only ₹2,000",
    date: "3 weeks ago",
    text: "Got the interior-only service for my City. Seats, carpets and the dashboard are spotless and the cabin smells amazing. Fair pricing and a very professional team.",
  },
  {
    name: "Arjun Reddy",
    meta: "Royal Enfield · Bike Wash",
    date: "1 month ago",
    text: "My Royal Enfield was coated in Bangalore dust. They washed it inside and outside, degreased the chain and polished the plastics — it looks brand new. Best bike wash in Bengaluru, hands down.",
  },
  {
    name: "Sneha Kulkarni",
    meta: "Doorstep Service · HSR Layout",
    date: "1 month ago",
    text: "They came to my home in HSR Layout with everything — water, vacuum, the works. Zero hassle, super polite staff, and my SUV shines like new. Highly recommended!",
  },
  {
    name: "Vikram Iyer",
    meta: "BMW · Full Detailing",
    date: "2 months ago",
    text: "Premium detailing on my BMW and the paint finish is outstanding. You can tell they use quality products, not cheap chemicals. WhatsApp booking was smooth too.",
  },
  {
    name: "Mohammed Faizan",
    meta: "Swift · Exterior Wash ₹2,000",
    date: "2 months ago",
    text: "Quick exterior wash at a great price. The foam wash and tyre dressing make the car look fresh every time. Friendly staff and a spotless studio. Will book again!",
  },
];

// --- FAQs (also used for FAQ rich snippets) -----------------------------------

export const FAQS = [
  {
    q: "How much does a premium car wash cost in Bengaluru?",
    a: "Exterior-only wash is ₹2,000, interior-only (seats & cabin deep clean) is ₹2,000, and the complete exterior + interior premium package is ₹4,000. All prices include industrial vacuum cleaning and premium products.",
  },
  {
    q: "Do you also wash bikes?",
    a: "Yes! We offer a complete bike wash — inside and outside — including foam wash, chain degreasing, plastic polish and rust-protection spray. Message us on WhatsApp for a bike-wash quote.",
  },
  {
    q: "Is a vacuum cleaner available for interior cleaning?",
    a: "Absolutely. We use an industrial-grade vacuum cleaner for deep dust removal from seats, carpets, the boot and floor mats before shampooing.",
  },
  {
    q: "Do you provide doorstep service in Bengaluru?",
    a: "Yes. We cover Koramangala, HSR Layout, Indiranagar, Whitefield, Jayanagar, JP Nagar, Electronic City, Marathahalli and all major areas of Bengaluru.",
  },
  {
    q: "How do I book a slot?",
    a: "Just WhatsApp or call us on +91 89042 19680. We're open 9:00 AM – 8:00 PM, seven days a week, and confirm your slot instantly on WhatsApp.",
  },
];

// --- SEO helpers ----------------------------------------------------------------

export const SEO = {
  title: "Premium Car Wash Bengaluru | Car Detailing & Bike Wash — ₹2,000 onwards",
  description:
    "Premium Car Wash in Bengaluru — professional car wash, full car detailing & bike wash (inside/outside). Exterior + Interior ₹4,000 · Exterior ₹2,000 · Interior ₹2,000. Industrial vacuum cleaning & doorstep service. Book on WhatsApp +91 89042 19680.",
  keywords: [
    "premium car wash Bengaluru",
    "car wash Bengaluru",
    "car detailing Bengaluru",
    "bike wash Bengaluru",
    "car wash near me",
    "interior car cleaning Bangalore",
    "car wash Koramangala",
    "car wash HSR Layout",
    "car wash Indiranagar",
    "car wash Whitefield",
    "doorstep car wash Bangalore",
    "premium car wash Karnataka",
    "bike wash inside outside Bangalore",
    "car vacuum cleaning service Bengaluru",
  ],
};
