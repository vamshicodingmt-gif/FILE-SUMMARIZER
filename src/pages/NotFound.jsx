import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <section className="section center">
      <Seo path="/404" title="Page not found | Premium Car Wash" description="The page you are looking for does not exist." />
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="muted">The page you were looking for has moved or doesn’t exist.</p>
        <Link to="/" className="btn btn--gold">Back to home</Link>
      </div>
    </section>
  );
}
