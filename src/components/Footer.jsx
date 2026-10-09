import { Link } from 'react-router-dom';
import { NAV, SITE, whatsappLink } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link to="/" className="logo">
            <span className="logo__mark">PCW</span>
            <span className="logo__text">
              PREMIUM<span> CAR WASH</span>
            </span>
          </Link>
          <p className="muted">{SITE.tagline}. Premium hand wash, detailing, interior care and bike wash in {SITE.city}.</p>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul className="footer__links">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__links">
            <li>
              <a href={`tel:${SITE.phoneE164}`}>📞 {SITE.phoneDisplay}</a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                💬 WhatsApp us
              </a>
            </li>
            <li>📍 {SITE.area}</li>
            <li>🕒 {SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
