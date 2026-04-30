import { useState } from "react";

const galleryItems = [
  { img: "/images/image grum1.jpg", dog: "Бернский зенненхунд", label: "Гигиенический груминг" },
  { img: "/images/image grum2.jpg", dog: "Сиамский кот", label: "Модельная стрижка" },
  { img: "/images/image grum3.jpg", dog: "Самоед", label: "Тримминг" },
  { img: "/images/image grum4.jpg", dog: "Померанский шпиц", label: "Стрижка машинкой" },
  { img: "/images/image grum6.jpg", dog: "Вельш-корги", label: "Подготовка к выставке" },
  { img: "/images/image grum7.jpg", dog: "Бельгийская овчарка", label: "Стрижка когтей" },
  { img: "/images/image grum8.jpg", dog: "Американская акита", label: "Уход за шерстью" },
  { img: "/images/image grum9.jpg", dog: "Английские кокер-спаниели", label: "Комплексный уход" },
];

const ITEMS_PER_PAGE = 4;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const goTo = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () => goTo((activeIndex - 1 + galleryItems.length) % galleryItems.length);
  const next = () => goTo((activeIndex + 1) % galleryItems.length);

  const visibleItems = galleryItems.slice(0, visibleCount);
  const showMore = () => setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, galleryItems.length));
  const showLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
    setActiveIndex(0);
  };

  return (
    <section id="галерея" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C98A4B]/10 border border-[#C98A4B]/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
            <span
              className="text-xs font-semibold text-[#C98A4B] tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Портфолио
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Наши{" "}
            <em className="not-italic text-[#C98A4B]">работы</em>
          </h2>
          <p
            className="text-base text-[#777777] max-w-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Каждый питомец заслуживает лучшего. Смотрите результаты наших
            мастеров — до и после преображения
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative">
          {/* Main featured image */}
          <div className="relative rounded-3xl overflow-hidden bg-[#F5EDE0] aspect-[16/9] max-h-[520px] shadow-2xl shadow-[#C98A4B]/10" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={galleryItems[activeIndex].img}
                alt={galleryItems[activeIndex].dog}
                className={`max-w-full max-h-full object-contain transition-all duration-500 ${isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
              />
            </div>

            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <div className="flex items-end justify-between">
                <div>
                  <p
                    className="text-white/70 text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {galleryItems[activeIndex].label}
                  </p>
                  <h3
                    className="text-white text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {galleryItems[activeIndex].dog}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C98A4B]" />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {activeIndex + 1} / {galleryItems.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Thumbnail grid */}
          <div className="relative mt-8">
            <div className="grid grid-cols-4 gap-4">
              {visibleItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`relative rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-300 ${
                    activeIndex === index
                      ? "ring-3 ring-[#C98A4B] ring-offset-2 scale-[1.02] shadow-lg"
                      : "opacity-60 hover:opacity-90 hover:scale-[1.01]"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.dog}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
                    <p
                      className="text-white text-[10px] font-medium truncate"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.dog}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Show more / Show less button */}
            {visibleCount < galleryItems.length && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={showMore}
                  className="px-6 py-2 bg-[#C98A4B] text-white text-sm font-semibold rounded-full hover:bg-[#b07840] transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Показать ещё ({galleryItems.length - visibleCount})
                </button>
              </div>
            )}
            
            {visibleCount > ITEMS_PER_PAGE && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={showLess}
                  className="px-6 py-2 border-2 border-[#C98A4B] text-[#C98A4B] text-sm font-semibold rounded-full hover:bg-[#C98A4B] hover:text-white transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Свернуть
                </button>
              </div>
            )}
          </div>

          {/* Dot indicators (mobile) */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-6 h-2 bg-[#C98A4B]"
                    : "w-2 h-2 bg-[#C98A4B]/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom trust text */}
        <div className="flex flex-wrap justify-center gap-8 mt-14">
          {[
            { icon: "✨", text: "Индивидуальный подход к каждому питомцу" },
            { icon: "🌿", text: "Только профессиональная косметика" },
            { icon: "💎", text: "Результат соответствует стандартам породы" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <span className="text-xl">{item.icon}</span>
              <span
                className="text-sm text-[#666666]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}