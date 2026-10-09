import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { CAR_PACKAGES, FAQS, SITE, whatsappLink } from '../data/site';
import { formatINR } from '../components/ui';

export default function Pricing() {
  // Structured data so Google can show the prices in search results.
  const offers = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Premium Car Wash Packages',
    itemListElement: CAR_PACKAGES.map((p) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: `${p.name} (${p.subtitle})`, provider: { '@type': 'AutoWash', name: SITE.name } },
      price: String(p.price),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    })),
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <Seo
        path="/pricing"
        title="Car Wash Price in Bengaluru | ₹4,000 Complete Car Care | Premium Car Wash"
        description="Transparent car wash prices in Bengaluru: Complete Car Care (exterior + interior) ₹4,000, exterior wash ₹2,000, interior seat care ₹2,000. Bike wash & detailing on enquiry."
      />
      <script type="application/ld+json">{JSON.stringify(offers)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1>Clear prices. No surprises.</h1>
          <p className="lead">Pick a package below. Prices are for cars; for bikes and detailing, message us for a quote.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--3">
          {CAR_PACKAGES.map((p) => (
            <Reveal key={p.id} className={`price-card ${p.popular ? 'price-card--featured' : ''}`}>
              {p.popular && <span className="badge">Best value</span>}
              <h3>{p.name}</h3>
              <p className="muted">{p.subtitle}</p>
              <p className="price">{formatINR(p.price)}</p>
              <ul className="checks">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href={whatsappLink(`Hi, I want to book: ${p.name} (${formatINR(p.price)})`)} className="btn btn--gold btn--block" target="_blank" rel="noopener noreferrer">
                Book {p.name}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head">
            <h2>Bike wash & car detailing</h2>
            <p className="muted">These depend on the bike model, car size and condition. Send us a photo on WhatsApp and we’ll reply with an exact quote.</p>
          </Reveal>
          <div className="grid grid--2">
            <Reveal className="price-card">
              <h3>🏍️ Bike Wash</h3>
              <p className="muted">Inside & outside wash, chain care, seat & tank cleaning.</p>
              <p className="price price--small">Quote on WhatsApp</p>
              <a href={whatsappLink('Hi, I want a quote for a bike wash (inside & outside).')} className="btn btn--ghost btn--block" target="_blank" rel="noopener noreferrer">Get bike quote</a>
            </Reveal>
            <Reveal className="price-card">
              <h3>✨ Car Detailing</h3>
              <p className="muted">Paint correction, ceramic protection, deep interior detailing.</p>
              <p className="price price--small">Quote on WhatsApp</p>
              <a href={whatsappLink('Hi, I want a quote for car detailing.')} className="btn btn--ghost btn--block" target="_blank" rel="noopener noreferrer">Get detailing quote</a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <Reveal className="section__head">
            <h2>Frequently asked questions</h2>
          </Reveal>
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>{f.q}</summary>
                <p className="muted">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="center muted small">Still have questions? <Link to="/contact">Contact us</Link> or call {SITE.phoneDisplay}.</p>
        </div>
      </section>
    </>
  );
}
