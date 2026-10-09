import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { REVIEWS, whatsappLink } from '../data/site';
import { Stars } from '../components/ui';

export default function Reviews() {
  return (
    <>
      <Seo
        path="/reviews"
        title="Customer Reviews | Premium Car Wash Bengaluru"
        description="Read what Bengaluru car and bike owners say about Premium Car Wash — premium hand wash, interior cleaning, detailing and bike wash."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Reviews</p>
          <h1>What our customers say</h1>
          <p className="lead">Real care, real results — in the words of our customers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--3">
          {REVIEWS.map((r) => (
            <Reveal key={r.name} className="review">
              <Stars rating={r.rating} />
              <p>“{r.text}”</p>
              <p className="review__meta"><strong>{r.name}</strong> · {r.car}</p>
            </Reveal>
          ))}
        </div>
        <div className="container center" style={{ marginTop: 40 }}>
          <a href={whatsappLink('Hi, I just got a wash and would like to share feedback.')} className="btn btn--ghost btn--lg" target="_blank" rel="noopener noreferrer">
            Share your feedback
          </a>
        </div>
      </section>
    </>
  );
}
