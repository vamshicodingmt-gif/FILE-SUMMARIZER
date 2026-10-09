import { useState } from 'react';
import Seo from '../components/Seo';
import { SITE, SERVICES, whatsappLink } from '../data/site';

const SERVICE_OPTIONS = [
  'Complete Car Care (Exterior + Interior) – ₹4,000',
  'Exterior Wash – ₹2,000',
  'Interior Seat Care – ₹2,000',
  'Car Detailing – quote',
  'Bike Wash (Inside & Outside) – quote',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: SERVICE_OPTIONS[0], vehicle: '', date: '', message: '' });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = [
      'Hi Premium Car Wash, I would like to book a service.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Vehicle (make/model): ${form.vehicle}`,
      `Preferred date/time: ${form.date}`,
      form.message ? `Note: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Seo
        path="/contact"
        title="Contact & Book | Premium Car Wash Bengaluru | WhatsApp +91 89042 19680"
        description="Book your car or bike wash in Bengaluru. Call or WhatsApp +91 89042 19680, or send the booking form and we'll confirm your slot."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Book your wash</h1>
          <p className="lead">Fill in the form and it opens WhatsApp with your details ready to send. Or just call us.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <form className="form card-lg" onSubmit={submit}>
            <label>
              Full name
              <input required name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              WhatsApp / mobile number
              <input required name="phone" type="tel" value={form.phone} onChange={update} placeholder="10-digit mobile number" pattern="[0-9+ ]{10,15}" autoComplete="tel" />
            </label>
            <label>
              Service
              <select name="service" value={form.service} onChange={update}>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              Vehicle make & model
              <input name="vehicle" value={form.vehicle} onChange={update} placeholder="e.g. Honda City / Royal Enfield 350" />
            </label>
            <label>
              Preferred date & time
              <input name="date" type="datetime-local" value={form.date} onChange={update} />
            </label>
            <label>
              Message (optional)
              <textarea name="message" rows="3" value={form.message} onChange={update} placeholder="Anything we should know?" />
            </label>
            <button className="btn btn--gold btn--lg btn--block" type="submit">Send booking on WhatsApp</button>
          </form>

          <aside className="contact-info">
            <div className="card-lg">
              <h3>Call or WhatsApp</h3>
              <p className="big"><a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a></p>
              <a href={whatsappLink()} className="btn btn--gold btn--block" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
            <div className="card-lg">
              <h3>Location & hours</h3>
              <p>📍 {SITE.area}</p>
              <p>🕒 {SITE.hours}</p>
              <a href={SITE.mapsUrl} className="text-link" target="_blank" rel="noopener noreferrer">Open in Google Maps →</a>
            </div>
            <div className="card-lg">
              <h3>What we offer</h3>
              <ul className="checks">
                {SERVICES.map((s) => (
                  <li key={s.id}>{s.title}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
