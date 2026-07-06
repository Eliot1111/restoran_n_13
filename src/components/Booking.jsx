import { useState } from "react";
import { CalendarDays, Check, Users } from "lucide-react";
import { photos } from "../data/photos.js";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="booking-layout">
        <div className="section-copy booking-copy" data-reveal>
          <span className="section-number">04</span>
          <h2>Бронь столика</h2>
          <p>Забронируйте стол - мы свяжемся с вами для подтверждения.</p>
          <div className="booking-note">
            <CalendarDays size={18} />
            <span>Лучше оставить заявку заранее, особенно на вечер пятницы и выходные.</span>
          </div>
        </div>

        <form className="booking-form" onSubmit={onSubmit} data-reveal>
          <label>
            Имя
            <input name="name" type="text" placeholder="Ваше имя" required />
          </label>
          <label>
            Телефон
            <input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
          </label>
          <label>
            Дата
            <input name="date" type="date" required />
          </label>
          <label>
            Время
            <input name="time" type="time" required />
          </label>
          <label>
            Гости
            <span className="select-wrap">
              <Users size={16} />
              <select name="guests" defaultValue="2">
                <option value="1">1 гость</option>
                <option value="2">2 гостя</option>
                <option value="3">3 гостя</option>
                <option value="4">4 гостя</option>
                <option value="5">5 гостей</option>
                <option value="6+">6+ гостей</option>
              </select>
            </span>
          </label>
          <label className="field-wide">
            Комментарий
            <textarea name="comment" placeholder="Пожелания к столику" rows="5" />
          </label>

          <button className="button button--dark form-button" type="submit">
            Забронировать
          </button>

          {submitted ? (
            <p className="success-message" role="status">
              <Check size={18} />
              Спасибо, мы свяжемся с вами для подтверждения брони.
            </p>
          ) : null}
        </form>

        <img
          className="booking-photo"
          src={photos.focaccia}
          alt="Тёплая подача блюда и напитка"
          loading="lazy"
          data-reveal
        />
      </div>
    </section>
  );
}
