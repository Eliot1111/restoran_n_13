import { Clock, Instagram, MapPin, Phone, Send } from "lucide-react";

const mapSrc =
  "https://yandex.ru/map-widget/v1/?ll=37.593718%2C55.763841&z=15&text=%D0%9F%D0%B0%D1%82%D1%80%D0%B8%D0%B0%D1%80%D1%88%D0%B8%D0%B5%20%D0%BF%D1%80%D1%83%D0%B4%D1%8B";

export function Location() {
  return (
    <section id="contacts" className="section contacts-section">
      <div className="contacts-layout">
        <div className="section-copy contacts-copy" data-reveal>
          <span className="section-number">05</span>
          <h2>Контакты и расположение</h2>
          <ul className="contact-list">
            <li>
              <MapPin size={18} />
              <span>Патриаршие пруды, Москва. Точный адрес можно заменить после подтверждения.</span>
            </li>
            <li>
              <Phone size={18} />
              <a href="tel:+74951231313">+7 (495) 123-13-13</a>
            </li>
            <li>
              <Clock size={18} />
              <span>Пн-Вс: 12:00-00:00</span>
            </li>
          </ul>
          <div className="social-row" aria-label="Социальные сети">
            <a href="#top" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#top" aria-label="Telegram">
              <Send size={18} />
            </a>
          </div>
        </div>

        <div className="map-frame" data-reveal>
          {/* Replace mapSrc with the restaurant's exact Yandex or Google Maps embed link when confirmed. */}
          <iframe
            src={mapSrc}
            title="Карта района Патриарших прудов"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
