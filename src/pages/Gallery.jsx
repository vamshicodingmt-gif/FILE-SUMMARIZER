import { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { GALLERY, whatsappLink } from '../data/site';

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <>
      <Seo
        path="/gallery"
        title="Gallery | Car Wash, Detailing & Bike Wash Photos | Premium Car Wash Bengaluru"
        description="See our work: showroom-finish car washes, deep interior cleaning, detailing and bike wash results from Premium Car Wash in Bengaluru."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>Our work, up close</h1>
          <p className="lead">Tap any photo to view it larger.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} className="gallery-item">
              <button className="gallery-item__btn" onClick={() => setActive(i)} aria-label={`View larger: ${g.caption}`}>
                <img src={g.src} alt={g.alt} loading="lazy" width="800" height="600" />
                <span className="gallery-item__caption">{g.caption}</span>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="container center" style={{ marginTop: 40 }}>
          <a href={whatsappLink('Hi, I would like to book a wash.')} className="btn btn--gold btn--lg" target="_blank" rel="noopener noreferrer">
            Book your slot
          </a>
        </div>
      </section>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close">×</button>
          <img src={GALLERY[active].src} alt={GALLERY[active].alt} onClick={(e) => e.stopPropagation()} />
          <div className="lightbox__nav" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive((active - 1 + GALLERY.length) % GALLERY.length)} aria-label="Previous">‹</button>
            <span>{GALLERY[active].caption}</span>
            <button onClick={() => setActive((active + 1) % GALLERY.length)} aria-label="Next">›</button>
          </div>
        </div>
      )}
    </>
  );
}
