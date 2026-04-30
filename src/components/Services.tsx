import { useState } from "react";

const services = [
  {
    emoji: "🛁",
    icon: <BathIcon />,
    title: "Гигиенический груминг",
    description:
      "Купание с профессиональной косметикой, сушка феном, чистка ушей, подстрижка когтей и обработка лап.",
    color: "#E8F4FD",
    accent: "#5BA3D9",
    tag: "Популярно",
    details: {
      steps: [
        "Осмотр питомца и оценка состояния шерсти и кожи",
        "Купание с использованием профессиональной косметики, подобранной под тип шерсти",
        "Сушка феном с использованием техники, безопасной для породы",
        "Чистка ушей с удалением серы и проверкой на наличие инфекций",
        "Подстрижка когтей специальными кусачками",
        "Обработка лап: увлажнение подушечек, удаление шерсти между пальцами",
        "Чистка глаз и обработка слезных дорожек",
        "Финальный осмотр и рекомендации по уходу",
      ],
      duration: "1,5–2 часа",
      price: "от 1500 ₽",
    },
  },
  {
    emoji: "✂️",
    icon: <ScissorsIcon />,
    title: "Модельная стрижка",
    description:
      "Авторская стрижка по стандарту породы или индивидуальному пожеланию. Финальная укладка и оформление образа.",
    color: "#FDF3E8",
    accent: "#C98A4B",
    tag: "Хит",
    details: {
      steps: [
        "Консультация с владельцем о желаемом образе",
        "Мойка и подготовка шерсти к стрижке",
        "Стрижка по стандарту породы или авторскому эскизу",
        "Выбривание зон (мордочка, уши, лапы, хвост)",
        "Финальная укладка с использованием стайлинговых средств",
        "Обработка шерсти кондиционером для блеска",
        "Дополнительные услуги: чистка ушей, стрижка когтей",
        "Фото готового образа для владельца",
      ],
      duration: "2–3 часа",
      price: "от 2500 ₽",
    },
  },
  {
    emoji: "🔧",
    icon: <StripIcon />,
    title: "Тримминг",
    description:
      "Профессиональное удаление отмершей шерсти вручную для жесткошерстных пород. Сохраняет текстуру и цвет шерсти.",
    color: "#F0EDF8",
    accent: "#8B6BBE",
    tag: "",
    details: {
      steps: [
        "Оценка состояния шерсти и готовность к триммингу",
        "Вычесывание подшерстка пуходеркой",
        "Удаление отмершей шерсти методом выщипывания",
        "Формирование силуэта согласно стандарту породы",
        "Тримминг мордочки, ушей и интимных зон",
        "Стрижка машинкой для придания аккуратного вида",
        "Обработка кожи успокаивающими средствами",
        "Консультация по уходу между триммингами",
      ],
      duration: "2–4 часа",
      price: "от 3000 ₽",
    },
  },
  {
    emoji: "🏆",
    icon: <TrophyIcon />,
    title: "Хэндлинг-рум",
    description:
      "Специальная подготовка собак к выставкам: постановка стойки, работа в ринге, финальный груминг для шоу.",
    color: "#EDF7ED",
    accent: "#4CAF50",
    tag: "Эксклюзив",
    details: {
      steps: [
        "Теоретическая часть: правила поведения в ринге",
        "Постановка стойки на столе и на полу",
        "Отработка движения по кругу и по прямой",
        "Работа с поводком (ринговка)",
        "Обучение показа зубов и экспертной оценки",
        "Выставочный груминг: финальная подготовка шерсти",
        "Управление стрессом собаки в условиях выставки",
        "Разбор типичных ошибок и рекомендации",
      ],
      duration: "1,5–2 часа",
      price: "от 2000 ₽",
    },
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const selected = selectedService !== null ? services[selectedService] : null;

  return (
    <>
      <section id="услуги" className="py-24 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C98A4B]/10 border border-[#C98A4B]/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              <span
                className="text-xs font-semibold text-[#C98A4B] tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Наши услуги
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] mb-4 max-w-2xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Всё, что нужно
              <em className="not-italic text-[#C98A4B]"> вашему питомцу</em>
            </h2>
            <p
              className="text-base text-[#777777] max-w-xl leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Мы предоставляем полный спектр услуг по уходу за вашим питомцем в
              комфортной и безопасной атмосфере
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                onClick={() => setSelectedService(index)} 
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col items-center mt-16 gap-4">
            <p
              className="text-sm text-[#888888]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Не знаете, что нужно вашей собаке?
            </p>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-[#C98A4B] text-[#C98A4B] font-semibold rounded-full hover:bg-[#C98A4B] hover:text-white transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Спросить в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div 
            className="relative bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F0E8DD] hover:bg-[#C98A4B] hover:text-white flex items-center justify-center transition-colors z-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="p-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: selected!.color }}
              >
                <div style={{ color: selected!.accent }}>{selected!.icon}</div>
              </div>

              <h2
                className="text-2xl font-bold text-[#333333] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {selected!.title}
              </h2>

              {selected!.tag && (
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
                  style={{ 
                    backgroundColor: `${selected!.accent}18`, 
                    color: selected!.accent 
                  }}
                >
                  {selected!.tag}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-sm font-bold text-[#C98A4B] uppercase tracking-wider mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Что входит в процедуру
                  </h3>
                  <ul className="space-y-2">
                    {selected!.details.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#555555]" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C98A4B] mt-2 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-[#888888] uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Длительность</p>
                    <p className="text-lg font-bold text-[#333333]" style={{ fontFamily: "'Playfair Display', serif" }}>{selected!.details.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#888888] uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Стоимость</p>
                    <p className="text-lg font-bold text-[#C98A4B]" style={{ fontFamily: "'Playfair Display', serif" }}>{selected!.details.price}</p>
                  </div>
                </div>

                <a
                  href="#booking"
                  onClick={() => setSelectedService(null)}
                  className="block w-full py-4 bg-[#C98A4B] text-white text-center font-semibold rounded-2xl hover:bg-[#b07840] transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Записаться на услугу
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ServiceCard({ service, onClick }: { service: (typeof services)[0]; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white rounded-3xl p-7 border border-[#F0E8DD] shadow-sm hover:shadow-xl hover:shadow-[#C98A4B]/10 hover:-translate-y-2 transition-all duration-400 cursor-pointer overflow-hidden">
      {/* Background accent on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
        style={{
          background: `radial-gradient(circle at top left, ${service.color} 0%, transparent 70%)`,
        }}
      />

      {/* Tag badge */}
      {service.tag && (
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider"
          style={{
            backgroundColor: `${service.accent}18`,
            color: service.accent,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {service.tag}
        </div>
      )}

      {/* Icon */}
      <div
        className="relative mb-5 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: service.color }}
      >
        <div style={{ color: service.accent }}>{service.icon}</div>
      </div>

      {/* Title */}
      <h3
        className="relative text-lg font-bold text-[#333333] mb-3 leading-tight group-hover:text-[#C98A4B] transition-colors duration-300"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="relative text-sm text-[#777777] leading-relaxed mb-5"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {service.description}
      </p>

      {/* Learn more link */}
      <div
        className="relative flex items-center gap-1.5 text-xs font-semibold text-[#C98A4B] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Узнать подробнее
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );
}

function BathIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" y1="5" x2="8" y2="7" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="7" y1="19" x2="7" y2="21" />
      <line x1="17" y1="19" x2="17" y2="21" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function StripIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4c2 0 3 2 3 4" />
      <path d="M16 8c1 1 1 3-1 4" />
      <path d="M16 14c0 2-1 3-3 2" />
      <path d="M10 16c-2 0-3-2-2-4" />
      <path d="M6 12c-1-2 0-4 2-3" />
      <path d="M8 6c1-1 3 0 4 2" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  );
}
