const reasons = [
  {
    icon: "🐾",
    title: "Любовь к животным",
    description:
      "Каждый наш мастер — это не просто профессионал, но и настоящий любитель собак. Мы относимся к вашему питомцу как к своему.",
  },
  {
    icon: "💆",
    title: "Стресс-free подход",
    description:
      "Мы работаем без клеток, без спешки. Питомец чувствует себя комфортно на протяжении всей процедуры.",
  },
  {
    icon: "🧴",
    title: "Премиум косметика",
    description:
      "Используем только профессиональную гипоаллергенную косметику для животных из Европы и США.",
  },
  {
    icon: "🎓",
    title: "Сертифицированные мастера",
    description:
      "Наши грумеры имеют дипломы международного образца и регулярно повышают квалификацию.",
  },
];

export default function WhyUs() {
  return (
    <section id="о нас" className="py-24 bg-[#F5EDE0]/40 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C98A4B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image mosaic */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Large image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#C98A4B]/15 aspect-[3/4]">
                <img
                  src="/images/image grum5.jpg"
                  alt="Наш салон груминга"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-5 border border-[#F0E8DD]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#C98A4B]/10 flex items-center justify-center text-2xl">
                    🏅
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold text-[#333333]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      #1
                    </p>
                    <p
                      className="text-xs text-[#888888]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Выбор владельцев
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating small card top-left */}
              <div className="absolute -top-6 -left-6 bg-[#333333] rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <span className="text-xl">✨</span>
                <div>
                  <p
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    1000+ довольных клиентов
                  </p>
                  <p
                    className="text-white/50 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    за 1 год работы
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C98A4B]/10 border border-[#C98A4B]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              <span
                className="text-xs font-semibold text-[#C98A4B] tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Почему выбирают нас
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ваш питомец
              <br />
              <em className="not-italic text-[#C98A4B]">в надёжных руках</em>
            </h2>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-5 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-[#C98A4B]/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C98A4B]/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#C98A4B]/20 transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[#333333] mb-1.5 group-hover:text-[#C98A4B] transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {reason.title}
                    </h3>
                    <p
                      className="text-sm text-[#777777] leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom trust strip */}
            <div className="mt-8 pt-8 border-t border-[#E8DDD0] grid grid-cols-3 gap-4">
              {[
                { num: "1000+", label: "Клиентов" },
                { num: "1 год", label: "На рынке" },
                { num: "100%", label: "Гарантия" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl font-bold text-[#C98A4B]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-xs text-[#888888] mt-0.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
