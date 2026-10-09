import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { SERVICES, whatsappLink } from '../data/site';

export default function Services() {
  return (
    <>
      <Seo
        path="/services"
        title="Car Wash, Detailing, Interior Cleaning & Bike Wash Services | Premium Car Wash Bengaluru"
        description="Explore our services in Bengaluru: premium car wash, car detailing, interior cleaning with vacuum, and bike wash inside & outside."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Premium care for cars & bikes</h1>
          <p className="lead">Every service is performed by hand with premium, pH-balanced products that are gentle on paint and interiors.</p>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} className={`service-row ${i % 2 ? 'service-row--flip' : ''}`}>
              <div className="service-row__text">
                <div className="card__icon" aria-hidden="true">{s.icon}</div>
                <h2>{s.title}</h2>
                <p className="muted">{s.description}</p>
                <ul className="checks">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a href={whatsappLink(`Hi, I'd like to know more about: ${s.title}`)} className="btn btn--gold" target="_blank" rel="noopener noreferrer">
                  Enquire on WhatsApp
                </a>
              </div>
              <div className="service-row__panel">
                <span className="service-row__big" aria-hidden="true">{s.icon}</span>
                <p>{s.short}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
