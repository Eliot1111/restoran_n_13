import { useEffect } from "react";
import { About } from "./components/About.jsx";
import { Booking } from "./components/Booking.jsx";
import { Footer } from "./components/Footer.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Location } from "./components/Location.jsx";
import { MenuSection } from "./components/Menu.jsx";

function usePageMotion() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
}

export default function App() {
  usePageMotion();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <MenuSection />
        <Booking />
        <Location />
      </main>
      <Footer />
    </>
  );
}
