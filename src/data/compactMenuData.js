import { menuSections } from "./menuData.js";

const sectionByTitle = new Map(menuSections.map((section) => [section.title, section]));

const takeItems = (title, limit) => sectionByTitle.get(title)?.items.slice(0, limit) ?? [];

export const compactMenuSections = [
  {
    title: "Завтраки",
    note: "С 9:00 до 13:00",
    items: takeItems("Завтрак", 10),
  },
  {
    title: "Стартеры и салаты",
    items: [...takeItems("Закуски", 6), ...takeItems("Салаты", 5)],
  },
  {
    title: "Основное",
    items: [...takeItems("Горячие блюда", 8), ...takeItems("Овощи", 3)],
  },
  {
    title: "Паста и супы",
    items: [...takeItems("Паста", 5), ...takeItems("Супы", 3)],
  },
  {
    title: "Десерты и фокачча",
    items: [...takeItems("Десерты", 4), ...takeItems("Фокачча из печи", 3)],
  },
  {
    title: "Напитки и соусы",
    items: [...takeItems("Напитки", 5), ...takeItems("Соусы", 4)],
  },
];
