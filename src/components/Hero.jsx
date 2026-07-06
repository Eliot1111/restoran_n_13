import { ArrowDown, ArrowRight } from "lucide-react";
import { photos } from "../data/photos.js";

export function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero__image" src={photos.diningRoom} alt="" aria-hidden="true" />
      <div className="hero__line" aria-hidden="true" />
      <div className="hero__content" data-reveal>
        <h1>Ресторан №13</h1>
        <p className="hero__lead">
          Уютное место на Патриках, где светлое дерево, мягкий свет и сдержанная
          эстетика создают настроение для красивых встреч.
        </p>
        <div className="hero__actions">
          <a className="button button--dark" href="#booking">
            Забронировать стол
            <ArrowRight size={17} />
          </a>
          <a className="button button--light" href="#menu">
            Смотреть меню
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Перейти к разделу о ресторане">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
