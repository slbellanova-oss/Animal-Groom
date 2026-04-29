import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function PawIcon() {
  return (
    <img src="/images/doglapka.svg" alt="paw" className="w-6 h-6" />
  );
}

export default function App() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCookie(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
      const children = section.children;
      if (children.length > 0) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    const cards = document.querySelectorAll(".group.relative.bg-white.rounded-3xl");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Booking />
      </main>
      <Footer />

      {/* Cookie Banner */}
      {showCookie && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-[400px] bg-[#333333] rounded-2xl p-5 shadow-2xl z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
          <div className="flex items-start gap-4">
            <div className="text-[#C98A4B] flex-shrink-0 mt-0.5">
              <PawIcon />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Мы используем куки
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Чтобы улучшить ваш опыт, мы собираем данные о посещении сайта. Это помогает нам делать сайт лучше.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCookie(false)}
                  className="flex-1 py-2.5 bg-[#C98A4B] text-white text-sm font-semibold rounded-xl hover:bg-[#b07840] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Принять
                </button>
                <button
                  onClick={() => setShowCookie(false)}
                  className="flex-1 py-2.5 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/10 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Отклонить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}