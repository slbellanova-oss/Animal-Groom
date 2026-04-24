export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,#FDF6EE_0%,#FAFAFA_50%,#F5EDE0_100%)]" />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#C98A4B]/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[#C98A4B]/5 blur-2xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-[#C98A4B]/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Info panel */}
            <div className="bg-[#333333] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#C98A4B]/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#C98A4B]/10 blur-xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C98A4B]/20 border border-[#C98A4B]/30 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C98A4B] animate-pulse" />
                  <span
                    className="text-xs font-semibold text-[#C98A4B] tracking-widest uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Запись открыта
                  </span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Запишите питомца
                  <br />
                  <em className="not-italic text-[#C98A4B]">уже сегодня</em>
                </h2>

                <p
                  className="text-white/60 text-sm leading-relaxed mb-8"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Заполните форму или свяжитесь с нами напрямую. Ответим в течение 15 минут в рабочее время.
                </p>

                {/* Contact info */}
                <div className="space-y-4">
                  {[
                    {
                      icon: "📞",
                      label: "Телефон",
                      value: "+7 (982) 708-84-99",
                      href: "tel:+79827088499",
                    },
                    {
                      icon: "💬",
                      label: "WhatsApp",
                      value: "Написать в WhatsApp",
                      href: "https://wa.me/79827088499",
                    },
                    {
                      icon: "🕐",
                      label: "Режим работы",
                      value: "Пн–Вс: 9:00 – 20:00",
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#C98A4B]/15 flex items-center justify-center text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p
                          className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white text-sm font-medium hover:text-[#C98A4B] transition-colors"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className="text-white text-sm font-medium"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating at bottom */}
              <div className="relative mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-[#C98A4B]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    className="text-white/60 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    5.0 — отзывы 200+ клиентов
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-10 lg:p-12">
              <h3
                className="text-2xl font-bold text-[#333333] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Оставить заявку
              </h3>
              <p
                className="text-sm text-[#888888] mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Мы перезвоним и подберём удобное время
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Ваше имя" type="text" placeholder="Анна" />
                  <FormField label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Порода собаки
                  </label>
                  <input
                    type="text"
                    placeholder="Например, Йоркширский терьер"
                    className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E0D8] bg-[#FAFAFA] text-[#333333] text-sm placeholder-[#BBBBBB] focus:outline-none focus:border-[#C98A4B] focus:ring-2 focus:ring-[#C98A4B]/15 transition-all duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Услуга
                  </label>
                  <select
                    className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E0D8] bg-[#FAFAFA] text-[#333333] text-sm focus:outline-none focus:border-[#C98A4B] focus:ring-2 focus:ring-[#C98A4B]/15 transition-all duration-200 appearance-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Выберите услугу</option>
                    <option>Гигиенический груминг</option>
                    <option>Модельная стрижка</option>
                    <option>Тримминг</option>
                    <option>Хэндлинг-рум</option>
                    <option>Комплексный уход</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Комментарий
                  </label>
                  <textarea
                    placeholder="Расскажите о пожеланиях или особенностях питомца..."
                    rows={3}
                    className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E0D8] bg-[#FAFAFA] text-[#333333] text-sm placeholder-[#BBBBBB] focus:outline-none focus:border-[#C98A4B] focus:ring-2 focus:ring-[#C98A4B]/15 transition-all duration-200 resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C98A4B] text-white font-semibold rounded-2xl hover:bg-[#b07840] transition-all duration-300 hover:shadow-lg hover:shadow-[#C98A4B]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Записаться на груминг
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <p
                  className="text-center text-xs text-[#AAAAAA]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-2"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-2xl border border-[#E8E0D8] bg-[#FAFAFA] text-[#333333] text-sm placeholder-[#BBBBBB] focus:outline-none focus:border-[#C98A4B] focus:ring-2 focus:ring-[#C98A4B]/15 transition-all duration-200"
        style={{ fontFamily: "'Inter', sans-serif" }}
      />
    </div>
  );
}
