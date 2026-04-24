export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#FAFAFA] flex items-center overflow-hidden pt-20"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F5EDE0]/60 rounded-bl-[120px]" />
        <div className="absolute top-24 right-[5%] w-72 h-72 rounded-full bg-[#C98A4B]/5 blur-3xl" />
        <div className="absolute bottom-10 left-[15%] w-48 h-48 rounded-full bg-[#C98A4B]/8 blur-2xl" />
        {/* Decorative dots pattern */}
        <div className="absolute top-32 left-8 opacity-20">
          <DotsPattern />
        </div>
        <div className="absolute bottom-24 right-12 opacity-10">
          <DotsPattern />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#C98A4B]/10 border border-[#C98A4B]/20">
            <span className="w-2 h-2 rounded-full bg-[#C98A4B] animate-pulse" />
            <span
              className="text-xs font-semibold text-[#C98A4B] tracking-widest uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Профессиональный груминг
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] leading-[1.15] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Груминг и уход
            <br />
            <em className="not-italic text-[#C98A4B]">за вашими</em>
            <br />
            питомцами
          </h1>

          {/* Sub-headline */}
          <p
            className="text-base sm:text-lg text-[#666666] leading-relaxed mb-8 max-w-md"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Профессиональный салон красоты для животных: гигиена, модельные
            стрижки и тримминг с заботой о каждой собаке.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mb-10">
            {[
              { value: "1000+", label: "Довольных питомцев" },
              { value: "более 10 лет", label: "Опыта работы" },
              { value: "100%", label: "Безопасность" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-2xl font-bold text-[#C98A4B]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs text-[#888888] leading-tight mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-[#C98A4B] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#C98A4B]/40 hover:-translate-y-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#b07840] to-[#C98A4B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Записаться онлайн</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="tel:+79827088499"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#C98A4B]/30 text-[#333333] font-medium rounded-full hover:border-[#C98A4B] hover:text-[#C98A4B] transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <PhoneCallIcon />
              Позвонить
            </a>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {["🐶", "🐩", "🐕"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#F5EDE0] border-2 border-white flex items-center justify-center text-sm shadow-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p
              className="text-xs text-[#888888]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Уже <strong className="text-[#333333]">1000+ владельцев</strong>{" "}
              доверяют нам своих питомцев
            </p>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Image container */}
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[60px] border-2 border-dashed border-[#C98A4B]/20 animate-spin-slow" />

            {/* Main image */}
            <div className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[500px] lg:w-[420px] lg:h-[550px] rounded-[50px] overflow-hidden shadow-2xl shadow-[#C98A4B]/20">
              <video
                src="/images/hero-dog.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center"
              />
              <img
                src="/images/hero-dog.jpg"
                alt="Ухоженная собака"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#2C1A0E]/40 to-transparent" />

              {/* Floating label on image */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                <span
                  className="text-xs font-semibold text-[#333333]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  После груминга ✨
                </span>
              </div>
            </div>

            {/* Floating card: rating */}
            <div className="absolute -left-6 sm:-left-12 top-16 bg-white rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-[#F0E8DD]">
              <div className="w-10 h-10 rounded-xl bg-[#C98A4B]/10 flex items-center justify-center text-xl">
                ⭐
              </div>
              <div>
                <p
                  className="text-xs text-[#999] leading-none mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Рейтинг
                </p>
                <p
                  className="text-sm font-bold text-[#333]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  5.0 / 5.0
                </p>
              </div>
            </div>

            {/* Floating card: experience */}
            <div className="absolute -right-4 sm:-right-10 bottom-32 bg-white rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-[#F0E8DD]">
              <div className="w-10 h-10 rounded-xl bg-[#C98A4B]/10 flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <p
                  className="text-xs text-[#999] leading-none mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Опыт работы
                </p>
                <p
                  className="text-sm font-bold text-[#333]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  10+ лет
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}

function DotsPattern() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 20 + 10}
            cy={row * 20 + 10}
            r="2"
            fill="#C98A4B"
          />
        ))
      )}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
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
  );
}

function PhoneCallIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
