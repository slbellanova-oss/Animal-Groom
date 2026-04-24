const services = [
  {
    emoji: "🛁",
    icon: <HygienicIcon />,
    title: "Гигиенический груминг",
    description:
      "Купание с профессиональной косметикой, сушка феном, чистка ушей, подстрижка когтей и обработка лап.",
    color: "#E8F4FD",
    accent: "#5BA3D9",
    tag: "Популярно",
  },
  {
    emoji: "✂️",
    icon: <HaircutIcon />,
    title: "Модельная стрижка",
    description:
      "Авторская стрижка по стандарту породы или индивидуальному пожеланию. Финальная укладка и оформление образа.",
    color: "#FDF3E8",
    accent: "#C98A4B",
    tag: "Хит",
  },
  {
    emoji: "🔧",
    icon: <TrimmingIcon />,
    title: "Тримминг",
    description:
      "Профессиональное удаление отмершей шерсти вручную для жесткошерстных пород. Сохраняет текстуру и цвет шерсти.",
    color: "#F0EDF8",
    accent: "#8B6BBE",
    tag: "",
  },
  {
    emoji: "🏠",
    icon: <HandlingIcon />,
    title: "Хэндлинг-рум",
    description:
      "Специальная подготовка собак к выставкам: постановка стойки, работа в ринге, финальный груминг для шоу.",
    color: "#EDF7ED",
    accent: "#4CAF50",
    tag: "Эксклюзив",
  },
];

export default function Services() {
  return (
    <section id="услуги" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C98A4B]/10 border border-[#C98A4B]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C98A4B]" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
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
            href="https://wa.me/79827088499"
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
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="group relative bg-white rounded-3xl p-7 border border-[#F0E8DD] shadow-sm hover:shadow-xl hover:shadow-[#C98A4B]/10 hover:-translate-y-2 transition-all duration-400 cursor-pointer overflow-hidden">
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

function HygienicIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 21H5a2 2 0 01-2-2v-1a5 5 0 015-5h8a5 5 0 015 5v1a2 2 0 01-2 2h-2" />
      <path d="M12 3C9.79 3 8 4.79 8 7v4h8V7c0-2.21-1.79-4-4-4z" />
      <path d="M8 11v2" />
      <path d="M16 11v2" />
    </svg>
  );
}

function HaircutIcon() {
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

function TrimmingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L8 7l4 5-4 5 4 5" />
      <path d="M12 2l4 5-4 5 4 5-4 5" />
    </svg>
  );
}

function HandlingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2c0 0-2 1-2 5s2 6 2 6" />
      <path d="M16 2c0 0 2 1 2 5s-2 6-2 6" />
      <path d="M6 13s-3 1-3 4 3 5 3 5" />
      <path d="M18 13s3 1 3 4-3 5-3 5" />
      <path d="M6 22h12" />
      <path d="M8 13h8" />
    </svg>
  );
}
