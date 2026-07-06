import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { menuSections } from "../data/menuData.js";

export function MenuSection() {
  const [activeTitle, setActiveTitle] = useState(menuSections[0].title);
  const activeSection = useMemo(
    () => menuSections.find((section) => section.title === activeTitle) ?? menuSections[0],
    [activeTitle],
  );

  return (
    <section id="menu" className="section menu-section">
      <div className="section-heading menu-heading" data-reveal>
        <span className="section-number">03</span>
        <h2>Меню</h2>
        <p>
          Лёгкие закуски, салаты, горячие блюда и напитки - всё, что нужно для
          спокойного обеда, красивой встречи или уютного вечера.
        </p>
      </div>

      <div className="menu-shell" data-reveal>
        <div className="menu-tabs" role="tablist" aria-label="Разделы меню">
          {menuSections.map((section) => (
            <button
              className={`menu-tab ${section.title === activeTitle ? "menu-tab--active" : ""}`}
              key={section.title}
              type="button"
              role="tab"
              aria-selected={section.title === activeTitle}
              onClick={() => setActiveTitle(section.title)}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="menu-topline">
          <div>
            <h3>{activeSection.title}</h3>
            {activeSection.note ? <p>{activeSection.note}</p> : null}
          </div>
          <span>{activeSection.items.length} позиций</span>
        </div>

        <div className="menu-items" role="tabpanel">
          {activeSection.items.map((item) => (
            <article className="menu-card" key={`${activeSection.title}-${item.name}`}>
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
              <div className="menu-price">
                <strong>{item.price}</strong>
                <span>{item.meta}</span>
              </div>
            </article>
          ))}
        </div>

        <a className="text-link menu-link" href="#booking">
          Забронировать к меню
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
