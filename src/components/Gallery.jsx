import { galleryPhotos } from "../data/photos.js";

export function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="section-heading" data-reveal>
        <span className="section-number">02</span>
        <h2>Галерея</h2>
        <p>
          Интерьер, детали сервировки и блюда, которые собирают настроение спокойного
          вечера на Патриках.
        </p>
      </div>

      <div className="gallery-grid" data-reveal>
        {galleryPhotos.map((photo) => (
          <figure className={`gallery-item ${photo.span ? `gallery-item--${photo.span}` : ""}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
