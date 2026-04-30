export default function Footer() {
  return (
    <footer id="контакты" className="bg-[#1E1E1E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C98A4B]/15">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C98A4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ваше
                </span>
                <span className="text-[10px] font-medium text-[#C98A4B] tracking-[0.3em] uppercase -mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  название
                </span>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Профессиональный салон груминга для собак. Делаем вашего питомца красивым и ухоженным.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-[#2AABEE]/15 hover:bg-[#2AABEE] text-[#2AABEE] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Telegram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-[#4C75A3]/15 hover:bg-[#4C75A3] text-[#4C75A3] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="ВКонтакте"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-1.145-1.744-1.145-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              Навигация
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Главная", href: "#" },
                { label: "Услуги", href: "#услуги" },
                { label: "Галерея", href: "#галерея" },
                { label: "Запись", href: "#booking" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-[#C98A4B] text-sm transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              Услуги
            </h4>
            <ul className="space-y-3">
              {[
                "Гигиенический груминг",
                "Модельная стрижка",
                "Тримминг",
                "Хэндлинг-рум",
                "Комплексный уход",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#услуги"
                    className="text-white/50 hover:text-[#C98A4B] text-sm transition-colors duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              Контакты
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#C98A4B] mt-0.5 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Телефон</p>
                  <a href="tel:+0000000000" className="text-white text-sm hover:text-[#C98A4B] transition-colors font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    +7 (000) 000-00-00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#C98A4B] mt-0.5 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Адрес</p>
                  <p className="text-white text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Ваш адрес</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#C98A4B] mt-0.5 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>Режим работы</p>
                  <p className="text-white text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Пн – Вс: 10:00 – 20:00</p>
                  <p className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>по предварительной записи</p>
                </div>
              </div>

              {/* Messenger buttons */}
              <div className="pt-2 flex gap-2">
                <a
                  href="https://wa.me/0000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-xs font-semibold rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  WhatsApp
                </a>
                <a
                  className="flex-1 text-center py-2 text-xs font-semibold rounded-xl bg-[#2AABEE]/15 hover:bg-[#2AABEE]/25 text-[#2AABEE] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 Ваше название. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Оферта"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
