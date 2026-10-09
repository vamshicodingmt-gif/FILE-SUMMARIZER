import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { SITE, SERVICES, CAR_PACKAGES, REVIEWS, whatsappLink, GALLERY } from '../data/site';
import { formatINR, Stars } from '../components/ui';

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Premium Car Wash Bengaluru | Car Wash, Detailing & Bike Wash"
        description="Premium car wash in Bengaluru: hand wash, interior cleaning, vacuum, car detailing and bike wash inside & outside. Complete car care ₹4,000. Book on WhatsApp."
      />

      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(/images/hero.jpg)` }} aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container hero__content">
          <p className="eyebrow">Bengaluru’s premium car & bike care</p>
          <h1>
            Your car deserves <span className="gold">the premium treatment.</span>
          </h1>
          <p className="lead">
            Hand wash, interior care, vacuum cleaning, car detailing and bike wash — inside and out — by a trained team using premium products.
          </p>
          <div className="hero__actions">
            <a href={whatsappLink()} className="btn btn--gold btn--lg" target="_blank" rel="noopener noreferrer">
              Book on WhatsApp
            </a>
            <Link to="/pricing" className="btn btn--ghost btn--lg">
              View Pricing
            </Link>
          </div>
          <ul className="hero__badges">
            <li>✔ Premium hand wash</li>
            <li>✔ Vacuum cleaning available</li>
            <li>✔ Car & bike care</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Our services</p>
            <h2>Everything your ride needs</h2>
            <p className="muted">From a quick exterior shine to full detailing and bike care, we do it all with precision.</p>
          </Reveal>
          <div className="grid grid--4">
            {SERVICES.map((s) => (
              <Reveal key={s.id} className="card">
                <div className="card__icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p className="muted">{s.short}</p>
                <Link to="/services" className="text-link">
                  Learn more →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Transparent pricing</p>
            <h2>Simple, honest prices</h2>
            <p className="muted">No hidden charges. Pick the package that suits your car.</p>
          </Reveal>
          <div className="grid grid--3">
            {CAR_PACKAGES.map((p) => (
              <Reveal key={p.id} className={`price-card ${p.popular ? 'price-card--featured' : ''}`}>
                {p.popular && <span className="badge">Most popular</span>}
                <h3>{p.name}</h3>
                <p className="muted">{p.subtitle}</p>
                <p className="price">{formatINR(p.price)}</p>
                <a href={whatsappLink(`Hi, I want to book: ${p.name} (${formatINR(p.price)})`)} className="btn btn--gold btn--block" target="_blank" rel="noopener noreferrer">
                  Book now
                </a>
              </Reveal>
            ))}
          </div>
          <p className="center muted small">Bike wash (inside & outside) and car detailing — <Link to="/pricing">get a quote</Link>.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Our work</p>
            <h2>A glimpse of the shine</h2>
          </Reveal>
          <div className="grid grid--3 gallery-preview">
            {GALLERY.slice(0, 3).map((g) => (
              <Reveal key={g.src} className="gallery-item">
                <img src={g.src} alt={g.alt} loading="lazy" width="800" height="600" />
                <span className="gallery-item__caption">{g.caption}</span>
              </Reveal>
            ))}
          </div>
          <p className="center"><Link to="/gallery" className="btn btn--ghost">See full gallery</Link></p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Customer reviews</p>
            <h2>Loved by Bengaluru drivers & riders</h2>
          </Reveal>
          <div className="grid grid--3">
            {REVIEWS.slice(0, 3).map((r) => (
              <Reveal key={r.name} className="review">
                <Stars rating={r.rating} />
                <p>“{r.text}”</p>
                <p className="review__meta"><strong>{r.name}</strong> · {r.car}</p>
              </Reveal>
            ))}
          </div>
          <p className="center"><Link to="/reviews" className="btn btn--ghost">Read all reviews</Link></p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Ready for a showroom finish?</h2>
            <p>Message us on WhatsApp at <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a> to book your slot today.</p>
          </div>
          <a href={whatsappLink()} className="btn btn--gold btn--lg" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
