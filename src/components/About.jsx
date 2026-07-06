import { ArrowRight } from "lucide-react";
import { photos } from "../data/photos.js";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="section-grid">
        <div className="section-copy" data-reveal>
          <span className="section-number">01</span>
          <h2>О заведении</h2>
          <p>
            Мы собрали пространство, в котором хочется задержаться: тёплые оттенки
            дерева, спокойный бетонный серый, лёгкая лепнина и чёрные лофт-акценты.
          </p>
          <p>
            Здесь одинаково приятно встретиться за салатом и напитком, попробовать
            горячее или провести вечер в красивом интерьере.
          </p>
          <a className="text-link" href="#gallery">
            Смотреть атмосферу
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="about-media" data-reveal>
          <figure className="photo-frame photo-frame--large">
            <img src={photos.interiorMirror} alt="Интерьер ресторана с зеркалом и мягким светом" />
          </figure>
          <figure className="photo-frame photo-frame--offset">
            <img src={photos.tableWide} alt="Сервированный стол с цветами" />
          </figure>
          <figure className="photo-frame photo-frame--small">
            <img src={photos.dishSalad} alt="Салат с креветками и овощами" />
          </figure>
        </div>
      </div>
    </section>
  );
}
